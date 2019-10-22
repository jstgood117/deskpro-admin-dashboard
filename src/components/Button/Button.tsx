import React, { ReactNode, SFC } from 'react';
import styled, { ThemeProvider, CSSProperties } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';

export interface IStyleProps {
  styleType: 'primary' | 'secondary' | 'pink' | 'outlineGray' | 'tertiary';
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

  height: ${props =>
    props.styles && props.styles.height ? props.styles.height : props.size === 'medium' ? 34 : 28};

  &:hover {
    background-color: ${props =>
      props.styleType === 'primary'
        ? props.theme.brandPrimary
        : props.theme.hoverColour};
  }
`;

const PinkButton = styled.button<IStyleProps>`
  background: #f9e6e1;
  border-radius: 4px;
  border: none;
  color: #ec6c4e;
  font-family: Lato;
  font-size: 12px;
  line-height: 150%;
  cursor: pointer;
	outline: none;
	min-width: 105px;
	padding: 0px 10px;
  height: ${props =>
    props.styles && props.styles.height ? props.styles.height : 'inherit'};
  color: ${props =>
    props.styles && props.styles.color ? props.styles.color : '#EC6C4E'};
		&:hover {
			background-color: ${props => props.theme.hoverColour};
`;

const OutlineGrayButton = styled.button<IStyleProps>`
  border: 1.5px solid #a9b0b0;
  background: #ffffff;
  border-radius: 4px;
  color: ${props =>
    props.styles && props.styles.color ? props.styles.color : '#A9B0B0'};
  font-family: Lato;
  font-size: 12px;
  line-height: 150%;
	outline: none;
	cursor: pointer;
	min-width: 105px;
	padding: 0px 10px;
  height: ${props =>
    props.styles && props.styles.height ? props.styles.height : 'inherit'};
		&:hover {
			background-color: ${props => props.theme.hoverColour};
`;

export interface IProps {
  children?: ReactNode;
  onClick?: (e: any) => void;
  styles?: CSSProperties;
}

const Button: SFC<IProps & IStyleProps> = props => (
  <ThemeProvider theme={DeskproAdminTheme}>
    <div>
      {(props.styleType === 'primary' || props.styleType === 'secondary') && (
        <ButtonStyled
          onClick={props.onClick}
          styleType={props.styleType}
          styles={props.styles}
        >
          {props.children}
        </ButtonStyled>
      )}
      {props.styleType === 'pink' && (
        <PinkButton
          onClick={props.onClick}
          styleType={props.styleType}
          styles={props.styles}
        >
          {props.children}
        </PinkButton>
      )}
      {props.styleType === 'outlineGray' && (
        <OutlineGrayButton
          onClick={props.onClick}
          styleType={props.styleType}
          styles={props.styles}
        >
          {props.children}
        </OutlineGrayButton>
      )}
    </div>
  </ThemeProvider>
);

export default Button;