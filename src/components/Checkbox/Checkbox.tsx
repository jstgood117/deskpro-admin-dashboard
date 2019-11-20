import React, { SFC, CSSProperties, MouseEvent } from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import Button from '../Button';
import { IItemProps } from '../Button/Button';
import { dpstyle } from '../Styled';

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
  display: flex;
  svg {
    margin: auto;
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;

const ArrowButton = styled.span<{ checked: boolean; opened?: boolean }>`
  padding-left: 8px;
  .arrow-btn {
    position: unset;
    .dropdownContent {
      top: 34px;
    }
    button {
      background: ${props => props.opened && props.theme.hoverColour};
      border: 0px;
      &:hover {
        border: 0px;
      }
      width: 18px;
    }
  }
  path {
    fill: ${props =>
      props.checked || props.opened
        ? props.theme.activeColour
        : props.theme.static2Colour};
  }
`;

const CheckboxWrapper = styled(dpstyle.div)<{ opened?: boolean }>`
  display: inline-flex;
  align-items: center;
  height: fit-content;
  background: ${props => props.opened && props.theme.hoverColour};
  padding-left: 5px;
  position: relative;
  border-radius: 4px;
`;
const CheckboxContainer = styled.label<{ size: number }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  display: inline-flex;
  align-items: center;
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
  opened?: boolean;
  clickButton?: (e: boolean) => void;
  dropdownValue?: any;
  setDropdownValue?: (e: boolean) => void;
  items?: IItemProps[];
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
  onArrowClick,
  clickButton,
  opened,
  items,
  setDropdownValue
}) => (
  <CheckboxWrapper opened={opened}>
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
      <StyledCheckbox
        size={size}
        indeterminate={indeterminate}
        checked={checked}
      >
        {indeterminate && checked && <Icon name='checkbox.indeterminate' />}
      </StyledCheckbox>
    </CheckboxContainer>
    {showArrow && (
      <ArrowButton
        checked={checked}
        opened={opened}
        onClick={event => {
          event.preventDefault();
          if (onArrowClick) {
            onArrowClick(event);
          }
        }}
      >
        <Button
          className='arrow-btn'
          items={items}
          size='medium'
          styleType='secondary'
          iconOnly={true}
          onClick={() => {
            clickButton(!opened);
          }}
          opened={opened}
          onSelect={(val: any) => setDropdownValue(val)}
        >
          <Icon name='downVector' />
        </Button>
      </ArrowButton>
    )}
  </CheckboxWrapper>
);

export default Checkbox;
