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
      path
      dataQuery
      tableDef {
        columns {
          title
          groupable
          sortField
          defaultShow
          field {
            __typename
            ...on TableColumnValueField {
              value { dataPath, staticJson, staticValue }
            }
            ...on TableColumnArrayValueField {
              valuesArray { dataPath, staticJson, staticValue }
            }
            ...on TableColumnPhraseMap {
              phraseMap {
                value
                phraseId
              }
            }
            ...on TableColumnNameAvatar {
              name { dataPath, staticJson, staticValue }
              avatar { dataPath, staticJson, staticValue }
            }
            ...on TableColumnMoney {
              amount { dataPath, staticJson, staticValue }
              currency { dataPath, staticJson, staticValue }
            }
          }
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