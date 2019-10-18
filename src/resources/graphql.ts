import { gql } from 'apollo-boost';

// Queries

// TODO locale needs to be a parameter, not hard-coded

export const QUERY_INITIAL = gql`
  query  {
    adminInterface_getTranslations(locale: "en") {
      id
      message
    }
    adminInterface_getAdminInterfaceData {
      user {
        locale
      }
      sidebar {
        sectionName
        icon
        navItems {
          itemName
          path
          navItems {
            itemName
            path
          }
        }
      }
    }
  }
`

export const QUERY_PAGE = gql`
  query getPage($path: string!) {
    page(path: $path) {
      path
      pageType
      pageProps {
        title
        description
        tables {
          dataQuery
          metadataQuery
        }
      }
    }
  }
`

export const QUERY_AGENTS_PAGE = gql`
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
`

// Mutations

// Subscriptions