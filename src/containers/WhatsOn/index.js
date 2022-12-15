import { Link } from "react-router-dom";

import Query from "./../../components/Query/index.js";
import ZOOMBAR_QUERY from "../../queries/whatson/whatson";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import "./WhatsOn.css";
const WhatsOn = () => {
  return (
    <>
      <Query query={ZOOMBAR_QUERY}>
        {({ data: { zoombar } }) => {
          zoombar = zoombar.data;
          console.log("zoombar", zoombar);
          return (
            <main className="whatson">
              <h1 className="funtitle">Whats on</h1>
              <h2 className="tagline">in the Coney Zoom bar</h2>
              <Link to={`/`} className>
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
              <ReactMarkdown
                children={zoombar.attributes.content}
                rehypePlugins={[rehypeRaw]}
              ></ReactMarkdown>{" "}
            </main>
          );
        }}
      </Query>
    </>
  );
};

export default WhatsOn;
