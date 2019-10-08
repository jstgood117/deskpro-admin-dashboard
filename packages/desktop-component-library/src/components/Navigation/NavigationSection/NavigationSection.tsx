import React, { SFC, Fragment } from 'react';
import styled from 'styled-components';
import Icon from '../../Icon';

import NavigationItem from './NavigationItem';
import { INavSectionData } from '../../../resources/interfaces';

const NavigationSectionStyled = styled.div`
	padding: 10px 10px 10px 44px;
	border-bottom: 0.8px solid #D3D6D7;
	font-size: 15px;
	font-weight: bold;
`
const NavigationSectionList = styled.ul`
	padding-inline-start: 0;
`

interface IProps {
	key: number;
	navData: INavSectionData;
}

const NavigationSection: SFC<IProps> = (props) => (
	<Fragment>
		<Icon name="Setup" />
		<NavigationSectionStyled>{props.navData.sectionName}</NavigationSectionStyled>
		<NavigationSectionList>{props.navData.navItems.map( (navItem, index) => <NavigationItem key={index} navData={navItem}></NavigationItem>)}</NavigationSectionList>
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
