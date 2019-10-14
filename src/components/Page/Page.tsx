import React, { SFC } from 'react';

import { IUser, ISidebarSection, ITranslation } from '../../resources/interfaces';

import Main from '../Main';
import Button from '../Button';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Grid from '../Grid';

export interface IProps {
  location: {
    pathname: string,
  },
  user: IUser,
  sidebar: ISidebarSection[],
  translations: ITranslation,
}

const Page: SFC<IProps> = ({location, sidebar}) => (
  <Grid>
    <Sidebar path={location.pathname} data={sidebar} />
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
