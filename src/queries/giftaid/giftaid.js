import gql from "graphql-tag";

const GIFTAID_QUERY = gql`
  query GiftAid {
    giftaidpage {
      data {
        attributes {
          introCopy
        }
      }
    }
  }
`;

export default GIFTAID_QUERY;
