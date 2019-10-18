import React, { SFC, Fragment } from 'react';
import { useQuery } from 'react-apollo';
import { DocumentNode } from 'graphql';

import Loading from '../Loading';
import Error from '../Error';
import Header from '../Header';
import Table from '../Table/TableWrapper';

export interface IProps {
  query: DocumentNode,
  queryName: string,
}

const StandardTablePage: SFC<IProps> = ({query, queryName}) => {
  const { loading, error, data } = useQuery(query, { errorPolicy: 'all' });
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
  if (data && data[queryName]) {
    console.log('Standard table page data loaded:');
    console.log(data[queryName])

    const {title, description, headerLinks, views} = data[queryName];
    return (
      <Fragment>
        <Header title={title} description={description} links={headerLinks} />
        {views && views.map((table: any, index: number) => <Table key={index} {...table} />)}
      </Fragment>
    );    
  }
  return null;
}

export default StandardTablePage;
