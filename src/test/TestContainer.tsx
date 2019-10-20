import React from 'react';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import { testTranslations } from '../resources/constants';
import { DeskproAdminTheme } from '../components/Theme';

export const TestContainer = ({ children }: { children: JSX.Element }) => (
    <IntlProvider locale='en' messages={testTranslations}>
        <ThemeProvider theme={DeskproAdminTheme}>
            {children}
        </ThemeProvider>
    </IntlProvider>
);
