import Pieces from "../../components/Pieces";
import SEO from "../../components/SEO/SEO";
import Header from "../Header";
import Footer from "../Footer";
import Query from "../../components/Query";
import PIECES_QUERY from "../../queries/pieces/pieces";
import PIECESPAGE_QUERY from "../../queries/pieces/piecespage";
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
        <Query query={PIECESPAGE_QUERY}>
          {({ data: { piecespage } }) => {
            const { introCopy } = piecespage.data.attributes;
            return (
              <div className="introCopy">
                <p>{introCopy}</p>
              </div>
            );
          }}
        </Query>

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
