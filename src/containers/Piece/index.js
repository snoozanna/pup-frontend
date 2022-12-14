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
              <h2 className="siteTitle">
                <span>The</span> <span>Pop Up</span>
                <span>Playhouse</span>
              </h2>
              <img
                className="pieceImg"
                src={imageUrl}
                alt={pieces.data[0].attributes.image.data.attributes.url}
              />
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
                    <ReactMarkdown
                      children={pieces.data[0].attributes.revealText}
                      rehypePlugins={[rehypeRaw]}
                    ></ReactMarkdown>
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
