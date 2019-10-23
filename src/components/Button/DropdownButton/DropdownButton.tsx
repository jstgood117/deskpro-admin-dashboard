import React, { SFC, useState, CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import isNil from 'lodash/isNil';

import Icon from '../../Icon';
import { H6 } from '../../Typography';

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
  &:hover > * {
    color: ${props => props.theme.activeColour};
    background: ${props => props.theme.hoverColour};
    border: ${props => (props.opened ? 0 : 0.8)}px solid
      ${props => props.theme.activeColour};
    path {
      fill: ${props => props.theme.activeColour};
    }
  }
  &.selected > * {
    color: ${props => props.theme.activeColour};
    border: ${props => (props.opened ? 0 : 0.8)}px solid
      ${props => props.theme.activeColour};
    path {
      fill: ${props => props.theme.activeColour};
    }
  }
`;
const DropdownStyled = styled.div<{ hasClearButton: boolean; opened: boolean }>`
  background: ${props => props.theme.secondaryColour};
  border: ${props => (props.opened ? 0 : 0.8)}px solid
    ${props => props.theme.static2Colour};
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  outline: none;
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 150%;
  color: ${props => props.theme.static2Colour};
  height: 34px;
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
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 150%;
  top: 0px;
  left: 0px;
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
`;
const LeftIcon = styled.div`
  margin-left: 5px;
  line-height: 1;
  margin-right: 5px;
`;

interface IItemProps {
  link: string;
}

export interface IProps {
  iconName?: string;
  containerClassName?: string;
  containerStyle?: CSSProperties;
  label: string;
  items: IItemProps[];
  value?: any;
  showClearButton?: boolean;
  onClear?: () => void;
  onSelect?: (value: any) => void;
}

const DropdownButton: SFC<IProps> = ({
  iconName,
  containerClassName,
  containerStyle,
  label,
  items,
  value,
  showClearButton,
  onClear,
  onSelect
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
      >
        <DropdownBtn
          onClick={() => {
            clickButton(!openState);
          }}
        >
          <StyledIcon>
            {iconName && (
              <LeftIcon>
                <Icon name={iconName} />
              </LeftIcon>
            )}
            {label}
          </StyledIcon>

          <Icon name="downVector" />
        </DropdownBtn>

        {openState && (
          <DropdownContent
            onClick={() => {
              clickButton(!openState);
            }}
          >
            {items.map((item, index: number) => {
              return (
                <DropdownContentLink
                  key={index}
                  onClick={() => onSelect && onSelect(item)}
                >
                  {item.link}
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
            onClear && onClear();
          }}
        >
          <Icon name="close" />
        </ClearButton>
      )}
    </DropdownWrapper>
  );
};

export default DropdownButton;