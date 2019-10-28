import React, { CSSProperties } from 'react';
import styled from 'styled-components';

const SliderStyled = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.greyLight};
  transition: 0.4s;
  border-radius: 34px;
  &::before {
    position: absolute;
    content: '';
    height: 8px;
    width: 8px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const InputStyled = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;
`;

const LabelStyled = styled.label`
  position: relative;
  display: inline-block;
  width: 18px;
  height: 12px;
  input:checked + span {
    background-color: ${props => props.theme.successColour};
  }
  input:focus + span {
    box-shadow: 0 0 1px ${props => props.theme.successColour};
  }
  input:checked + span:before {
    transform: translateX(6px);
  }
`;

export interface IProps {
  checked: boolean;
  value?: any;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  inputProps?: object;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

const Toggle: React.SFC<IProps> = ({
  checked,
  value,
  className,
  style,
  disabled,
  inputProps,
  onChange
}) => {
  return (
    <LabelStyled style={style} className={className}>
      <InputStyled
        checked={checked}
        value={value}
        disabled={disabled}
        onChange={onChange}
        {...inputProps}
      />
      <SliderStyled />
    </LabelStyled>
  );
};

export default Toggle;