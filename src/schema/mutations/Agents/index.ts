import { gql } from 'apollo-boost';
export const DELETE_AGENTS = gql`
  mutation DeleteAgent ($ids: [Int!]!) {
    delete_agent($ids)
  }
`;

export const UPDATE_AGENTS = gql`
  mutation UpdateAgent ($payload: Object!) {
    update_agent($payload)
  }
`;