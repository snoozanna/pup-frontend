import { useQuery } from "@apollo/client";
import SEO from "./../../components/SEO/SEO.js";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import EVENT_QUERY from "../../queries/event/event.js";
import Loader from "../../components/Loader/index.js";
import Header from "../Header";
import Footer from "../Footer";
import "./Event.css";

const Event = () => {
  let { slug } = useParams();
  const { loading, error, data } = useQuery(EVENT_QUERY, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  const { title, tagline, dateTime, bookingLink, copy } =
    data.zoombarevents.data[0].attributes;

  const imageUrl =
    data.zoombarevents.data[0].attributes.image.data.attributes.url;
  const tags = data.zoombarevents.data[0].attributes.tags.data;
  return (
    <>
      <SEO title={title} description={tagline} name={title} type="article" />
      <Header />
      <main className="event-wrapper">
        <Link to={`/`}>
          <div className="siteTitleWrapper">
            <h2 className="siteTitle">
              <span>The</span> <span>Pop-Up</span>
              <span>Playhouse</span>
            </h2>
            <p className="siteCredit">
              by <span className="coney">Coney</span>
            </p>
          </div>
        </Link>

        <img
          className="eventImg"
          src={imageUrl}
          alt={data.zoombarevents.data[0].attributes.image.data.attributes.url}
        />
        <div className="title-wrapper">
          <h1>{data.zoombarevents.data[0].attributes.title}</h1>
          <p className="tagline">
            {data.zoombarevents.data[0].attributes.tagline}
          </p>
          <div className="tags-wrapper">
            {tags.map((tag) => {
              return <div className="tag-item "> {tag.attributes.name} </div>;
            })}
          </div>
        </div>
        {dateTime ? (
          <div className="keyInfo">
            <h3 className="eventTitle">Dates & Times</h3>
            <br />
            <ReactMarkdown
              children={dateTime}
              // children={pmarkdown}
              rehypePlugins={[rehypeRaw]}
            ></ReactMarkdown>

            {bookingLink ? (
              <a
                href={bookingLink}
                className="book"
                target="_blank"
                rel="noreferrer"
              >
                <button className="green">Book</button>
              </a>
            ) : null}
          </div>
        ) : null}
        {copy ? (
          <div className="description">
            <ReactMarkdown
              children={copy}
              rehypePlugins={[rehypeRaw]}
            ></ReactMarkdown>
          </div>
        ) : null}
      </main>
      <Footer />
    </>
  );
};

// </Query>

export default Event;
