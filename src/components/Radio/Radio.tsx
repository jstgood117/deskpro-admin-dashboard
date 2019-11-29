import React, { SFC, CSSProperties } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DeskproAdminTheme } from '../Theme';

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  display: none;
`;

export interface IProps {
  className?: string;
  setOption: (val: string | number | string[]) => void;
  option: string | number | string[];
  value: string;
  // value: string | number | string[];
  containerStyle?: CSSProperties;
}

interface IRadioProps {
  checked: boolean;
}

const RadioContainer = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  width: 14px;
  height: 14px;
`;

const StyledRadio = styled.div<IRadioProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 14px;
  height: 14px;
  border: 1.5px solid
    ${props =>
      props.checked ? props.theme.activeColour : props.theme.greyLight};
  box-sizing: border-box;
  opacity: ${props => (props.checked ? '1' : '0.7')};
  border-radius: 50%;
  display: flex;
  align-items: center;
  background: ${props =>
    props.checked ? props.theme.activeColour : props.theme.white};
  cursor: pointer;
  &:hover {
    border: 2px solid ${props => props.theme.activeColour};
  }
`;
const InnerCircle = styled.div<IRadioProps>`
  display: ${props => !props.checked && 'none'};
  width: 8px;
  height: 8px;
  background: ${props => props.theme.white};
  border: 1.5px solid ${props => props.theme.activeColour};
  box-sizing: border-box;
  border-radius: 50%;
  margin: auto;
`;
const Radio: SFC<IProps> = ({
  className,
  setOption,
  option,
  value,
  containerStyle
}) => {
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <RadioContainer className={className} style={containerStyle}>
        <HiddenRadio
          value={value}
          checked={option === value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setOption(e.target.value);
          }}
        />
        <StyledRadio checked={option === value}>
          <InnerCircle checked={option === value} />
        </StyledRadio>
      </RadioContainer>
    </ThemeProvider>
  );
};

export default Radio;
