import gql from "graphql-tag";

const ZOOMBAR_QUERY = gql`
  query WhatsOn {
    zoombar {
      data {
        attributes {
          content
        }
      }
    }
  }
`;

export default ZOOMBAR_QUERY;
