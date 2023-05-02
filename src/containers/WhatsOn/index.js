import { useEffect } from "react";
import Header from "./../Header";
import Footer from "./../Footer";
import Rabbit from "../../components/Rabbit";
import Query from "./../../components/Query/index.js";
import ZOOMBAR_QUERY from "../../queries/whatson/whatson";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import "./WhatsOn.css";

const WhatsOn = () => {
  useEffect(() => {
    document.title = "Whats On";
  }, []);
  return (
    <>
      <Query query={ZOOMBAR_QUERY}>
        {({ data: { zoombar } }) => {
          zoombar = zoombar.data;
          console.log("zoombar", zoombar);
          return (
            <>
              <Header
                pageTitle={"What's On"}
                tagline={"in the Coney Zoom bar"}
              />
              <main className="whatson">
                <ReactMarkdown
                  children={zoombar.attributes.content}
                  rehypePlugins={[rehypeRaw]}
                ></ReactMarkdown>{" "}
              </main>
              <Rabbit />
              <Footer />
            </>
          );
        }}
      </Query>
    </>
  );
};

export default WhatsOn;
