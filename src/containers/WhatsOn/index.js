import { Link } from "react-router-dom";
import Header from "./../Header";
import Footer from "./../Footer";
import Rabbit from "../../components/Rabbit";
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
                pageTitle={"What's On"}
                tagline={"in the Coney Zoom bar"}
              />
              <main className="whatson">
                {/* <ReactMarkdown
                  children={zoombar.attributes.content}
                  rehypePlugins={[rehypeRaw]}
                ></ReactMarkdown>{" "} */}

                <div className="event">
                  <div className="event-item">
                    <h3 className="eventTitle">A Magic Trick</h3>
                    <p className="eventDate">18 May, 7 June & 5 July 2023</p>
                  </div>
                  <div className="event-item secondary">
                    <p className="description">
                      A gentle yet impactful piece of play, aiming to help spark
                      a small positive change in your life.
                    </p>
                    <a
                      href="https://youhavefoundconey.net/suzanna/events/a-magic-trick"
                      class="book"
                    >
                      <button class="orange funButton">More info</button>
                    </a>
                  </div>
                </div>

                <div className="event">
                  <div className="event-item">
                    <h3 className="eventTitle">The Hidden</h3>
                    <p className="eventDate">25 May, 21 June & 18 July 2023</p>
                  </div>
                  <div className="event-item secondary">
                    <p className="description">
                      A live interactive show played primarily over Zoom, set in
                      a corporate dystopia game-world.
                    </p>
                    <a
                      href="https://youhavefoundconey.net/suzanna/events/test-event"
                      class="book"
                    >
                      <button class="orange funButton">More info</button>
                    </a>
                  </div>
                </div>
                <div className="event">
                  <div className="event-item">
                    <h3 className="eventTitle">Overgrown</h3>
                    <p className="eventDate">10 June & 11 June 2023</p>
                  </div>
                  <div className="event-item secondary">
                    <p className="description">
                      A storytelling game exploring our relationship with
                      nature, presented with The Place, Bedford.
                    </p>
                    <a
                      href="https://youhavefoundconey.net/suzanna/events/overgrown"
                      class="book"
                    >
                      <button class="orange funButton">More info</button>
                    </a>
                  </div>
                </div>
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
