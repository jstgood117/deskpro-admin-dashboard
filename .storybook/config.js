import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { MockIntlProvider } from '../__mocks__/mock-react-intl';

import { DeskproAdminTheme } from '../src/components/Theme';
import '../src/style/text-antialiased.css';
import { GlobalStyles } from '../src/style/styled';

const req = require.context('../src/', true, /.stories\..sx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(story => (
  <MockIntlProvider>
    <ThemeProvider theme={DeskproAdminTheme}>
      <GlobalStyles />
      {story()}
    </ThemeProvider>
  </MockIntlProvider>
));

configure(loadStories, module);
