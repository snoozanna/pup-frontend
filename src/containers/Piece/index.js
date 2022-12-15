import { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Query from "./../../components/Query/index.js";
import ReactMarkdown from "react-markdown";
// import Moment from "react-moment";
import rehypeRaw from "rehype-raw";
import rabbit from "./../../assets/rabbit.png";
import PIECE_QUERY from "./../../queries/piece/index.js";

import "./Piece.css";

// const schema = yup
//   .object()
//   .shape({
//     password: yup.string().required(),
//   })
//   .required();

const Piece = () => {
  let { slug } = useParams();
  const [open, setOpen] = useState(false);
  const [reveal, setReveal] = useState(null);

  // INSTRUCTION

  //  REVEAL

  useEffect(() => {
    setOpen(false);
  }, []);

  // FORM

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    // } = useForm({ resolver: yupResolver(schema) });
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const attempt = data.password.toUpperCase();
    if (attempt === "PALM TREE") {
      setReveal(true);
      console.log("attempt");
    } else {
      console.log("wrong");
      return <p>wrong</p>;
    }
  };
  return (
    <Query query={PIECE_QUERY} slug={slug}>
      {({ data: { pieces } }) => {
        if (pieces.data.length) {
          const imageUrl =
            // process.env.NODE_ENV !== "development"
            //   ? "http://localhost:1337/" +
            //     articles.data[0].attributes.image.data.attributes.url
            //   : // : process.env.REACT_APP_BACKEND_URL +
            pieces.data[0].attributes.image.data.attributes.url;
          // console.log("articles", articles.data[0].attributes.content);

          return (
            <main className="piece-wrapper">
              <Link to={`/`}>
                <div className="siteTitleWrapper">
                  <h2 className="siteTitle">
                    <span>The</span> <span>Pop Up</span>
                    <span>Playhouse</span>
                  </h2>
                  <p className="siteCredit">
                    by <span className="coney">Coney</span>
                  </p>
                </div>
              </Link>
              <img
                className="pieceImg"
                src={imageUrl}
                alt={pieces.data[0].attributes.image.data.attributes.url}
              />
              <div className="title-wrapper">
                <h1>{pieces.data[0].attributes.title}</h1>
                <p>{pieces.data[0].attributes.credits}</p>

                <ReactMarkdown
                  children={pieces.data[0].attributes.fullDescription}
                  rehypePlugins={[rehypeRaw]}
                ></ReactMarkdown>
              </div>
              <div className="keyInfo">
                <h3 className="pieceTitle">Playtime</h3>
                <p>{pieces.data[0].attributes.playtime}</p>
                <h3 className="pieceTitle">Instructions</h3>
                <p>{pieces.data[0].attributes.instructions}</p>
                <h3 className="pieceTitle">Players</h3>
                <p>{pieces.data[0].attributes.players}</p>
              </div>
              <div className="description">
                {open ? (
                  <>
                    {/* <ReactMarkdown
                      children={pieces.data[0].attributes.revealText}
                      rehypePlugins={[rehypeRaw]}
                    ></ReactMarkdown> */}
                    <h3 className="howtoplay">How to play</h3>
                    {reveal ? (
                      <>
                        <p>Well done! You entered the correct password.</p>
                        <p>
                          We need to send a small envelope to your postal
                          address.
                        </p>
                        <div className="postageWrapper">
                          <p> Please click below to pay for your postage</p>
                          <div className="buttonWrapper">
                            <a
                              href="https://www.paypal.com/donate/?business=EU8572VTBBBP4&no_recurring=0&item_name=This+is+a+donation+for+X+game&currency_code=GBP"
                              target="_blank"
                              rel="noreferrer"
                              className="buttonItem"
                            >
                              <button className="funButton donate">
                                Donate{" "}
                              </button>
                            </a>
                          </div>
                        </div>
                        <div className="addressWrapper">
                          <p> And then tell us your address</p>

                          <Link to={`/os-form`} className="uk-link-reset">
                            <div className="buttonWrapper">
                              <button className="funButton ">Tell us </button>
                            </div>
                          </Link>
                        </div>
                      </>
                    ) : (
                      <>
                        <p>
                          {" "}
                          To play, you need a keyword, which you can find by
                          falling down a rabbithole.
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          {/* include validation with required or other standard HTML validation rules */}
                          <input
                            {...register("password", { required: true })}
                          />
                          {/* errors will return when field validation fails  */}
                          {errors.password && (
                            <>
                              <span>You need the password to play</span>
                            </>
                          )}

                          <input type="submit" />
                        </form>
                        <p>
                          {" "}
                          PWYW donation to receive an envelope in the post.
                        </p>
                        <div className="buttonWrapper">
                          <a
                            href="https://www.paypal.com/donate/?business=EU8572VTBBBP4&no_recurring=0&item_name=This+is+a+donation+for+X+game&currency_code=GBP"
                            target="_blank"
                            rel="noreferrer"
                            className="buttonItem"
                          >
                            <button className="funButton donate">
                              Donate{" "}
                            </button>
                          </a>
                        </div>
                        <a
                          href="http://www.unregisteredsite.net/unmarkedentrance/"
                          target="_blank"
                          rel="noreferrer"
                          className="rabbit"
                        >
                          <img src={rabbit} alt="rabbit" />
                        </a>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => setOpen(!open)}
                      className="funButton"
                    >
                      I'd like to try!
                    </button>
                    <div></div>
                  </>
                )}
              </div>
            </main>
          );
        }
      }}
    </Query>
  );
};

export default Piece;
