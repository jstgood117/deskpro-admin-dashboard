import React, { SFC } from 'react';
import styled from 'styled-components';

const NavigationStyled = styled.nav`
	background: #e5e5e5;
	width: 200px;
`

export interface INavItemData {
	navItemName: string;
	url: string;
}
export interface INavData{
	sectionName: string;
	navItems: INavItemData[];
}
export interface IProps {
	navData: INavData[];
}

const Navigation: SFC<IProps> = (props) => (
	<NavigationStyled>{props.navData.map( obj => obj.sectionName)}</NavigationStyled>
);

Navigation.defaultProps = {
	navData: [],
};

export default Navigation;
