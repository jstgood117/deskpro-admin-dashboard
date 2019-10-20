import React, { SFC } from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<{ checked: boolean; indeterminate: boolean }>`
  display: inline-block;
  position: relative;
  width: 16px;
  height: 16px;
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
  display: inline-block;
  position: absolute;
  left: 36px;
  path {
    fill: ${props =>
      props.checked ? props.theme.activeColour : props.theme.static2Colour};
  }
`;

const CheckboxContainer = styled.label`
  height: 16px;
  display: inline-block;
  &::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
`;

export interface IProps {
  checked: boolean;
  value?: any;
  containerClassName?: string;
  disabled?: boolean;
  inputProps?: object;
  indeterminate?: boolean;
  showArrow?: boolean;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onArrowClick?: (event: any) => void;
}

const Checkbox: SFC<IProps> = ({
  checked,
  value,
  containerClassName,
  disabled,
  indeterminate,
  inputProps,
  showArrow,
  onChange,
  onArrowClick
}) => (
  <CheckboxContainer className={containerClassName}>
    <HiddenCheckbox
      checked={checked}
      value={value}
      disabled={disabled}
      onChange={onChange}
      {...inputProps}
    />
    <StyledCheckbox indeterminate={indeterminate} checked={checked}>
      {indeterminate && checked && <Icon name="checkbox.indeterminate" />}
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
        <Icon name="downVector" />
      </ArrowButton>
    )}
  </CheckboxContainer>
);

export default Checkbox;