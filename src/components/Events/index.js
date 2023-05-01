import React from "react";
import EventCard from "../EventCard/index.js";
import "./Events.css";

const Events = ({ zoombarevents }) => {
  // const leftPiecesCount = Math.ceil(pieces.length / 5);
  // const leftPieces = pieces.slice(0, leftPiecesCount);
  // const rightPieces = pieces.slice(leftPiecesCount, pieces.length);

  return (
    <div className="eventlist-container">
      {zoombarevents.map((zoombarevent) => {
        return (
          <>
            <EventCard
              zoombarevent={zoombarevent}
              key={`event__${zoombarevent.attributes.title}`}
              // key={2}
            />
          </>
        );
      })}
    </div>
  );
};

export default Events;
