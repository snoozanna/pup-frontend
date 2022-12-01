import React from "react";
import GameCard from "../GameCard/index.js";

const Pieces = ({ pieces }) => {
  const leftPiecesCount = Math.ceil(pieces.length / 5);
  const leftPieces = pieces.slice(0, leftPiecesCount);
  const rightPieces = pieces.slice(leftPiecesCount, pieces.length);

  return (
    <div>
      <div className="uk-child-width-1-2" data-uk-grid>
        <div>
          {leftPieces.map((piece) => {
            return (
              <GameCard piece={piece} key={`piece__${piece.attributes.slug}`} />
            );
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightPieces.map((piece) => {
              return (
                <GameCard
                  piece={piece}
                  key={`piece__${piece.attributes.slug}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pieces;
