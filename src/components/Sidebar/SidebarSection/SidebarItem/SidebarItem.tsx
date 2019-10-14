import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

interface IStyleProps {
  active?: boolean
}

const SidebarItemStyled = styled.li<IStyleProps>`
	padding: 10px 10px 10px 44px;
	list-style: none;
	color: ${props => props.active ? props.theme.brandPrimary : props.theme.staticColour};

	&:hover {
		background-color: #d4dbdf;
		cursor: pointer;
	}
`

export interface IProps {
	key: number;
	path: string;
	navItemName: string;
	url?: string;
}
interface IState {
	redirect: boolean;
}

class SidebarItem extends Component<IProps,IState> {
	constructor(props: IProps) {
		super(props);

		this.state = { redirect: false };
	}

	handleOnClick = () => {
		this.setState({ redirect: true });
	}	

	render() {
		const { path, navItemName, url } = this.props;

		return (
			<Fragment>
			{this.state.redirect && <Redirect push to={url} />}
			<SidebarItemStyled active={url ? path === url : false} onClick={this.handleOnClick}>
				{navItemName}
			</SidebarItemStyled>
			</Fragment>
		);
	}
}

export default SidebarItem;
