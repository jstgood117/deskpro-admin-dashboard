import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../src/components/Theme';
import Main from '../src/components/Main';

const req = require.context('../src/components', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator((story) => (
  <ThemeProvider theme={DeskproAdminTheme}>
    <Main>
      {story()}
    </Main>
  </ThemeProvider>
))

configure(loadStories, module);