import { gql } from 'apollo-boost';
export default gql`
  query {
    agents_getAgentsPage {
      __typename
      title
      description
      headerLinks {
        title
        path
      }
      newLink
      views {
        ... on InMemoryPageDataView {
          title
          dataQuery
          tableDef {
            columns {
              title
              field
              data {
                propName
                path
                value
              }
              defaultShow
            }
          }
        }
      }
    }
  }
`;