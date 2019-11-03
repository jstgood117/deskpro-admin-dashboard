import React from 'react';
import { ThemeProvider } from 'styled-components';
import DeskproAdminTheme from '../../style/DeskproAdminTheme';
import { PageContainer } from './layout';

import './fonts.css';
import '../../style/text-antialiased.css';

export const AppContainer = (props: any) => (
    <ThemeProvider theme={DeskproAdminTheme}>
        <PageContainer>{props.children}</PageContainer>
    </ThemeProvider>
);