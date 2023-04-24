import gql from "graphql-tag";

const HOMEPAGE_QUERY = gql`
  query Homepage {
    homepage {
      data {
        attributes {
          copy
        }
      }
    }
  }
`;

export default HOMEPAGE_QUERY;
