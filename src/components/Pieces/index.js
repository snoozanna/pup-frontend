import React from "react";
import GameCard from "../GameCard/index.js";
import "./Pieces.css";

const Pieces = ({ pieces }) => {
  // const leftPiecesCount = Math.ceil(pieces.length / 5);
  // const leftPieces = pieces.slice(0, leftPiecesCount);
  // const rightPieces = pieces.slice(leftPiecesCount, pieces.length);

  return (
    <div className="pieces-container">
      {pieces.map((piece) => {
        //  TODO THIS KEY NOT WORKING

        return (
          <GameCard
            piece={piece}
            key={`piece__${piece.attributes.title}`}
            // key={2}
          />
        );
      })}
    </div>
  );
};

export default Pieces;
