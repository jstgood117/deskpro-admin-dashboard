import React, { SFC } from 'react';
import styled from 'styled-components';

import { INavItemData } from '../../../../resources/interfaces';

interface IStyleProps {
  active?: boolean
}

const NavigationItemStyled = styled.li<IStyleProps>`
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

interface IProps {
	key: number;
	navData: INavItemData;
}

const NavigationItem: SFC<IProps> = (props) => (
	<NavigationItemStyled active={window.location.pathname === props.navData.url}>
		<a href={props.navData.url}>{props.navData.navItemName}</a>
	</NavigationItemStyled>
);

NavigationItem.defaultProps = {
  key: 0,
	navData: {
		navItemName: '',
		url: '',
	},
};

export default NavigationItem;
