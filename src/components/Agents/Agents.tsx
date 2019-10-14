import React, { SFC } from 'react';
import { FormattedMessage } from 'react-intl';
import { useQuery } from '@apollo/react-hooks';

import { IUser, ISidebarSection, ITranslation } from '../../resources/interfaces';
import { QUERY_PAGE } from '../../resources/graphql';
import { testPageData } from '../../resources/constants';

import Main from '../Main';
import Header from '../Header';
import Table from '../Table';
import Grid from '../Grid';
import Sidebar from '../Sidebar';

export interface IProps {
  location: {
    pathname: string,
  },
  user: IUser,
  sidebar: ISidebarSection[],
  translations: ITranslation,
}

const Agent: SFC<IProps> = ({location, sidebar}) => {
/*  const { loading, error, data } = useQuery(QUERY_PAGE, { variables: { path: '/agent' }});
  if (data) console.log(data.page) */
	// test data for now
	const loading = false;
	const error = false;
	const data = testPageData;
  
  return (
    <Grid>
      <Sidebar path={location.pathname} data={sidebar} />
      <Main>
        <Header>
          <h1><FormattedMessage id={data.pageProps.title} /></h1>
          {data.pageProps.description && <p><FormattedMessage id={data.pageProps.description} /></p>}
        </Header>
        {loading && <p>Loading...</p>}
        {error && <p>Error, couldn't load data</p>}
        {data && data.pageProps && data.pageProps.tables && data.pageProps.tables.map((table, index) => <Table key={index} {...table} />)}
      </Main>
    </Grid>
  );
}

export default Agent;
