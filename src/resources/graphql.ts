import { gql } from 'apollo-boost';

// Queries

export const QUERY_INITIAL = gql`{
  initial {
    user {
      locale
    }
    sidebar {

    }
    translations {

    }
  }
}`

export const QUERY_PAGE = gql`
  query getPage($path: $tring!) {
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

// Mutations

// Subscriptions