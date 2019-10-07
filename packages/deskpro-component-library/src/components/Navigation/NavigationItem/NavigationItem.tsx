import React, { ReactNode, SFC } from 'react';
import styled from 'styled-components';

const NavigationItemStyled = styled.nav`
	padding: 10px;
`

export interface IProps {
	children?: ReactNode,
	onClick?: (e:any) => void,
}

const NavigationItem: SFC<IProps> = (props) => (
	<NavigationItemStyled onClick={props.onClick}>{props.children}</NavigationItemStyled>
);

NavigationItem.defaultProps = {
  children: null,
  onClick: () => {},
};

export default NavigationItem;
