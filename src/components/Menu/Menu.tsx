import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import isNil from 'lodash/isNil';
import { MenuList, MenuButton } from 'react-menu-list';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { Scrollbars } from 'react-custom-scrollbars';

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
  StyledIcon,
  GrouppingWrapper
} from './MenuStyles';

const singleSubMenuItem: FC<IMenuProps & WrappedComponentProps> = props => {
  const selectedItem = props.value && props.value.name === props.item.name;
  return (
    <StyledMenuItem
      onItemChosen={(e: any) => {
        props.name === 'groupSub' ? e.stopPropagation() : e.preventDefault();
        if (props.name !== 'groupSub' && props.onSelect) {
          props.onSelect(props.item);
        }
      }}
      highlightedStyle={{ background: '#E8EBEE' }}
      selected={selectedItem}
      name={props.name}
    >
      <TextLabel
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingRight: 15
        }}
        bold={props.name === 'group' && selectedItem ? 1 : 0}
      >
        {props.children}
      </TextLabel>
      {props.name === 'group' && selectedItem && (
        <span style={{ position: 'absolute', right: 10 }}>
          <Icon name='check-2' />
        </span>
      )}
    </StyledMenuItem>
  );
};
export const SingleSubMenuItem = injectIntl(singleSubMenuItem);

export const multiSubMenuItem: FC<IMenuProps & WrappedComponentProps> = ({
  intl,
  item,
  onSelect,
  name,
  subMenuDirection
}) => {
  return (
    <StyledSubMenuItem
      highlightedStyle={{ background: '#E8EBEE' }}
      menu={
        name === 'group' ? (
          <MenuSub
            menuItems={item.subItems}
            onSelect={onSelect}
            name={name + 'Sub'}
          />
        ) : (
          <MenuSub menuItems={item.subItems} onSelect={onSelect} />
        )
      }
      positionOptions={{
        position: subMenuDirection ? subMenuDirection : 'left',
        vAlign: 'top',
        hAlign: 'left',
        forceVAlign: true,
        forcePosition: true
      }}
    >
      <IconWrapper>{item.icon && <Icon name={item.icon} />}</IconWrapper>
      <TextLabel style={{ paddingRight: 15 }}>
        {intl.formatMessage({ id: item.name })}
      </TextLabel>
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
export const MultiSubMenuItem = injectIntl(multiSubMenuItem);

const menuSub: FC<IMenuProps & WrappedComponentProps> = ({
  intl,
  onSelect,
  menuItems,
  value,
  name,
  subMenuDirection
}) => {
  let height = 0;
  menuItems.map(item => {
    item.name ? (height += 34) : (height += 14);
    return true;
  });
  return (
    <MenuListWrapper>
      <Scrollbars
        style={{ height, zIndex: 1, maxHeight: 190 }}
        renderTrackVertical={() => (
          <div
            style={{
              background: '#ccc',
              position: 'absolute',
              width: 6,
              right: 0,
              bottom: 0,
              top: 0,
              borderRadius: 3
            }}
          />
        )}
      >
        <MenuList>
          {menuItems.length > 0 &&
            menuItems.map((item, index: number) => {
              return (
                <div key={index}>
                  {item.name && !item.subItems && (
                    <SingleSubMenuItem
                      onSelect={onSelect}
                      item={item}
                      value={value}
                      name={name}
                    >
                      <IconWrapper>
                        {item.icon && <Icon name={item.icon} />}
                      </IconWrapper>
                      {intl.formatMessage({ id: item.name })}
                      {name === 'groupSub' && (
                        <GrouppingWrapper>
                          <span
                            style={{ display: 'flex' }}
                            onClick={() => onSelect({ ...item, sort: 'desc' })}
                          >
                            <Icon name='ic-grouping-up' />
                          </span>
                          <span
                            style={{ display: 'flex' }}
                            onClick={() => onSelect({ ...item, sort: 'asc' })}
                          >
                            <Icon name='ic-grouping-down' />
                          </span>
                        </GrouppingWrapper>
                      )}
                    </SingleSubMenuItem>
                  )}
                  {item.name && item.subItems && (
                    <MultiSubMenuItem
                      name={name}
                      item={item}
                      onSelect={onSelect}
                      menuItems={item.subItems}
                      subMenuDirection={subMenuDirection}
                    />
                  )}
                  {!item.name && <HR />}
                </div>
              );
            })}
        </MenuList>
      </Scrollbars>
    </MenuListWrapper>
  );
};
export const MenuSub = injectIntl(menuSub);

const menu: FC<IMenuProps & WrappedComponentProps> = ({
  intl,
  iconName,
  label,
  value,
  onSelect,
  menuItems,
  subMenuDirection,
  ...props
}) => {
  const selected = !isNil(value) && value !== '';
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <MenuWrapper size={props.size}>
        <MenuButton
          className={`menu-btn ${selected ? 'selected' : ''}`}
          openedClassName='selected'
          openedStyle={{ background: '#D2D8DD' }}
          menu={(
            <MenuSub
              menuItems={menuItems}
              onSelect={onSelect}
              value={value}
              name={props.name}
              subMenuDirection={subMenuDirection}
            />
          )}
          positionOptions={{
            position: 'bottom',
            vAlign: 'top',
            hAlign: 'left',
            forceVAlign: true,
            forceHAlign: true,
            forcePosition: true
          }}
        >
          {iconName && (
            <StyledIcon className='ic-menu' style={{ paddingRight: 8 }}>
              <Icon name={iconName} />
            </StyledIcon>
          )}
          <MenuLabel>{intl.formatMessage({ id: label })}</MenuLabel>
          <StyledIcon className='ic-down' style={{ paddingLeft: 8 }}>
            <Icon name='downVector' />
          </StyledIcon>
        </MenuButton>
      </MenuWrapper>
    </ThemeProvider>
  );
};

export const Menu = injectIntl(menu);

export default Menu;
