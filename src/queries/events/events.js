import gql from "graphql-tag";

const EVENTS_QUERY = gql`
  query Events {
    zoombarevents {
      data {
        attributes {
          slug
          title
          tagline
          dateTime
          tags {
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

export default EVENTS_QUERY;
