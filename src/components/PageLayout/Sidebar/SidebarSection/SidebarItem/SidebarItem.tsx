import React, { SFC } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';

interface IStyleProps {
  active?: boolean;
}

const SidebarItemStyled = styled(NavLink)<IStyleProps>`
	padding: 10px 10px 10px 39px;
	color: ${props => props.theme.staticColour};
	text-decoration: none;
	margin: 0;
	overflow: hidden;
	display: block;

	&.active {
		color: ${props => props.theme.brandPrimary};
		font-weight: bold;
	}

	&:hover {
		background-color: #d4dbdf;
		cursor: pointer;
	}
`

export interface IProps {
	path: string;
	itemName: string;
	depth?: number;
}

const SidebarItem: SFC<IProps> = ({path, itemName, depth}) => {
	const style: React.CSSProperties = {};
	if (depth) {
		style.paddingLeft = (39 + ((depth||0)*15)) + 'px';
	}

	return (
		<SidebarItemStyled to={path || "/"} exact={true} activeClassName="active" style={style}>
			<FormattedMessage id={itemName} />
		</SidebarItemStyled>
	);
};

export default SidebarItem;
