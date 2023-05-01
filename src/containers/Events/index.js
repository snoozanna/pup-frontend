import { Link } from "react-router-dom";
import Events from "../../components/Events";

import Header from "../Header";
import Footer from "../Footer";
import Query from "../../components/Query";
import EVENTS_QUERY from "../../queries/events/events.js";
// import GameNav from "../../components/GameNav";
import "./Pieces.css";

const EventsList = () => {
  return (
    <>
      <Header pageTitle={"Whats on"} />
      <main className="pieces">
        <div className="introCopy">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            mollitia quis delectus similique itaque quisquam officiis nobis
            libero in neque est quaerat harum exercitationem, amet molestias
            nesciunt repellat atque obcaecati.
          </p>
        </div>
        <Query query={EVENTS_QUERY}>
          {({ data: { zoombarevents } }) => {
            return <Events zoombarevents={zoombarevents.data} />;
          }}
        </Query>
      </main>
      <Footer />
    </>
  );
};

export default EventsList;
