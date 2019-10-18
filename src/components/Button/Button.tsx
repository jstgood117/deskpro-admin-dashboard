import React, { ReactNode, SFC } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';

export interface IStyleProps {
  styleType: 'primary' | 'secondary' | 'tertiary',
  styles?: IButtonStyles
}

interface IButtonStyles {
	height?: string;
	color?: string;
}

const ButtonStyled = styled.button<IStyleProps>`
	border-radius: 4px;
	background-color: ${props => props.styleType === 'primary' ? props.theme.activeColour : props.theme.secondaryColour};
	color: ${props => props.styleType === 'primary' ? props.theme.secondaryColour : props.theme.activeColour};
	padding: 4px 10px;
	border: ${props => props.styleType === 'secondary' ? '1.1px solid rgba(28, 62, 85, 0.8)' : 'none'};
	outline: none;
	height: ${props => props.styles && props.styles.height ? props.styles.height : 'inherit'};

	&:hover {
		background-color: ${props => props.styleType === 'primary' ? props.theme.brandPrimary : props.theme.hoverColour};
	}
`;

export interface IProps {
	children?: ReactNode,
	onClick?: (e:any) => void,
	styles?: IButtonStyles
}

const Button: SFC<IProps & IStyleProps> = (props) => (
  	<ThemeProvider theme={DeskproAdminTheme}>
		<ButtonStyled onClick={props.onClick} styleType={props.styleType} styles={props.styles}>{props.children}</ButtonStyled>
	</ThemeProvider>
);

export default Button;
