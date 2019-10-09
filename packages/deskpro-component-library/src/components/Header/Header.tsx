import React, { ReactNode, SFC } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';

const HeaderStyled = styled.div`
	background-color: ${props => props.theme.pageHeader};
	padding: ${props => props.theme.pagePadding};
	margin-top: ${props => `-${props.theme.pagePadding}`};
	margin-left: ${props => `-${props.theme.pagePadding}`};
	margin-right: ${props => `-${props.theme.pagePadding}`};

	& h1 {
		color: ${props => props.theme.activeColour};
		font-size: 40px;
	}
	& p {
		color: ${props => props.theme.greyDark};
		font-size: 14px;
	}
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
