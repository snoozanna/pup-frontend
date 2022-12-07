import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Query from "./../../components/Query/index.js";
import ReactMarkdown from "react-markdown";
// import Moment from "react-moment";
import rehypeRaw from "rehype-raw";

import PIECE_QUERY from "./../../queries/piece/index.js";

import "./Piece.css";

const Piece = () => {
  let { slug } = useParams();
  let [open, setOpen] = useState(false);
  console.log(open);
  useEffect(() => {
    setOpen(false);
  }, []);
  return (
    <Query query={PIECE_QUERY} slug={slug}>
      {({ data: { pieces } }) => {
        if (pieces.data.length) {
          const imageUrl =
            // process.env.NODE_ENV !== "development"
            //   ? "http://localhost:1337/" +
            //     articles.data[0].attributes.image.data.attributes.url
            //   : // : process.env.REACT_APP_BACKEND_URL +
            pieces.data[0].attributes.image.data.attributes.url;
          // console.log("articles", articles.data[0].attributes.content);

          return (
            <main className="piece-wrapper">
              <div className="title-wrapper">
                <h1>{pieces.data[0].attributes.title}</h1>
                <p>{pieces.data[0].attributes.credits}</p>
              </div>
              <img
                className="pieceImg"
                src={imageUrl}
                alt={pieces.data[0].attributes.image.data.attributes.url}
              />

              <div className="description">
                <ReactMarkdown
                  children={pieces.data[0].attributes.fullDescription}
                  rehypePlugins={[rehypeRaw]}
                ></ReactMarkdown>
                <button onClick={() => setOpen(!open)}>I'd like to try!</button>
                {open ? (
                  <>
                    <h3>Great!</h3>
                    <p>
                      This can be bespoke copy for each game. Ie if there are
                      separate links to prepare and to play.
                    </p>
                    <p>
                      Some copy about donating... If you are able to donate that
                      would be great but if not go ahead!
                    </p>
                    <div className="buttonWrapper">
                      <form
                        action="https://www.paypal.com/donate"
                        method="post"
                        target="_blank"
                      >
                        <input
                          type="hidden"
                          name="business"
                          value="EU8572VTBBBP4"
                        />
                        <input type="hidden" name="no_recurring" value="0" />
                        <input type="hidden" name="currency_code" value="GBP" />
                        <input
                          className="donateBtn"
                          type="image"
                          src="https://pics.paypal.com/00/s/NWMwOTFjNjItNDlhMy00NTkwLWEzNjYtNzQ1NzY1MWJiZWM4/file.PNG"
                          border="0"
                          name="submit"
                          title="PayPal - The safer, easier way to pay online!"
                          alt="Donate with PayPal button"
                        />
                        <img
                          alt=""
                          border="0"
                          src="https://www.paypal.com/en_GB/i/scr/pixel.gif"
                          width="1"
                          height="1"
                        />
                      </form>
                      <button className="readyToPlay">Play</button>
                    </div>
                  </>
                ) : null}
              </div>
              <div className="keyInfo">
                <h3 className="pieceTitle">Playtime</h3>
                <p>{pieces.data[0].attributes.playtime}</p>
                <h3 className="pieceTitle">Instructions</h3>
                <p>{pieces.data[0].attributes.instructions}</p>
                <h3 className="pieceTitle">Players</h3>
                <p>{pieces.data[0].attributes.players}</p>
              </div>
            </main>
          );
        }
      }}
    </Query>
  );
};

export default Piece;
