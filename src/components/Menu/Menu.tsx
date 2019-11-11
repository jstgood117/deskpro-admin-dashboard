import React, { SFC } from 'react';
import { ThemeProvider } from 'styled-components';
import isNil from 'lodash/isNil';
import { MenuList, MenuButton } from 'react-menu-list';

import Icon from '../Icon';
import { MenuLabel, TextLabel } from '../Styled';
import { DeskproAdminTheme } from '../Theme';
import { IMenuProps } from '../../resources/interfaces';
import {
  MenuWrapper,
  StyledMenuItem,
  IconWrapper,
  MenuListWrapper,
  StyledSubMenuItem,
  HR,
  StyledIcon
} from './MenuStyles';

export const SingleSubMenuItem: SFC<IMenuProps> = props => {
  return (
    <StyledMenuItem
      onItemChosen={(e: any) => {
        if (props.onSelect) {
          props.onSelect(props.item);
        }
      }}
      highlightedStyle={{ background: '#E8EBEE' }}
      selected={props.selected}
    >
      <TextLabel
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingRight: 15
        }}
        bold={props.selected}
      >
        {props.children}
      </TextLabel>

      {props.selected && (
        <span
          style={{
            position: 'absolute',
            right: 10
          }}
        >
          <Icon name='check-2' />
        </span>
      )}
    </StyledMenuItem>
  );
};
export const MultiSubMenuItem: SFC<IMenuProps> = ({
  item,
  onSelect,
  submenuPosition
}) => {
  return (
    <StyledSubMenuItem
      highlightedStyle={{ background: '#E8EBEE' }}
      menu={<MenuSub menuItems={item.subItems} onSelect={onSelect} />}
      positionOptions={{
        position: submenuPosition ? submenuPosition : 'right',
        vAlign: 'top',
        hAligh: 'left'
      }}
    >
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
        <Icon name='rightVector' />
      </span>
    </StyledSubMenuItem>
  );
};

const MenuSub: SFC<IMenuProps> = ({ onSelect, menuItems, submenuPosition }) => {
  return (
    <MenuListWrapper>
      <MenuList>
        {menuItems.length > 0 &&
          menuItems.map((item, index: number) => {
            return (
              <div key={index}>
                {item.name && !item.subItems && (
                  <SingleSubMenuItem onSelect={onSelect} item={item}>
                    <IconWrapper>
                      {item.icon && <Icon name={item.icon} />}
                    </IconWrapper>
                    {item.name}
                  </SingleSubMenuItem>
                )}
                {item.name && item.subItems && (
                  <MultiSubMenuItem
                    item={item}
                    onSelect={onSelect}
                    menuItems={item.subItems}
                    submenuPosition={submenuPosition}
                  />
                )}
                {!item.name && <HR />}
              </div>
            );
          })}
      </MenuList>
    </MenuListWrapper>
  );
};
const Menu: SFC<IMenuProps> = ({
  iconName,
  label,
  value,
  onSelect,
  menuItems
}) => {
  const selected = !isNil(value) && value !== '';
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <MenuWrapper>
        <MenuButton
          className={`menu-btn ${selected ? 'selected' : ''}`}
          menu={<MenuSub menuItems={menuItems} onSelect={onSelect} />}
        >
          {iconName && (
            <StyledIcon className='ic-menu' style={{ paddingRight: 8 }}>
              <Icon name={iconName} />
            </StyledIcon>
          )}
          <MenuLabel>{label}</MenuLabel>
          <StyledIcon className='ic-down' style={{ paddingLeft: 8 }}>
            <Icon name='downVector' />
          </StyledIcon>
        </MenuButton>
      </MenuWrapper>
    </ThemeProvider>
  );
};

export default Menu;
