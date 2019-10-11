import React, { SFC } from 'react';
import styled from 'styled-components';

import { ISidebarItem } from '../../../../resources/interfaces';

interface IStyleProps {}

const SidebarSubSectionStyled = styled.li<IStyleProps>`
	padding: 10px 10px 10px 44px;
	list-style: none;

	&:hover {
		background-color: #d4dbdf;
		cursor: pointer;
	}

	& a {
		text-decoration: none;
		color: ${props => props.theme.staticColour};
	}
`

export interface IProps {
	key: number;
	navItemName: string;
	navItems?: ISidebarItem[];
}

const SidebarSubSection: SFC<IProps> = (props) => (
	<SidebarSubSectionStyled>
		{props.navItemName}
	</SidebarSubSectionStyled>
);

export default SidebarSubSection;
