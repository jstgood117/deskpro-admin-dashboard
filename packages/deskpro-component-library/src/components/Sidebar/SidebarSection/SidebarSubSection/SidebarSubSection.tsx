import React, { SFC, Fragment, useState } from 'react';
import styled from 'styled-components';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';

import { ISidebarItem } from '../../../../resources/interfaces';
import SidebarItem from '../SidebarItem';

interface IStyleProps {}

const SidebarSubSectionStyled = styled.li<IStyleProps>`
	position: relative;
	padding: 10px 10px 10px 44px;
	list-style: none;
	color: ${props => props.theme.staticColour};

	&:hover {
		background-color: #d4dbdf;
		cursor: pointer;
	}

	& svg {
		position: absolute;
		top: 6px;
		right: 6px;

		& path {
			fill: #4A4E4F;
		}
	}
`

const SidebarSubSectionList = styled.ul`
	margin: 0;
	padding-inline-start: 0px;

	& li a {
		padding-left: 16px;
	}
`

export interface IProps {
	key: number;
	navItemName: string;
	navItems?: ISidebarItem[];
}

const SidebarSubSection: SFC<IProps> = (props) => {
	const [openState, setOpenState] = useState(false);

	return (
		<Fragment>
			<SidebarSubSectionStyled onClick={() => setOpenState(!openState)}>
				{props.navItemName}
				{openState ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
			</SidebarSubSectionStyled>
			{props.navItems && openState && <SidebarSubSectionList>{props.navItems.map((navItem, index) => <SidebarItem key={index} {...navItem}></SidebarItem>)}
			</SidebarSubSectionList>}
		</Fragment>
	);
}

export default SidebarSubSection;
