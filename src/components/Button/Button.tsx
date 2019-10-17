import React, { ReactNode, SFC } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';

export interface IStyleProps {
  styleType: 'primary' | 'secondary' | 'tertiary' | 'optional';
}

const ButtonStyled = styled.button<IStyleProps>`
  border-radius: ${props => (props.styleType === 'optional' ? '3px' : '4px')};
  background-color: ${props =>
    props.styleType === 'primary'
      ? props.theme.activeColour
      : props.theme.secondaryColour};
  color: ${props =>
    props.styleType === 'primary'
      ? props.theme.secondaryColour
      : props.theme.activeColour};
  padding: 4px 10px;
  border: ${props =>
    props.styleType === 'secondary'
      ? '1.1px solid rgba(28, 62, 85, 0.8)'
      : props.styleType === 'optional'
      ? '0.8px solid #A9B0B0'
      : 'none'};
  outline: none;
  box-sizing: border-box;
  &:hover {
    background-color: ${props =>
      props.styleType === 'primary'
        ? props.theme.brandPrimary
        : props.styleType === 'optional'
        ? '#FFFFFF'
        : props.theme.hoverColour};
  }
  font-family: ${props =>
    props.styleType === 'optional' ? 'Rubik' : props.theme.mainFont};
  font-style: ${props => (props.styleType === 'optional' ? 'normal' : 'none')};
  font-weight: ${props => (props.styleType === 'optional' ? 'normal' : 'none')};
  font-size: ${props => (props.styleType === 'optional' ? '15px' : 'none')};
  line-height: ${props => (props.styleType === 'optional' ? '150%' : 'none')};
  color: ${props => (props.styleType === 'optional' ? '#a9b0b0;' : 'none')};
  display: flex;
	align-items: center;
	cursor: pointer;
`;

export interface IProps {
  children?: ReactNode;
  onClick?: (e: any) => void;
}

const Button: SFC<IProps & IStyleProps> = props => (
  <ThemeProvider theme={DeskproAdminTheme}>
    <ButtonStyled onClick={props.onClick} styleType={props.styleType}>
      {props.children}
    </ButtonStyled>
  </ThemeProvider>
);

export default Button;
