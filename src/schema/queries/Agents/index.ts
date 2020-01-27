import { gql } from 'apollo-boost';

export const GET_TEAMS = gql`
  query {
    agents_teams_getTeams {
      id
      name
    }
  }
`;
