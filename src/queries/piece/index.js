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
          revealText
          oneline

          image {
            data {
              attributes {
                url
              }
            }
          }
          passphrase {
            __typename
            ... on ComponentPassphrasePassphrase {
              phrase
              phraseprompt
            }
          }
        }
      }
    }
  }
`;

export default PIECE_QUERY;
