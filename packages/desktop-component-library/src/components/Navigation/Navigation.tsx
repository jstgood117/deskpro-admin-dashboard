import React, { SFC } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';

import NavigationSection from './NavigationSection';
import { INavSectionData } from '../../resources/interfaces';

const NavigationStyled = styled.nav`
	background-color: #e8ebed;
	color: #000;
	width: 200px;
	font-family: Helvetica, Arial, sans-serif;
	font-size: 14px;
`

interface IProps {
	navData: INavSectionData[];
}

const Navigation: SFC<IProps> = (props) => (
	<ThemeProvider theme={DeskproAdminTheme}>
		<NavigationStyled>{props.navData.map( (navSection, index) => <NavigationSection key={index} navData={navSection}></NavigationSection>)}</NavigationStyled>
	</ThemeProvider>
);

Navigation.defaultProps = {
	navData: [],
};

export default Navigation;
