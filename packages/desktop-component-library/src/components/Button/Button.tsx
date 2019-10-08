import React, { ReactNode, SFC } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';

interface IStyleProps {
  styleType: 'primary' | 'secondary' | 'tertiary',
}

const ButtonStyled = styled.button<IStyleProps>`
	border-radius: 4px;
	background-color: ${props => props.styleType === 'primary' ? props.theme.activeColour : props.theme.secondaryColour};
	color: ${props => props.styleType === 'primary' ? props.theme.secondaryColour : props.theme.activeColour};
	padding: 4px 10px;
	border: ${props => props.styleType === 'secondary' ? '1.1px solid rgba(28, 62, 85, 0.8)' : 'none'};
	outline: none;

	&:hover {
		background-color: ${props => props.styleType === 'primary' ? props.theme.brandPrimary : props.theme.hoverColour};
	}
`;

interface IProps {
	children?: ReactNode,
	onClick?: (e:any) => void,
}

const Button: SFC<IProps & IStyleProps> = (props) => (
  <ThemeProvider theme={DeskproAdminTheme}>
		<ButtonStyled onClick={props.onClick} styleType={props.styleType}>{props.children}</ButtonStyled>
	</ThemeProvider>
);

Button.defaultProps = {
  children: null,
  onClick: () => {},
};

export default Button;
