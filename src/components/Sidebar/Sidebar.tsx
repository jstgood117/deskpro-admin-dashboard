import React, { SFC } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { ISidebarSection } from '../../resources/interfaces';
import { DeskproAdminTheme } from '../Theme';
import SidebarSection from './SidebarSection';

const SidebarStyled = styled.nav`
	background-color: #e8ebed;
	color: #000;
	width: 200px;
	font-family: Helvetica, Arial, sans-serif;
	font-size: 14px;
`

export interface IProps {
	path: string;
	data: ISidebarSection[];
}

const Sidebar: SFC<IProps> = (props) => (
	<ThemeProvider theme={DeskproAdminTheme}>
		<SidebarStyled>{props.data && props.data.map((navSection, index) => <SidebarSection key={index} path={props.path} {...navSection}>}</SidebarSection>)}</SidebarStyled>
	</ThemeProvider>
);

export default Sidebar;
