import { useState } from "react";
// import Pieces from "../Pieces/index.js";
import Query from "../Query/index.js";
import PIECES_QUERY from "../../queries/pieces/pieces";
import { Link } from "react-router-dom";
import "./SpinMenu.css";

const SpinMenu = () => {
  const [random, setRandom] = useState(null);
  const [color, setColor] = useState("green");
  const colors = ["yellow", "blue", "pink", "green"];
  const pickRandomPiece = ({ pieces }) => {
    let arr = pieces.data;
    let rand = Math.floor(Math.random() * arr.length);
    let randC = Math.floor(Math.random() * colors.length);
    var randomPiece = arr[rand];
    setRandom(randomPiece);
    setColor(colors[randC]);
    return randomPiece;
  };
  return (
    <>
      <Query query={PIECES_QUERY}>
        {({ data: { pieces } }) => {
          return (
            <>
              <div
                className={`pickRandom circle ${color}`}
                onClick={() => pickRandomPiece({ pieces })}
              >
                {random ? (
                  <>
                    <div className="randomTitle-wrapper">
                      <h3 className="randomTitle">{random.attributes.title}</h3>
                    </div>
                    <Link
                      to={`/piece/${random.attributes.slug}`}
                      className="uk-link-reset"
                    >
                      <button className="raise">Take me there!</button>
                    </Link>
                  </>
                ) : (
                  <h2 className="pick">Pick a game for me</h2>
                )}
              </div>
            </>
          );
        }}
      </Query>
    </>
  );
};

export default SpinMenu;
