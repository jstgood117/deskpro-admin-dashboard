import React, { SFC, Fragment } from 'react';
import styled from 'styled-components';

import NavigationItem from './NavigationItem';
import { INavSectionData } from '../../../resources/interfaces';

const NavigationSectionStyled = styled.div`
	padding: 10px;
	border-bottom: 1px solid black; 
`

interface IProps {
	key: number;
	navData: INavSectionData;
}

const NavigationSection: SFC<IProps> = (props) => (
	<Fragment>
		<NavigationSectionStyled>{props.navData.sectionName}</NavigationSectionStyled>
		<ul>{props.navData.navItems.map( (navItem, index) => <NavigationItem key={index} navData={navItem}></NavigationItem>)}</ul>
	</Fragment>
);

NavigationSection.defaultProps = {
  key: 0,
	navData: {
		sectionName: '',
		navItems: [],
	},
};

export default NavigationSection;
