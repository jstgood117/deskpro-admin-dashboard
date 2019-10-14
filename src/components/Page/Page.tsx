import React from 'react';

import Main from '../Main';
import Button from '../Button';
import Header from '../Header';

const Page: React.SFC = () => (
  <Main>
    <Header>
      <h1>Generic Page</h1>
      <p>This is the {window.location.pathname} page</p>
    </Header>
    <p><Button styleType='primary'>Primary</Button></p>
    <p><Button styleType='secondary'>Secondary</Button></p>
    <p><Button styleType='tertiary'>Tertiary</Button></p>
  </Main>
);

export default Page;
