import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';

import { DeskproAdminTheme } from '../src/components/Theme';
import { testTranslations } from '../src/resources/constants/constants';
import '../src/style/text-antialiased.css';

const req = require.context('../src/', true, /.stories\..sx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(story => (
  <IntlProvider locale='en' messages={testTranslations}>
    <ThemeProvider theme={DeskproAdminTheme}>{story()}</ThemeProvider>
  </IntlProvider>
));

configure(loadStories, module);
