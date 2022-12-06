import gql from "graphql-tag";

const PIECE_QUERY = gql`
  query Piece($slug: String!) {
    pieces(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          slug
          title
          players
          playtime
          instructions
          credits
          fullDescription
          oneline
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

export default PIECE_QUERY;
