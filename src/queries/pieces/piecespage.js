import gql from "graphql-tag";

const PIECESPAGE_QUERY = gql`
  query PiecesToPlay {
    piecespage {
      data {
        attributes {
          introCopy
        }
      }
    }
  }
`;

export default PIECESPAGE_QUERY;
