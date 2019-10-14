import React, { SFC, Fragment, useState } from 'react';
import { FormattedMessage } from 'react-intl';
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

	& div {
		margin-right: 15px;
		overflow: hidden;
	}
`

const SidebarSubSectionList = styled.ul`
	margin: 0;
	padding-inline-start: 0px;

	& li {
		padding-left: 60px;
	}
`

export interface IProps {
	key: number;
	path: string;
	navItemName: string;
	navItems?: ISidebarItem[];
}

const SidebarSubSection: SFC<IProps> = (props) => {
	const [openState, setOpenState] = useState(false);
	const { path, navItemName, navItems } = props;

	return (
		<Fragment>
			<SidebarSubSectionStyled onClick={() => setOpenState(!openState)}>
				<div><FormattedMessage id={navItemName} /></div>
				{openState ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
			</SidebarSubSectionStyled>
			{navItems && openState && <SidebarSubSectionList>{navItems.map((navItem, index) => <SidebarItem key={index} path={path} {...navItem}></SidebarItem>)}
			</SidebarSubSectionList>}
		</Fragment>
	);
}

export default SidebarSubSection;
