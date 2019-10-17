import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';

import PageContainer from './PageContainer';
import { DeskproAdminTheme } from '../Theme';
import Sidebar from '../Sidebar';
import Body from '../Body';
import { testSidebarData, testTranslations } from '../../resources/constants';

storiesOf('Page Container', module)
  .add('default', () => <PageContainer>My Container</PageContainer>)
  .add('with sidebar', () => (
    <ThemeProvider theme={DeskproAdminTheme}>
      <IntlProvider locale="en" messages={testTranslations}>
        <PageContainer>
          <Sidebar path="/" data={testSidebarData}></Sidebar>
        </PageContainer>
      </IntlProvider>
    </ThemeProvider>
  ))
  .add('with sidebar and body', () => (
    <ThemeProvider theme={DeskproAdminTheme}>
      <IntlProvider locale="en" messages={testTranslations}>
        <PageContainer>
          <Sidebar path="/" data={testSidebarData}></Sidebar>
          <Body>body</Body>
        </PageContainer>
      </IntlProvider>
    </ThemeProvider>
  ));
