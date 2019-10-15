import React, { SFC, Fragment } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { ISidebarItem } from '../../../resources/interfaces';
import Icon from '../../Icon';
import SidebarItem from './SidebarItem';
import SidebarSubSection from './SidebarSubSection';

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
	path: string;
	sectionName: string;
	navItems?: ISidebarItem[];
}

const SidebarSection: SFC<IProps> = (props) => {
	const { path, sectionName, navItems } = props;

	return (
		<Fragment>
			<SidebarSectionStyled>
				<Icon name={sectionName} />
				<FormattedMessage id={sectionName} />
			</SidebarSectionStyled>
			{navItems && <SidebarSectionList>{navItems.map((navItem, index) => {
				if (navItem.navItems) {
					return <SidebarSubSection key={index} path={path} {...navItem}></SidebarSubSection>
				}
				return <SidebarItem key={index} path={path} {...navItem}></SidebarItem>
			})}
			</SidebarSectionList>}
		</Fragment>
	);
}

export default SidebarSection;
