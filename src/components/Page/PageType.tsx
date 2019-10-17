import React, { SFC } from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';

import StandardTablePage from '../StandardTablePage';
import Loading from '../Loading';
import Error from '../Error';

export interface IProps {
  query: string,
}

const PageType: SFC<IProps> = ({query}) => {
  const { loading, error, data } = useQuery(gql`${query}`, { errorPolicy: 'all' });
  // test data for now
//  const loading = false;
//  const error = false;
//  const data = testPageData;

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error apolloError={error} />
  }
  if (data && data.page) {
    console.log('Page data loaded:');
    console.log(data.page)

    switch (data.page.__typename) {
      case "StandardDataPageData":
        return <StandardTablePage {...data.page} />
      default:
    }
  }
  return null
}

export default PageType;