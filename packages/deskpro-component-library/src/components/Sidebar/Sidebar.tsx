import React, { SFC } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';

import SidebarSection from './SidebarSection';
import { ISidebarSection } from '../../resources/interfaces';

const SidebarStyled = styled.nav`
	background-color: #e8ebed;
	color: #000;
	width: 200px;
	font-family: Helvetica, Arial, sans-serif;
	font-size: 14px;
`

export interface IProps {
	navData: ISidebarSection[];
}

const Sidebar: SFC<IProps> = (props) => (
	<ThemeProvider theme={DeskproAdminTheme}>
		<SidebarStyled>{props.navData && props.navData.map( (navSection, index) => <SidebarSection key={index} navData={navSection}>}</SidebarSection>)}</SidebarStyled>
	</ThemeProvider>
);

export default Sidebar;
