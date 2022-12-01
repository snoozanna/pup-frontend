import Pieces from "../../components/Pieces";
import Query from "../../components/Query";
import PIECES_QUERY from "../../queries/pieces/pieces";
// import GameNav from "../../components/GameNav";

const PiecesList = () => {
  return (
    <div>
      {/* <GameNav /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Pieces to play</h1>
          <Query query={PIECES_QUERY}>
            {({ data: { pieces } }) => {
              return <Pieces pieces={pieces.data} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default PiecesList;
