import React, { SFC } from 'react';

import { testPageData } from '../../resources/constants';
import { IInitialData } from '../../resources/interfaces';

import Main from '../Main';
import Button from '../Button';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Grid from '../Grid';

export interface IProps {
  location: {
    pathname: string,
  },
  initialData: IInitialData,
}

const Page: SFC<IProps> = ({location, initialData}) => (
  <Grid>
    <Sidebar path={location.pathname} data={initialData.sidebar} />
    <Main>
      <Header>
        <h1>Generic Page</h1>
        <p>This is the {location.pathname} page</p>
      </Header>
      <p><Button styleType='primary'>Primary</Button></p>
      <p><Button styleType='secondary'>Secondary</Button></p>
      <p><Button styleType='tertiary'>Tertiary</Button></p>
    </Main>
  </Grid>
);

export default Page;
