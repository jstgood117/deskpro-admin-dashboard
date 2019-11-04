import React, { SFC } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { DeskproAdminTheme } from '../Theme';

export interface IStyleProps {}

const LoadingStyled = styled.div<IStyleProps>`
	border: 1px solid grey;
`;

export interface IProps {}

const Loading: SFC<IProps & IStyleProps> =props => (
  <ThemeProvider theme={DeskproAdminTheme}>
		<LoadingStyled><FormattedMessage id='admin.page.loading' /></LoadingStyled>
	</ThemeProvider>
);

export default Loading;
