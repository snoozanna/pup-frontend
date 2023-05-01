import { useState, useEffect, useCallback } from "react";
import { useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
// import Query from "./../../components/Query/index.js";
import ReactMarkdown from "react-markdown";
// import Moment from "react-moment";
import rehypeRaw from "rehype-raw";
import rabbit from "./../../assets/rabbit.png";
import PIECE_QUERY from "./../../queries/piece/index.js";

import "./Piece.css";
import Loader from "../../components/Loader/index.js";
import Header from "../Header";
import Footer from "../Footer";

// const schema = yup
//   .object()
//   .shape({
//     password: yup.string().required(),
//   })
//   .required();

const Piece = () => {
  let { slug } = useParams();
  const [reveal, setReveal] = useState(false);
  const [accessViaPW, setAccessViaPW] = useState(false);
  const [passphrase, setPassphrase] = useState(null);
  const [phrasePrompt, setPhrasePrompt] = useState(null);
  const { loading, error, data } = useQuery(PIECE_QUERY, {
    variables: { slug },
  });

  //  TRYING TO SEE IF THERE IS A PASSCODE REQUIRED, SAVING IF SO
  useEffect(() => {
    if (data) {
      setReveal(false);
      console.log(
        "trying to read the",
        // data.pieces.data[0].attributes.passphrase[0].phrase,
        data,
      );
      if (data.pieces.data[0].attributes.passphrase[0]) {
        const { phrase, phraseprompt } =
          data.pieces.data[0].attributes.passphrase[0];
        setAccessViaPW(true);
        setPassphrase(phrase);
        setPhrasePrompt(phraseprompt);
      }
    }
  }, [data]);

  // FORM
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    // } = useForm({ resolver: yupResolver(schema) });
  } = useForm();
  const onError = (errors, e) => console.log(errors, e);

  if (loading) return <Loader />;
  if (error) return <p>Error : {error.message}</p>;

  // TODO check this deconstruction - doesn't work in the return code
  // if (data.pieces.data.length) {
  //   const {
  //     title,
  //     credits,
  //     fullDescription,
  //     playtime,
  //     image,
  //     instructions,
  //     players,
  //   } = data.pieces.data[0].attributes;
  //   console.log(title);
  // } else {
  //   console.log("problem fetching data");
  // }

  // FORM

  const onSubmit = (inputData, event) => {
    event.preventDefault();
    console.log(inputData, event);
    const attempt = inputData.passphrase;
    if (attempt === passphrase) {
      setAccessViaPW(false);
      setReveal(true);
      console.log("attempt sucessful");
      console.log("accessViaPW", accessViaPW, "reveal", reveal);
    } else {
      console.log("attempt  not sucessful");
      return <p>wrong</p>;
    }
  };
  // }

  const imageUrl = data.pieces.data[0].attributes.image.data.attributes.url;
  return (
    <>
      <Header />
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
          alt={data.pieces.data[0].attributes.image.data.attributes.url}
        />
        <div className="title-wrapper">
          <h1>{data.pieces.data[0].attributes.title}</h1>
          <p>{data.pieces.data[0].attributes.credits}</p>

          <ReactMarkdown
            children={data.pieces.data[0].attributes.fullDescription}
            rehypePlugins={[rehypeRaw]}
          ></ReactMarkdown>
        </div>
        <div className="keyInfo">
          <h3 className="pieceTitle">Playtime</h3>
          <p>{data.pieces.data[0].attributes.playtime}</p>
          <h3 className="pieceTitle">Instructions</h3>
          <p>{data.pieces.data[0].attributes.instructions}</p>
          <h3 className="pieceTitle">Players</h3>
          <p>{data.pieces.data[0].attributes.players}</p>
        </div>
        <div className="description">
          {accessViaPW ? (
            <>
              <p>{phrasePrompt}</p>
              <form onSubmit={handleSubmit(onSubmit, onError)}>
                <input {...register("passphrase", { required: true })} />
                {errors.passphrase && (
                  <>
                    <span>You need the passphrase to play</span>
                  </>
                )}
                <input type="submit" className="funButton" />
              </form>

              <a
                href="http://www.unregisteredsite.net/unmarkedentrance/"
                target="_blank"
                rel="noreferrer"
                className="rabbit"
              >
                <img src={rabbit} alt="rabbit" />
              </a>
            </>
          ) : (
            <>
              {reveal ? (
                <>
                  <ReactMarkdown
                    children={data.pieces.data[0].attributes.revealText}
                    // children={pmarkdown}
                    rehypePlugins={[rehypeRaw]}
                  ></ReactMarkdown>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setReveal(!reveal)}
                    className="funButton"
                  >
                    I'd like to try!
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

// </Query>

export default Piece;

// if access PW = true,
// show form (dynamtic passphrase),
// else show "I'd like to try"

// If PW is successful, or "Id like to try button has been clicked"
// show reveal text
