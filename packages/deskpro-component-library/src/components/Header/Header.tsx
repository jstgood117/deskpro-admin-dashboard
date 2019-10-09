import React, { ReactNode, SFC } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';

const HeaderStyled = styled.div`
	background-color: ${props => props.theme.pageHeader};
`;

export interface IProps {
	children?: ReactNode,
}

const Header: SFC<IProps> = (props) => (
	<ThemeProvider theme={DeskproAdminTheme}>
		<HeaderStyled>{props.children}</HeaderStyled>
	</ThemeProvider>
);

export default Header;
