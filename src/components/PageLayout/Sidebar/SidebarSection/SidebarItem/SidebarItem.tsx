import React, { SFC } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import useReactRouter from 'use-react-router';

const SidebarItemStyled = styled(NavLink)`
	padding: 10px 10px 10px 44px;
	color: ${props => props.exact ? props.theme.brandPrimary : props.theme.staticColour};
	text-decoration: none;
	margin: 0;
	overflow: hidden;
	display: block;

	&:hover {
		background-color: #d4dbdf;
		cursor: pointer;
	}
`

export interface IProps {
	key: any;
	path?: string;
	itemName: string;
}

const SidebarItem: SFC<IProps> = ({path, itemName}) => {
	const { location } = useReactRouter();
	return (
		<SidebarItemStyled to={path || ""} exact={location.pathname === path}>
			<FormattedMessage id={itemName} />
		</SidebarItemStyled>
	);
}

export default SidebarItem;
