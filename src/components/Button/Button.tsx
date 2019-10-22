import React, { ReactNode, SFC } from 'react';
import styled, { ThemeProvider, CSSProperties } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';

export interface IStyleProps {
  styleType: 'primary' | 'secondary' | 'tertiary';
  styles?: CSSProperties;
  size?: 'small' | 'medium';
  className?: string;
}

const ButtonStyled = styled.button<IStyleProps>`
  border-radius: 4px;
  cursor: pointer;
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 150%;
  background-color: ${props =>
    props.styleType === 'primary'
      ? props.theme.activeColour
      : props.theme.secondaryColour};
  color: ${props =>
    props.styleType === 'primary'
      ? props.theme.secondaryColour
      : props.theme.activeColour};
  padding: 0px 10px;
  border: ${props =>
    props.styleType === 'secondary'
      ? '1.1px solid rgba(28, 62, 85, 0.8)'
      : 'none'};
  outline: none;
  height: ${props => (props.size === 'medium' ? 34 : 28)}px;
  &:hover {
    background-color: ${props =>
      props.styleType === 'primary'
        ? props.theme.brandPrimary
        : props.theme.hoverColour};
  }
`;

export interface IProps {
  children?: ReactNode;
  onClick?: (e: any) => void;
}

const Button: SFC<IProps & IStyleProps> = ({
  children,
  onClick,
  size = 'medium',
  styleType,
  className,
  styles
}) => (
  <ThemeProvider theme={DeskproAdminTheme}>
    <ButtonStyled
      className={className}
      onClick={onClick}
      styleType={styleType}
      size={size}
      style={styles}
    >
      {children}
    </ButtonStyled>
  </ThemeProvider>
);

export default Button;