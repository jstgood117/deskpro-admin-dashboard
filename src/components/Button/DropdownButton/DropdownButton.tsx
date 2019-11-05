import React, { SFC, useState, CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import isNil from 'lodash/isNil';

import Icon from '../../Icon';
import { H6 } from '../../Typography';
import { MenuLabel } from '../../Styled';

const ClearButton = styled.button`
  cursor: pointer;
  outline: none;
  width: 30px;
  align-items: center;
  justify-content: center;
  display: flex;
  border: 1px solid #1c3e55;
  margin-left: -1px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  path {
    fill: ${props => props.theme.activeColour};
  }
`;
const DropdownWrapper = styled.div<{ opened: boolean }>`
  display: inline-flex;
  border: 0.8px ${props => props.theme.static2Colour}solid;
  &:hover > * {
    color: ${props => props.theme.activeColour};
    background: ${props => props.theme.hoverColour};
    border-color: ${props => props.theme.activeColour};
  }
  &.selected > * {
    color: ${props => props.theme.activeColour};
    border-color: ${props => props.theme.activeColour};
    path {
      fill: ${props => props.theme.activeColour};
    }
  }
  &:hover, &.selected > div > div > svg {
    path {
      fill: ${props => props.theme.activeColour};
    }
  }
`;
const DropdownStyled = styled.div<{ hasClearButton: boolean; opened: boolean; size: string }>`
  background: ${props => props.theme.secondaryColour};
  border: 0.8px
    ${props =>
      props.opened ? props.theme.activeColour : props.theme.static2Colour}
    solid;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  outline: none;
  color: ${props => props.theme.static2Colour};
  height: ${props => props.size === 'medium' ? 34 : 28}px;
  display: inline-block;
  padding: 0 10px;
  ${props =>
    props.hasClearButton &&
    css`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `};
`;
const DropdownBtn = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DropdownContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: #ffffff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: -1px;
  left: -1px;
  width: 100%;
`;
const DropdownContentPanel = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 0;
`;
const DropdownContentLink = styled(H6)`
  float: none;
  padding: 7px 15px;
  height: 31px;
  text-decoration: none;
  display: block;
  text-align: left;
  display: flex;
  align-items: center;
  :hover {
    background-color: #e8ebee;
  }
  z-index: 1;
`;
const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
  svg {
    padding-right: 8px;
  }
`;

interface IItemProps {
  link: string;
}

export interface IProps {
  iconName?: string;
  containerClassName?: string;
  containerStyle?: CSSProperties;
  dropdownContentStyle?: CSSProperties;
  label: string;
  items: IItemProps[] | any;
  value?: any;
  size?: string;
  showClearButton?: boolean;
  renderItem?: (item: any, index: number) => React.ReactElement;
  onClear?: () => void;
  onSelect?: (value: any) => void;
}

const DropdownButton: SFC<IProps> = ({
  iconName,
  containerClassName,
  containerStyle,
  dropdownContentStyle,
  label,
  items,
  value,
  showClearButton,
  renderItem,
  onClear,
  onSelect,
  size
}) => {
  const [openState, clickButton] = useState(false);

  const selected = !isNil(value) && value !== '';
  return (
    <DropdownWrapper
      opened={openState}
      style={containerStyle}
      className={`${containerClassName || ''} ${selected ? 'selected' : ''}`}
    >
      <DropdownStyled
        opened={openState}
        hasClearButton={showClearButton && selected}
        size={size}
      >
        <DropdownBtn
          onClick={() => {
            clickButton(!openState);
          }}
        >
          <StyledIcon>
            {iconName && (
                <Icon name={iconName} />
            )}
            <MenuLabel>{label}</MenuLabel>
          </StyledIcon>

          <Icon name='downVector' />
        </DropdownBtn>

        {openState && (
          <DropdownContent
            style={dropdownContentStyle}
            onClick={() => {
              clickButton(!openState);
            }}
          >
            {items.map((item: any, index: number) => {
              return renderItem ? (
                renderItem(item, index)
              ) : (
                <DropdownContentLink
                  key={index}
                  onClick={() => onSelect && onSelect(item)}
                >
                  <MenuLabel>{item.link}</MenuLabel>
                </DropdownContentLink>
              );
            })}
            <DropdownContentPanel />
          </DropdownContent>
        )}
      </DropdownStyled>
      {showClearButton && selected && (
        <ClearButton
          onClick={event => {
            event.stopPropagation();
            if(onClear) { onClear(); }
          }}
        >
          <Icon name='close' />
        </ClearButton>
      )}
    </DropdownWrapper>
  );
};

export default DropdownButton;