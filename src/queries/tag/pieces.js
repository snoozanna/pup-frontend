import gql from "graphql-tag";

const CATEGORY_TAGS_QUERY = gql`
  query Tag($slug: String!) {
    tags(filters: { slug: { eq: $slug } }) {
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
                tag {
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

export default CATEGORY_TAGS_QUERY;
