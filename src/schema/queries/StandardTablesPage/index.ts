import { gql } from 'apollo-boost';
export default gql`
query StandardDataPage($path: String!) {
  standardDataPage(path: $path) {
    title
    description
    illustration
    headerLinks {
        title
      path
      icon
    }
    newLink
    views {
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
          sortField
          defaultShow
        }
      }
      filterDef {
        title
        path
        type
        operators
        dataPath
      }
    }
  }
}
`;