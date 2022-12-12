import gql from "graphql-tag";

const NOTICES_QUERY = gql`
  query Notices {
    notices {
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

export default NOTICES_QUERY;
