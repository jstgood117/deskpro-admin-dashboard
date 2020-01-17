import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { testTranslations } from '../src/resources/constants/constants';

import { DeskproAdminTheme } from '../src/components/Theme';
import '../src/style/text-antialiased.css';
import { GlobalStyles } from '../src/style/styled';

const req = require.context('../src/', true, /.stories\..sx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(story => (
  <IntlProvider locale='en' messages={testTranslations}>
    <ThemeProvider theme={DeskproAdminTheme}>
      <GlobalStyles />
      {story()}
    </ThemeProvider>
  </IntlProvider>
));

configure(loadStories, module);

const settingsRoot = document.createElement('div');
settingsRoot.setAttribute('id', 'app-settings');
document.body.append(settingsRoot);
