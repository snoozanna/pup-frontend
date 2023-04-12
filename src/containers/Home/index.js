import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "./../Header";
import Footer from "./../Footer";
import Query from "./../../components/Query/index.js";
import NOTICES_QUERY from "../../queries/notices/notices";
import SpinMenu from "./../../components/SpinMenu/index.js";
import Note from "./../../components/Note/index.js";
import Polaroid from "./../../components/Polaroid/index.js";
import rabbit from "./../../assets/rabbit.png";
import "./Home.css";
const Home = () => {
  useEffect(() => {
    document.title = "Notice Board";
  }, []);
  return (
    <Query query={NOTICES_QUERY}>
      {({ data: { notices } }) => {
        notices = notices.data;

        return (
          <>
            <Header pageTitle={""} />
            <SpinMenu />
            <main className="home">
              <section className="info">
                <div className="info-wrapper">
                  <h2>Welcome to The Pop Up Playhouse</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    sit iure quo, beatae possimus velit! Saepe, laudantium
                    nesciunt. Deserunt vel distinctio molestiae rerum, doloribus
                    exercitationem omnis ipsam saepe nesciunt animi.{" "}
                  </p>

                  <p>
                    All play is presented for free, but we invite a Pay What You
                    Can donation.
                  </p>
                </div>
              </section>
              <a
                href="http://www.unregisteredsite.net/unmarkedentrance/"
                target="_blank"
                rel="noreferrer"
                className="rabbit"
              >
                <img src={rabbit} alt="rabbit" />
              </a>
            </main>
            <Footer />
          </>
        );
      }}
    </Query>
  );
};

export default Home;
