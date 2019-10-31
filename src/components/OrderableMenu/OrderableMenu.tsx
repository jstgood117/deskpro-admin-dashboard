import React, { SFC, CSSProperties, ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { isNil, uniqueId } from 'lodash';
import { MenuList, MenuItem, MenuButton, SubMenuItem } from 'react-menu-list';

import Icon from '../Icon';
import { MenuLabel, TextLabel } from '../Styled';
import { DeskproAdminTheme } from '../Theme';
import { IMenuItemProps } from '../../resources/interfaces';
import SortableList from '../SortableList';

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
const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  padding-right: 13px;
`;

export interface IProps {
  iconName?: string;
  containerStyle?: CSSProperties;
  label?: string;
  SortList?: IMenuItemProps[];
  value?: string;
  onSelect?: (value: string) => void;
  order?: (value: IMenuItemProps[]) => void;
}
export interface ISubProps {
  onSelect?: (value: string) => void;
  subItems?: IMenuItemProps[];
}
export interface IListProps {
  children: ReactNode;
  onClick?: (value: string) => void;
  item?: IMenuItemProps;
}

const LI = (props: IListProps) => {
  return (
    <StyledMenuItem
      onItemChosen={() => {
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

const MenuSub: SFC<ISubProps> = ({ onSelect, subItems }) => {
  return (
    <MenuListWrapper>
      <MenuList>
        {subItems.map((item, index: number) => {
          return (
            <div key={index}>
              {item.name && (
                <LI onClick={onSelect} item={item}>
                  <IconWrapper>
                    {item.icon && <Icon name={item.icon} />}
                  </IconWrapper>
                  {item.name}
                </LI>
              )}
            </div>
          );
        })}
      </MenuList>
    </MenuListWrapper>
  );
};
const Menu: SFC<IProps> = ({ onSelect, order, SortList }) => {
  const itemList = SortList.map((item, index: number) => {
    return (
      <div key={uniqueId()} data-id={index}>
        {item.name && !item.subItems && (
          <LI onClick={onSelect} item={item}>
            <IconWrapper>
              <Icon name="drag-and-drop" />
            </IconWrapper>
            <IconWrapper>{item.icon && <Icon name={item.icon} />}</IconWrapper>
            {item.name}
          </LI>
        )}
        {item.name && item.subItems && (
          <StyledSubMenuItem
            onItemChosen={() => {
              onSelect && onSelect(item.name);
            }}
            highlightedStyle={{ background: '#E8EBEE' }}
            menu={<MenuSub onSelect={onSelect} subItems={item.subItems} />}
          >
            <IconWrapper>
              <Icon name="drag-and-drop" />
            </IconWrapper>
            <IconWrapper>{item.icon && <Icon name={item.icon} />}</IconWrapper>
            <TextLabel style={{ paddingRight: 15 }}>{item.name}</TextLabel>
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
      </div>
    );
  });
  return (
    <MenuListWrapper>
      <MenuList>
        {SortList.length > 0 && (
          <SortableList
            onChange={items => {
              const OrderedList: IMenuItemProps[] = [];
              items.map((index: number) => {
                OrderedList.push(SortList[index]);
                return true;
              });
              order && order(OrderedList);
            }}
            children={itemList}
          />
        )}
      </MenuList>
    </MenuListWrapper>
  );
};
const OrderableMenu: SFC<IProps> = ({
  iconName,
  label,
  value,
  onSelect,
  order,
  SortList
}) => {
  const selected = !isNil(value) && value !== '';
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <MenuWrapper>
        <MenuButton
          className={`menu-btn ${selected ? 'selected' : ''}`}
          menu={<Menu onSelect={onSelect} order={order} SortList={SortList} />}
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

export default OrderableMenu;
