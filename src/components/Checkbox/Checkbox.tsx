import React, { SFC, CSSProperties, MouseEvent } from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

interface ICheckboxProps {
  size: number;
  checked: boolean;
  indeterminate: boolean;
}
const StyledCheckbox = styled.span<ICheckboxProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  box-sizing: border-box;
  background: ${props => (props.checked ? props.theme.activeColour : '#fff')};
  border-radius: 3px;
  transition: all 150ms;
  border: solid 1.5px
    ${props =>
      props.checked && !props.indeterminate ? '#fff' : props.theme.greyLight};
  &:hover {
    border: solid ${props => props.theme.greyLight} 1.5px;
  }
  svg {
    position: absolute;
    top: 6px;
    left: 3px;
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;

const ArrowButton = styled.span<{ checked: boolean }>`
  position: absolute;
  left: 36px;
  path {
    fill: ${props =>
      props.checked ? props.theme.activeColour : props.theme.static2Colour};
  }
`;

const CheckboxContainer = styled.label<{ size: number }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  display: inline-block;
  position: relative;
  &::before {
    content: '';
    vertical-align: middle;
    height: 100%;
  }
`;

export interface IProps {
  size?: number;
  checked: boolean;
  value?: string;
  containerClassName?: string;
  containerStyle?: CSSProperties;
  disabled?: boolean;
  inputProps?: object;
  indeterminate?: boolean;
  showArrow?: boolean;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onArrowClick?: (event: MouseEvent) => void;
}

const Checkbox: SFC<IProps> = ({
  size = 16,
  checked,
  value,
  containerClassName,
  containerStyle,
  disabled,
  indeterminate,
  inputProps,
  showArrow,
  onChange,
  onArrowClick
}) => (
  <CheckboxContainer
    size={size}
    style={containerStyle}
    className={containerClassName}
  >
    <HiddenCheckbox
      checked={checked}
      value={value}
      disabled={disabled}
      onChange={onChange}
      {...inputProps}
    />
    <StyledCheckbox size={size} indeterminate={indeterminate} checked={checked}>
      {indeterminate && checked && <Icon name='checkbox.indeterminate' />}
    </StyledCheckbox>

    {showArrow && (
      <ArrowButton
        checked={checked}
        onClick={event => {
          event.preventDefault();
          if (onArrowClick) {
            onArrowClick(event);
          }
        }}
      >
        <Icon name='downVector' />
      </ArrowButton>
    )}
  </CheckboxContainer>
);

export default Checkbox;