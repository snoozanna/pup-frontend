import { Link } from "react-router-dom";
import Pieces from "../../components/Pieces";

import Header from "../Header";
import Footer from "../Footer";
import Query from "../../components/Query";
import PIECES_QUERY from "../../queries/pieces/pieces";
// import GameNav from "../../components/GameNav";
import "./Pieces.css";

const PiecesList = () => {
  return (
    <>
      <Header pageTitle={"Pieces to Play"} />
      <main className="pieces">
        <Query query={PIECES_QUERY}>
          {({ data: { pieces } }) => {
            return <Pieces pieces={pieces.data} />;
          }}
        </Query>
      </main>
      <Footer />
    </>
  );
};

export default PiecesList;
