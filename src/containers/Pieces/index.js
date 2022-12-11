import Pieces from "../../components/Pieces";
import Query from "../../components/Query";
import PIECES_QUERY from "../../queries/pieces/pieces";
// import GameNav from "../../components/GameNav";

const PiecesList = () => {
  return (
    <main className="pieces">
      {/* <GameNav /> */}

      <h1 className="funtitle">Pieces to play</h1>
      <Query query={PIECES_QUERY}>
        {({ data: { pieces } }) => {
          return <Pieces pieces={pieces.data} />;
        }}
      </Query>
    </main>
  );
};

export default PiecesList;
