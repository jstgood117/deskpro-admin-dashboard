import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import { ISizeTypes } from '../../resources/interfaces';

const SliderStyled = styled.span<{ size: ISizeTypes }>`
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
    height: ${props => (props.size === 'small' ? 8 : 12)}px;
    width: ${props => (props.size === 'small' ? 8 : 12)}px;
    left: ${props => (props.size === 'small' ? 2 : 3)}px;
    bottom: ${props => (props.size === 'small' ? 2 : 3)}px;
    background-color: white;
    transition: 0.2s;
    border-radius: 50%;
  }
`;

const InputStyled = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;
`;

const LabelStyled = styled.label<{ size: ISizeTypes }>`
  position: relative;
  display: inline-block;
  width: ${props => (props.size === 'small' ? 18 : 27)}px;
  height: ${props => (props.size === 'small' ? 12 : 18)}px;
  input:checked + span {
    background-color: ${props => props.theme.successColour};
  }
  input:focus + span {
    box-shadow: 0 0 1px ${props => props.theme.successColour};
  }
  input:checked + span:before {
    transform: ${props =>
      props.size === 'small' ? 'translateX(6px)' : 'translateX(9px)'};
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
  size: ISizeTypes;
}

const Toggle: React.SFC<IProps> = ({
  checked,
  value,
  className,
  style,
  disabled,
  inputProps,
  onChange,
  size
}) => {
  return (
    <LabelStyled style={style} className={className} size={size}>
      <InputStyled
        checked={checked}
        value={value}
        disabled={disabled}
        onChange={onChange}
        {...inputProps}
      />
      <SliderStyled size={size} />
    </LabelStyled>
  );
};

export default Toggle;
