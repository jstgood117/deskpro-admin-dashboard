import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../src/components/Theme';

const req = require.context('../src/components', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator((story) => (
  <ThemeProvider theme={DeskproAdminTheme}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);