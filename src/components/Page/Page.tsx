import React, { SFC } from 'react';

import { ISidebarSection } from '../../resources/interfaces';

import { testPageData } from '../../resources/constants';

import Sidebar from '../Sidebar';
import Grid from '../Grid';
import PageType from './PageType';
import ErrorBoundary from '../Error/ErrorBoundary';

export interface IProps {
  location: {
    pathname: string,
  },
  sidebar: ISidebarSection[],
}

const Page: SFC<IProps> = ({location, sidebar}) => {
/*  const { loading, error, data } = useQuery(QUERY_PAGE, { errorPolicy: 'all', variables: { path: '/agent' }});
  if (data) console.log(data.page) */
  // test data for now
//  const loading = false;
//  const error = false;
  const data = testPageData;

  return (
    <ErrorBoundary>
      <Grid>
        <Sidebar path={location.pathname} data={sidebar} />
        <PageType {...data} />
      </Grid>
    </ErrorBoundary>
  );
}

export default Page;
