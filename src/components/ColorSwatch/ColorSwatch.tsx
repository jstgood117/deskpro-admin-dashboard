import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface IProps {
  children: ReactNode;
  color: string;
  size?: string;
}

const StyledColorSwatch = styled.div<{ color: string; size: string }>`
  width: ${props => props.size || '18px'};
  height: ${props => props.size || '18px'};
  background: ${props => props.color};
  border-radius: 4px;
`;

const ColorSwatchWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  > span {
    padding-left: 8px;
    font-family: Lato;
    font-size: 14px;
    line-height: 150%;
    display: flex;
    align-items: center;
    color: ${props => props.theme.staticColour};
  }
`;

const ColorSwatch: React.FC<IProps> = props => (
  <ColorSwatchWrapper>
    <StyledColorSwatch color={props.color} size={props.size} />
    <span>{props.children}</span>
  </ColorSwatchWrapper>
);

export default ColorSwatch;
