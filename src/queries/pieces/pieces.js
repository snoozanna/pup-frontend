import gql from "graphql-tag";

const PIECES_QUERY = gql`
  query Pieces {
    pieces {
      data {
        attributes {
          slug
          title
          description
          category {
            data {
              attributes {
                slug
                name
              }
            }
          }
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default PIECES_QUERY;
