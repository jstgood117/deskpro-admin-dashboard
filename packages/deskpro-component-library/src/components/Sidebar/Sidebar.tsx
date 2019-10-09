import React, { SFC } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';

import SidebarSection from './SidebarSection';
import { INavSectionData } from '../../resources/interfaces';

const SidebarStyled = styled.nav`
	background-color: #e8ebed;
	color: #000;
	width: 200px;
	font-family: Helvetica, Arial, sans-serif;
	font-size: 14px;
`

interface IProps {
	navData: INavSectionData[];
}

const Sidebar: SFC<IProps> = (props) => (
	<ThemeProvider theme={DeskproAdminTheme}>
		<SidebarStyled>{props.navData.map( (navSection, index) => <SidebarSection key={index} navData={navSection}></SidebarSection>)}</SidebarStyled>
	</ThemeProvider>
);

Sidebar.defaultProps = {
	navData: [],
};

export default Sidebar;
