import React from 'react';

import { Main, Button } from 'desktop-component-library';

const Page: React.SFC = () => (
  <Main>
    <p>This is the {window.location.pathname} page</p>
    <p><Button styleType='primary'>Primary</Button></p>
    <p><Button styleType='secondary'>Secondary</Button></p>
    <p><Button styleType='tertiary'>Tertiary</Button></p>
  </Main>
);

export default Page;
