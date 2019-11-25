import { gql } from 'apollo-boost';
export default gql`
  query {
    agents_teams_getTeams {
      id
      name
      avatarUrn
      members {
        id
        name
      }
    }
  }
`;