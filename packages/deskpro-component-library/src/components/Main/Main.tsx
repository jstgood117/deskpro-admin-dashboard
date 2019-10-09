import React, { ReactNode, SFC } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';

const MainStyled = styled.main`
	padding: 34px;
	font-size: 14px;
	font-family: ${props => props.theme.mainFont};
`;

export interface IProps {
	children?: ReactNode,
}

const Main: SFC<IProps> = (props) => (
  <ThemeProvider theme={DeskproAdminTheme}>
		<MainStyled>{props.children}</MainStyled>
	</ThemeProvider>
);

export default Main;
