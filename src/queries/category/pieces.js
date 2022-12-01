import gql from "graphql-tag";

const CATEGORY_PIECES_QUERY = gql`
  query Category($slug: String!) {
    categories(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          slug
          name
          pieces {
            data {
              attributes {
                slug
                title
                description
                category {
                  data {
                    attributes {
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
      }
    }
  }
`;

export default CATEGORY_PIECES_QUERY;
