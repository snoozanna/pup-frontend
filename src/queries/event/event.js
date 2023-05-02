import gql from "graphql-tag";

const EVENT_QUERY = gql`
  query Event($slug: String!) {
    zoombarevents(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          slug
          title
          tagline
          copy

          dateTime
          bookingLink
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

export default EVENT_QUERY;
