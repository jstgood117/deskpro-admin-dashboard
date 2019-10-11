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
	navData: ISidebarItem;
}

const SidebarItem: SFC<IProps> = (props) => (
	<SidebarItemStyled active={props.navData ? window.location.pathname === props.navData.url : false}>
		{props.navData && <a href={props.navData.url}>{props.navData.navItemName}</a>}
	</SidebarItemStyled>
);

export default SidebarItem;
