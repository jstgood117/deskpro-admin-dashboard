import { gql } from 'apollo-boost';
export default gql`
  mutation DeleteAgent ($ids: [Int!]!) {
    delete_agent($ids)
  }
`;

