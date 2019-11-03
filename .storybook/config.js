import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../src/components/Theme';
import '../src/style/text-antialiased.css';

const req = require.context('../src/components', true, /.stories\..sx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator((story) => (
  <ThemeProvider theme={DeskproAdminTheme}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);