import React, { SFC } from 'react';

import { testSidebarData } from '../../resources/constants';

import Main from '../Main';
import Button from '../Button';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Grid from '../Grid';

export interface IProps {
  location: {
    pathname: string
  }
}

const Page: SFC<IProps> = ({location}) => (
  <Grid>
    <Sidebar path={location.pathname} data={testSidebarData} />
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
