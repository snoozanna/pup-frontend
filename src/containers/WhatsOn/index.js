import { Link } from "react-router-dom";
import Header from "./../Header";
import Footer from "./../Footer";
import Query from "./../../components/Query/index.js";
import ZOOMBAR_QUERY from "../../queries/whatson/whatson";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import "./WhatsOn.css";
import SpinMenu from "../../components/SpinMenu";
const WhatsOn = () => {
  return (
    <>
      <Query query={ZOOMBAR_QUERY}>
        {({ data: { zoombar } }) => {
          zoombar = zoombar.data;
          console.log("zoombar", zoombar);
          return (
            <>
              <Header
                pageTitle={"Whats On"}
                tagline={"in the Coney Zoom bar"}
              />
              <main className="whatson">
                <ReactMarkdown
                  children={zoombar.attributes.content}
                  rehypePlugins={[rehypeRaw]}
                ></ReactMarkdown>{" "}
              </main>
              <SpinMenu />
              <Footer />
            </>
          );
        }}
      </Query>
    </>
  );
};

export default WhatsOn;
