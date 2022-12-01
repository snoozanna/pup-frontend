import React from "react";
import { Link } from "react-router-dom";

const Card = ({ piece }) => {
  const imageUrl =
    // process.env.NODE_ENV !== "development"
    //   ? "http://localhost:1337" + piece.attributes.image.data.attributes.url
    //   : // : "http://localhost:1337" +
    //     //  : process.env.REACT_APP_BACKEND_URL +
    piece.attributes.image.data.attributes.url;
  // console.log("imageURL", imageUrl);
  return (
    <Link to={`/piece/${piece.attributes.slug}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <img
            src={imageUrl}
            alt={piece.attributes.image.data.attributes.url}
            height="100"
          />
        </div>
        <div className="uk-card-body">
          <h3 className="">{piece.attributes.title}</h3>
          <p className="">{piece.attributes.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
