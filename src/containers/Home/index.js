import { useEffect } from "react";
import Header from "./../Header";
// import SimpleRandomPiece from "./../../components/SimpleRandomPiece";
import SEO from "../../components/SEO/SEO";
import Footer from "./../Footer";
import Query from "./../../components/Query/index.js";
import HOMEPAGE_QUERY from "../../queries/homepage/homepage";
import Rabbit from "../../components/Rabbit";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import "./Home.css";
const Home = () => {
  return (
    <Query query={HOMEPAGE_QUERY}>
      {({ data: { homepage } }) => {
        homepage = homepage.data;

        return (
          <>
            <SEO
              title={"Pop-Up Playhouse"}
              description={"By Coney"}
              name={"Pop-Up Playhouse"}
              type="article"
            />
            <Header pageTitle={""} />

            <main className="home">
              <section className="info">
                <div className="info-wrapper">
                  <h2>Welcome to The Pop-Up Playhouse</h2>
                  <ReactMarkdown
                    children={homepage.attributes.copy}
                    rehypePlugins={[rehypeRaw]}
                  ></ReactMarkdown>{" "}
                </div>
                {/* <SimpleRandomPiece /> */}
              </section>

              <Rabbit />
            </main>

            <Footer />
          </>
        );
      }}
    </Query>
  );
};

export default Home;
