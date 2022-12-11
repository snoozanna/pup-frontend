import gql from "graphql-tag";

const TAGS_QUERY = gql`
  query Tags {
    tags {
      data {
        attributes {
          slug
          name
        }
      }
    }
  }
`;

export default TAGS_QUERY;
