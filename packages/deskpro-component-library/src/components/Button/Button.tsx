import React, { ReactNode, SFC } from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
	border-radius: 8px;
	color: #fff;
	background: mediumvioletred;
	padding: 8px 15px;
	border: none;
	outline: none;
`;

export interface IProps {
	children?: ReactNode,
	onClick?: (e:any) => void,
}

const Button: SFC<IProps> = (props) => (
	<ButtonStyled onClick={props.onClick}>{props.children}</ButtonStyled>
);

Button.defaultProps = {
  children: null,
  onClick: () => {},
};

export default Button;
