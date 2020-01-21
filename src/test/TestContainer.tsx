import React from 'react';
import { MockIntlProvider } from '../../__mocks__/mock-react-intl';
import { MockedProvider } from '@apollo/react-testing';
import { ThemeProvider } from 'styled-components';
import { testTranslations } from '../resources/constants/constants';
import { DeskproAdminTheme } from '../components/Theme';

export const TestContainer = ({ children }: { children: JSX.Element }) => (
  <MockedProvider>
    <MockIntlProvider locale='en' messages={testTranslations}>
      <ThemeProvider theme={DeskproAdminTheme}>
        {children}
      </ThemeProvider>
    </MockIntlProvider>
  </MockedProvider>
);
