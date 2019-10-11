import React, { Component } from 'react';
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
		if (this.state.redirect) {
			return <Redirect push to={this.props.url} />;
		}
		
		return (
			<SidebarItemStyled active={this.props.url ? window.location.pathname === this.props.url : false} onClick={this.handleOnClick}>
				{this.props.navItemName}
			</SidebarItemStyled>
		);
	}
}

export default SidebarItem;
