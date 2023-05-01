import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./EventCard.css";

const EventCard = ({ zoombarevent }) => {
  // console.log(piece.attributes);
  const { title, tagline, slug, dateTime } = zoombarevent.attributes;
  const imageUrl =
    // process.env.NODE_ENV !== "development"
    //   ? "http://localhost:1337" + piece.attributes.image.data.attributes.url
    //   : // : "http://localhost:1337" +
    //     //  : process.env.REACT_APP_BACKEND_URL +
    zoombarevent.attributes.image.data.attributes.url;

  const tags = zoombarevent.attributes.tags.data;

  return (
    <Link to={`/events/${slug}`} className="uk-link-reset piece">
      <div className="eventlist-wrapper">
        <div className="img-wrapper">
          <img
            src={imageUrl}
            alt={zoombarevent.attributes.image.data.attributes.url}
            height="100"
          />
        </div>
        <div className="eventInfoWrapper">
          <h3>{title}</h3>
          <p>{tagline}</p>
          <p>
            {" "}
            <ReactMarkdown
              children={zoombarevent.attributes.dateTime}
              rehypePlugins={[rehypeRaw]}
            ></ReactMarkdown>
          </p>
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
      </div>
    </Link>
  );
};

export default EventCard;
