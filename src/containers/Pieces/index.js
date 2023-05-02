import Pieces from "../../components/Pieces";
import SEO from "../../components/SEO/SEO";
import Header from "../Header";
import Footer from "../Footer";
import Query from "../../components/Query";
import PIECES_QUERY from "../../queries/pieces/pieces";
// import GameNav from "../../components/GameNav";
import "./Pieces.css";

const PiecesList = () => {
  return (
    <>
      <SEO
        title={"Pieces to Play"}
        description={"Pop Up Playhouse"}
        name={"Pieces to Play"}
        type="article"
      />
      <Header pageTitle={"Pieces to Play"} />
      <main className="pieces">
        <div className="introCopy">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            mollitia quis delectus similique itaque quisquam officiis nobis
            libero in neque est quaerat harum exercitationem, amet molestias
            nesciunt repellat atque obcaecati.
          </p>
        </div>
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
