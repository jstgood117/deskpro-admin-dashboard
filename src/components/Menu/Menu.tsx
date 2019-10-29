import React, { SFC, CSSProperties, ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import isNil from 'lodash/isNil';
import { MenuList, MenuItem, MenuButton, SubMenuItem } from 'react-menu-list';

import Icon from '../Icon';
import { MenuLabel, TextLabel } from '../Styled';
import { DeskproAdminTheme } from '../Theme';

const MenuWrapper = styled.div`
  display: inline-flex;
  .menu-btn {
    color: ${props => props.theme.greyDark};
    padding: 0px 13px 0px 14px;
    height: 28px;
    display: flex;
    align-items: center;
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.greyLight};
    outline: none;
    box-sizing: border-box;
    border-radius: ${props => props.theme.btnBorderRadius};
    cursor: pointer
    &:hover {
      border: 1px solid ${props => props.theme.activeColour};
      color: ${props => props.theme.activeColour};
      background: ${props => props.theme.hoverColour};
      .ic-down,
      .ic-menu {
        path {
          fill: ${props => props.theme.activeColour};
        }
      }
    }
  }
  .selected {
    border: 1px solid ${props => props.theme.activeColour};
    color: ${props => props.theme.activeColour};
    .ic-down,
    .ic-menu {
      path {
        fill: ${props => props.theme.activeColour};
      }
    }
  }
`;

const MenuListWrapper = styled.div`
  background: ${props => props.theme.white};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: ${props => props.theme.btnBorderRadius};
  min-width: 231px;
`;
const StyledIcon = styled.span`
  display: flex;
  align-items: center;
`;
const StyledMenuItem = styled(props => <MenuItem {...props} />)`
  cursor: pointer;
  padding: 6.2px 30px 7.09px 15px;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledSubMenuItem = styled(props => <SubMenuItem {...props} />)`
  cursor: pointer;
  padding: 6.2px 30px 7.09px 15px;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
`;
const HR = styled.div`
  border: 1px solid #eff0f0;
  margin-top: 6px;
  margin-bottom: 6px;
`;

export interface IItemProps {
  name?: string;
  subItems?: IItemProps[];
  icon?: string;
}

export interface IProps {
  iconName?: string;
  containerStyle?: CSSProperties;
  label?: string;
  items?: IItemProps[];
  value?: any;
  onSelect?: (value: any) => void;
}
export interface IListProps {
  children: ReactNode;
  onClick?: (value: any) => void;
  item?: IItemProps;
}

const LI = (props: IListProps) => {
  return (
    <StyledMenuItem
      onItemChosen={(e: any) => {
        props.onClick && props.onClick(props.item.name);
      }}
      highlightedStyle={{ background: '#E8EBEE' }}
    >
      <TextLabel
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingRight: 15
        }}
      >
        {props.children}
      </TextLabel>
    </StyledMenuItem>
  );
};

const MenuSub: SFC<IProps> = ({ onSelect, items }) => {
  return (
    <MenuListWrapper>
      <MenuList>
        {items.length > 0 &&
          items.map((item, index: number) => {
            return (
              <div key={index}>
                {item.name && !item.subItems && (
                  <LI onClick={onSelect} item={item}>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        paddingRight: 13
                      }}
                    >
                      {item.icon && <Icon name={item.icon} />}
                    </span>
                    {item.name}
                  </LI>
                )}
                {item.name && item.subItems && (
                  <StyledSubMenuItem
                    onItemChosen={() => {
                      onSelect && onSelect(item.name);
                    }}
                    highlightedStyle={{ background: '#E8EBEE' }}
                    menu={<MenuSub items={item.subItems} onSelect={onSelect} />}
                  >
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        paddingRight: 13
                      }}
                    >
                      {item.icon && <Icon name={item.icon} />}
                    </span>
                    <TextLabel style={{ paddingRight: 15 }}>
                      {item.name}
                    </TextLabel>
                    <span
                      style={{
                        position: 'absolute',
                        right: 15,
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <Icon name="rightVector" />
                    </span>
                  </StyledSubMenuItem>
                )}
                {!item.name && <HR />}
              </div>
            );
          })}
      </MenuList>
    </MenuListWrapper>
  );
};
const Menu: SFC<IProps> = ({ iconName, label, value, onSelect, items }) => {
  const selected = !isNil(value) && value !== '';
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <MenuWrapper>
        <MenuButton
          className={`menu-btn ${selected ? 'selected' : ''}`}
          menu={<MenuSub items={items} onSelect={onSelect} />}
        >
          {iconName && (
            <StyledIcon className="ic-menu">
              <Icon name={iconName} />
            </StyledIcon>
          )}
          <MenuLabel style={{ paddingRight: 8, paddingLeft: 11 }}>
            {label}
          </MenuLabel>
          <StyledIcon className="ic-down">
            <Icon name="downVector" />
          </StyledIcon>
        </MenuButton>
      </MenuWrapper>
    </ThemeProvider>
  );
};

export default Menu;
