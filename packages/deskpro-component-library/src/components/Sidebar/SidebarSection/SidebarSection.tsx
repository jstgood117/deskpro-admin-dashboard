import React, { SFC, Fragment } from 'react';
import styled from 'styled-components';
import Icon from '../../Icon';

import SidebarItem from './SidebarItem';
import { ISidebarSection } from '../../../resources/interfaces';

const SidebarSectionStyled = styled.div`
	position: relative;
	padding: 10px 10px 10px 44px;
	border-bottom: 0.8px solid #D3D6D7;
	font-size: 15px;
	font-weight: bold;

	& svg {
		position: absolute;
		left: 14px;
		top: 12px;
	}
`
const SidebarSectionList = styled.ul`
	padding-inline-start: 0;
`

export interface IProps {
	key: number;
	navData: ISidebarSection;
}

const SidebarSection: SFC<IProps> = (props) => (
	<Fragment>
		{props.navData && props.navData.sectionName && <SidebarSectionStyled>
			<Icon name={props.navData.sectionName} />
			{props.navData.sectionName}
		</SidebarSectionStyled>}
		{props.navData && props.navData.navItems && <SidebarSectionList>{props.navData.navItems.map( (navItem, index) => <SidebarItem key={index} navData={navItem}></SidebarItem>)}</SidebarSectionList>}
	</Fragment>
);

export default SidebarSection;
