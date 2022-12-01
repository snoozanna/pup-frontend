import React from "react";
import { useParams } from "react-router";
import Query from "./../../components/Query/index.js";
import ReactMarkdown from "react-markdown";
// import Moment from "react-moment";
import rehypeRaw from "rehype-raw";

import PIECE_QUERY from "./../../queries/piece/index.js";

import "./Piece.css";

const Piece = () => {
  let { slug } = useParams();

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
            <div className="piece-container">
              <img
                className="pieceImg"
                src={imageUrl}
                alt={pieces.data[0].attributes.image.data.attributes.url}
              />
              <h1>{pieces.data[0].attributes.title}</h1>
              <p>{pieces.data[0].attributes.credits}</p>
              <p>{pieces.data[0].attributes.playtime}</p>
              <div className="uk-section">
                <div className="uk-container uk-container-small">
                  <ReactMarkdown
                    children={pieces.data[0].attributes.description}
                    rehypePlugins={[rehypeRaw]}
                  ></ReactMarkdown>

                  <p>{pieces.data[0].attributes.instructions}</p>
                  <p>{pieces.data[0].attributes.players}</p>
                </div>
              </div>
            </div>
          );
        }
      }}
    </Query>
  );
};

export default Piece;
