import { gql } from 'apollo-boost';
export default gql`
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
`;