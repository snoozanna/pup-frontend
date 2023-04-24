import { useQuery } from "@apollo/client";
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
  console.log(data, "data");
  console.log(slug);

  const imageUrl =
    data.zoombarevents.data[0].attributes.image.data.attributes.url;
  const tags = data.zoombarevents.data[0].attributes.tags.data;
  return (
    <>
      <Header />
      <main className="event-wrapper">
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
          className="eventImg"
          src={imageUrl}
          alt={data.zoombarevents.data[0].attributes.image.data.attributes.url}
        />
        <div className="title-wrapper">
          <h1>{data.zoombarevents.data[0].attributes.title}</h1>
          <p>{data.zoombarevents.data[0].attributes.tagline}</p>
          <div className="tags-wrapper">
            {tags.map((tag) => {
              return <div className="tag-item "> {tag.attributes.name} </div>;
            })}
          </div>
        </div>
        <div className="keyInfo">
          <h3 className="eventTitle">Date</h3>
          <p>{data.zoombarevents.data[0].attributes.date}</p>
          <h3 className="eventTitle">Time</h3>
          <p>{data.zoombarevents.data[0].attributes.time}</p>
        </div>
        <div className="description">
          <ReactMarkdown
            children={data.zoombarevents.data[0].attributes.copy}
            // children={pmarkdown}
            rehypePlugins={[rehypeRaw]}
          ></ReactMarkdown>
          <a
            href={data.zoombarevents.data[0].attributes.bookingLink}
            class="book"
          >
            <button class="green">Book</button>
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
};

// </Query>

export default Event;
