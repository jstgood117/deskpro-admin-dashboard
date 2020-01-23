import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface IProps {
  children: ReactNode;
  color: string;
}

const StyledColorSwatch = styled.div<{ color: string }>`
  width: 18px;
  height: 18px;
  background: ${props => props.color};
  border-radius: 4px;
`;
const ColorSwatchWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  span {
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
    <StyledColorSwatch color={props.color} />
    <span>{props.children}</span>
  </ColorSwatchWrapper>
);

export default ColorSwatch;
