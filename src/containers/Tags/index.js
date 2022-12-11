import React from "react";
import { useParams } from "react-router";
import Pieces from "../../components/Pieces/index";
import Query from "../../components/Query";
import TAGS_PIECES_QUERY from "../../queries/tag/pieces";

const Tag = () => {
  let { slug } = useParams();

  return (
    <Query query={TAGS_PIECES_QUERY} slug={slug}>
      {({ data: { tags } }) => {
        if (tags.data.length) {
          return (
            <div>
              <div className="uk-section">
                <div className="uk-container uk-container-large">
                  <h1>{tags.data[0].attributes.name}</h1>
                  <Pieces articles={tags.data[0].attributes.pieces.data} />
                </div>
              </div>
            </div>
          );
        }
      }}
    </Query>
  );
};

export default Tag;
