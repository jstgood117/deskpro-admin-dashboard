import React, { SFC } from 'react';

import { IUser, ISidebarSection, ITranslation } from '../../resources/interfaces';

import { testPageData } from '../../resources/constants';

import Sidebar from '../Sidebar';
import Grid from '../Grid';
import PageType from './PageType';

export interface IProps {
  location: {
    pathname: string,
  },
  user: IUser,
  sidebar: ISidebarSection[],
  translations: ITranslation,
}

const Page: SFC<IProps> = ({location, sidebar}) => {
/*  const { loading, error, data } = useQuery(QUERY_PAGE, { variables: { path: '/agent' }});
  if (data) console.log(data.page) */
  // test data for now
  const loading = false;
  const error = false;
  const data = testPageData;

  return (
    <Grid>
      <Sidebar path={location.pathname} data={sidebar} />
      <PageType {...data} />
    </Grid>
  );
}

export default Page;
