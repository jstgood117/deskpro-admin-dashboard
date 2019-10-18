import React, { SFC } from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';

import { testView } from '../../resources/constants';
import Loading from '../Loading';
import Error from '../Error';
import Body from '../Body';
import Header from '../Header';
import Table from '../Table/TableWrapper';

export interface IProps {
  query: string,
}

const StandardTablePage: SFC<IProps> = ({query}) => {
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
    console.log(data.page)
  // TODO replace when all the data comes through
  // {views && views.map((table, index) => <Table key={index} {...table} />)}

    return (
      <Body>
        <Header title={data.page.title} description={data.page.description} links={data.page.headerLinks} />
        {[testView].map((table, index) => <Table key={index} {...table} />)}
      </Body>
    );
  }
  return null;
}

export default StandardTablePage;
