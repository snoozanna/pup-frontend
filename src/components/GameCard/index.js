import React from "react";
import { Link } from "react-router-dom";
import "./GameCard.css";

const GameCard = ({ piece }) => {
  // console.log(piece.attributes);
  const { title, oneline, slug } = piece.attributes;
  const imageUrl =
    // process.env.NODE_ENV !== "development"
    //   ? "http://localhost:1337" + piece.attributes.image.data.attributes.url
    //   : // : "http://localhost:1337" +
    //     //  : process.env.REACT_APP_BACKEND_URL +
    piece.attributes.image.data.attributes.url;

  const tags = piece.attributes.tags.data;

  return (
    <Link to={`/pieces/${slug}`} className="uk-link-reset piece">
      <div className="piece-wrapper">
        <div className="img-wrapper">
          <img
            src={imageUrl}
            alt={piece.attributes.image.data.attributes.url}
            height="100"
          />
        </div>
        <div className="pieceInfoWrapper">
          <h3>{title}</h3>
          <p>{oneline}</p>
        </div>
        <div className="tags-wrapper">
          {tags.map((tag) => {
            return (
              <div className="tag-item" key={tag.attributes.name}>
                {tag.attributes.name}{" "}
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
