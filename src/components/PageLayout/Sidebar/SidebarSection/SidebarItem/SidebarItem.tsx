import React, { Component } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';

interface IStyleProps {
  active?: boolean
}

const SidebarItemStyled = styled(NavLink)<IStyleProps>`
	padding: 10px 10px 10px 44px;
	color: ${props => props.active ? props.theme.brandPrimary : props.theme.staticColour};
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

class SidebarItem extends Component<IProps> {
	constructor(props: IProps) {
		super(props);

		this.state = { redirect: false };
	}

	handleOnClick = () => {
		this.setState({ redirect: true });
	}

	render() {
		const { path, itemName } = this.props;

		return (
			<SidebarItemStyled to={path || ""}>
				<FormattedMessage id={itemName} />
			</SidebarItemStyled>
		);
	}
}

export default SidebarItem;
