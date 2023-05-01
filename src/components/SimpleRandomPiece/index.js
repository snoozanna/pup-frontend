import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";
// import Pieces from "../Pieces/index.js";
import Query from "../Query/index.js";
import PIECES_QUERY from "../../queries/pieces/pieces";
import { Link } from "react-router-dom";
import "./SimpleRandomPiece.css";

const SimpleRandomPiece = () => {
  const [random, setRandom] = useState(null);
  const [color, setColor] = useState("green");
  const colors = ["yellow", "blue", "pink", "green"];

  // Pick a random game from selection
  const pickRandomPiece = ({ pieces }) => {
    let arr = pieces.data;
    let rand = Math.floor(Math.random() * arr.length);
    let randC = Math.floor(Math.random() * colors.length);
    var randomPiece = arr[rand];
    setRandom(randomPiece);
    setColor(colors[randC]);
    return randomPiece;
  };

  // Animations - pulsing, spinning
  // ideally is small and pulsing, then click to toggle enlarge
  const [springs, api] = useSpring(() => ({
    // // from: { transform: "scale(0.5) rotate(0deg)" },
    // // to: { transform: "scale(0.5) rotate(360deg)" },
    // from: { transform: "rotate(0deg)" },
    // to: { transform: "rotate(360deg)" },
    // loop: true,
    // config: { mass: 1, tension: 100, friction: 180 },
  }));

  // Animation happens onclick

  return (
    <>
      <Query query={PIECES_QUERY}>
        {({ data: { pieces } }) => {
          const handleClick = () => {
            pickRandomPiece({ pieces });
            api.start({
              from: {
                transform: " rotate(360deg) ",
              },
              to: {
                // x: 100,
                // transform: "scale(1) rotate(360deg) ",
                transform: " rotate(720deg) ",
              },
              // loop: true,
              config: { tension: 400 },
            });
          };
          return (
            <>
              <div className="">
                <button onClick={handleClick}>
                  <span className="">Pick a game for me</span>
                </button>
                <animated.div
                  className={` ${color}`}
                  onClick={handleClick}
                  style={{ ...springs }}
                >
                  {/* <div className="randomTitleWrapper">
                    {random ? (
                      <Link
                        to={`/piece/${random.attributes.slug}`}
                        className="uk-link-reset"
                      >
                        <h2 className="pick">{random.attributes.title}</h2>
                      </Link>
                    ) : (
                      <h2 className="pick">Pick a game for me</h2>
                    )}
                  </div> */}
                </animated.div>

                <div className="">
                  {random ? (
                    <Link
                      to={`/pieces/${random.attributes.slug}`}
                      className="uk-link-reset"
                    >
                      <h2 className=" ">{random.attributes.title}</h2>
                    </Link>
                  ) : null}
                </div>
              </div>
            </>
          );
        }}
      </Query>
    </>
  );
};

export default SimpleRandomPiece;
