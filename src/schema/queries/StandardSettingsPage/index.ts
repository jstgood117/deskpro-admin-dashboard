import { gql } from 'apollo-boost';
export default gql`
query StandardSettingsPage($path: String!){
  standardSettingsPage(path: $path) {
    title
    uiSchema {
      elements {
        ...elementsFields
        ...on SettingsUISectionParentElement {
          elements {
            ...elementsFields
            ...on SettingsUISectionParentElement {
              elements {
                  ...elementsFields
                ...on SettingsUISectionParentElement {
                  elements {
                    ...elementsFields
                  }
                }
              }
            }
          }
        }
      }
    }
    jsonSchema
  }
}

fragment elementsFields on SettingsUIElement {
    __typename
  ...on SettingsUISectionElement {
    title
  }
  ...on SettingsUIFeatureSectionElement {
    title
    description
    illustration
    toggleFieldId
  }
  ...on SettingsUIGroupInterface{
    title
    description
    showOn
  }
  ...on SettingsUITabElement {
    title
    tabs {
      title
      iconUrn
    }
  }
  ...on SettingsUIDisplayElement {
    title
    description
  }
  ...on SettingsUIFieldElement {
    helpLink {
      title
      url
    }
    helpText
    field {
      __typename
      ...fieldElement
    }
  }

}

fragment fieldElement on SettingsUIField {
  __typename
  ...on SettingsUIFieldInterface {
    id
  }
}
`;