import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Query from "./../../components/Query/index.js";
import ReactMarkdown from "react-markdown";
// import Moment from "react-moment";
import rehypeRaw from "rehype-raw";

import PIECE_QUERY from "./../../queries/piece/index.js";

import "./Piece.css";

const Piece = () => {
  let { slug } = useParams();
  let [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, []);
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
              <div className="title-wrapper">
                <h1>{pieces.data[0].attributes.title}</h1>
                <p>{pieces.data[0].attributes.credits}</p>
                <p>
                  {" "}
                  <ReactMarkdown
                    children={pieces.data[0].attributes.fullDescription}
                    rehypePlugins={[rehypeRaw]}
                  ></ReactMarkdown>
                </p>
              </div>
              <img
                className="pieceImg"
                src={imageUrl}
                alt={pieces.data[0].attributes.image.data.attributes.url}
              />

              <div className="description">
                {open ? (
                  <>
                    {/* <ReactMarkdown
                      children={pieces.data[0].attributes.revealText}
                      rehypePlugins={[rehypeRaw]}
                    ></ReactMarkdown> */}
                    <p>
                      This can be bespoke copy for each game. Ie if there are
                      separate links to prepare and to play.
                    </p>
                    <p>
                      Some copy about donating... If you are able to donate that
                      would be great but if not go ahead!
                    </p>
                    <div className="buttonWrapper">
                      <a
                        href="https://www.paypal.com/donate/?business=EU8572VTBBBP4&no_recurring=0&item_name=This+is+a+donation+for+X+game&currency_code=GBP"
                        target="_blank"
                        rel="noreferrer"
                        class="buttonItem"
                      >
                        <button className="funButton donate">Donate </button>
                      </a>

                      <a
                        href="https://afterlifeexperience.org/"
                        target="_blank"
                        rel="noreferrer"
                        class="buttonItem"
                      >
                        <button className="funButton ready">Play </button>
                      </a>
                    </div>
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
              <div className="keyInfo">
                <h3 className="pieceTitle">Playtime</h3>
                <p>{pieces.data[0].attributes.playtime}</p>
                <h3 className="pieceTitle">Instructions</h3>
                <p>{pieces.data[0].attributes.instructions}</p>
                <h3 className="pieceTitle">Players</h3>
                <p>{pieces.data[0].attributes.players}</p>
              </div>
            </main>
          );
        }
      }}
    </Query>
  );
};

export default Piece;
