import React, { SFC } from 'react';
import { IntlProvider } from 'react-intl';
import styled, { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';
import { testTranslations } from '../../resources/constants';

const ContainerStyled = styled.div`
  width: '100%';
  height: '100%';
`;

const PageContainer: SFC = props => {
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <IntlProvider locale="en" messages={testTranslations}>
        <ContainerStyled>{props.children}</ContainerStyled>
      </IntlProvider>
    </ThemeProvider>
  );
};

export default PageContainer;
