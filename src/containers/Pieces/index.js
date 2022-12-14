import { Link } from "react-router-dom";
import Pieces from "../../components/Pieces";
import Query from "../../components/Query";
import PIECES_QUERY from "../../queries/pieces/pieces";
// import GameNav from "../../components/GameNav";
import "./Pieces.css";

const PiecesList = () => {
  return (
    <main className="pieces">
      {/* <GameNav /> */}

      <h1 className="funtitle">Pieces to play</h1>
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
      <Query query={PIECES_QUERY}>
        {({ data: { pieces } }) => {
          return <Pieces pieces={pieces.data} />;
        }}
      </Query>
    </main>
  );
};

export default PiecesList;
