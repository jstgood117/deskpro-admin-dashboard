import React, { SFC, Fragment } from 'react';
import styled from 'styled-components';
import Icon from '../../../Icon';

import SidebarItem from './SidebarItem';
import SidebarSubSection from './SidebarSubSection';
import { ISidebarItem } from '../../../../resources/interfaces';

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
	sectionName?: string;
	navItems?: ISidebarItem[];
}

const SidebarSection: SFC<IProps> = (props) => (
	<Fragment>
		{props.sectionName && <SidebarSectionStyled>
			<Icon name={props.sectionName} />
			{props.sectionName}
		</SidebarSectionStyled>}
		{props.navItems && <SidebarSectionList>{props.navItems.map((navItem, index) => {
			if (navItem.navItems) {
				return <SidebarSubSection key={index} {...navItem}></SidebarSubSection>
			}
			return <SidebarItem key={index} {...navItem}></SidebarItem>
		})}
		</SidebarSectionList>}
	</Fragment>
);

export default SidebarSection;
