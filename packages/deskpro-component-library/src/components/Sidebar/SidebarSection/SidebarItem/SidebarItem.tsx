import React, { SFC } from 'react';
import styled from 'styled-components';

import { ISidebarItem } from '../../../../resources/interfaces';

interface IStyleProps {
  active?: boolean
}

const SidebarItemStyled = styled.li<IStyleProps>`
	padding: 10px 10px 10px 44px;
	list-style: none;

	&:hover {
		background-color: #d4dbdf;
		cursor: pointer;
	}

	& a {
		text-decoration: none;
		color: ${props => props.active ? props.theme.brandPrimary : props.theme.staticColour};
	}
`

export interface IProps {
	key: number;
	navItemName: string;
	url?: string;
	navItems?: ISidebarItem[];
}

const SidebarItem: SFC<IProps> = (props) => (
	<SidebarItemStyled active={props.url ? window.location.pathname === props.url : false}>
		{props.url && <a href={props.url}>{props.navItemName}</a>}
	</SidebarItemStyled>
);

export default SidebarItem;
