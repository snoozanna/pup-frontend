import gql from "graphql-tag";

const NOTICE_QUERY = gql`
  query Notice($uid: String!) {
    pieces(filters: { uid: { eq: $uid } }) {
      data {
        attributes {
          uid
          subtitle
          eventName
          date
          type
          caption
          position
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

export default NOTICE_QUERY;
