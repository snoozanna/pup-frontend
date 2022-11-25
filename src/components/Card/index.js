import React from "react";
import { Link } from "react-router-dom";

const Card = ({ article }) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? "https://strapi-v1ph.onrender.com/" +
        article.attributes.image.data.attributes.url
      : // : "http://localhost:1337" +

        //  : process.env.REACT_APP_BACKEND_URL +
        article.attributes.image.data.attributes.url;
  // console.log("imageURL", imageUrl);
  return (
    <Link to={`/article/${article.attributes.slug}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <img src={imageUrl} alt={article.attributes.image.url} height="100" />
        </div>
        <div className="uk-card-body">
          <p id="category" className="uk-text-uppercase">
            {article.attributes.category.data.attributes.name}
          </p>
          <p id="title" className="uk-text-large">
            {article.attributes.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
