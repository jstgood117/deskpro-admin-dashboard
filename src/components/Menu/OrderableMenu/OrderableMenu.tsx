import React, { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { uniqueId } from 'lodash';
import { MenuList, MenuButton } from 'react-menu-list';
import { FormattedMessage } from 'react-intl';
import Icon from '../../Icon';
import { MenuLabel, TextLabel } from '../../Styled';
import { DeskproAdminTheme } from '../../Theme';
import { IMenuItemProps, IMenuProps } from '../../../resources/interfaces';
import SortableList from '../../SortableList';
import {
  MenuWrapper,
  MenuListWrapper,
  StyledSubMenuItem,
  StyledIcon,
  IconWrapper,
  HR,
  FixedItemWrapper,
  ResetWrapper,
  SettingIcon
} from '../MenuStyles';
import Toggle from '../../Toggle';
import { SingleSubMenuItem } from '../Menu';
const MenuSub: FC<IMenuProps> = ({ onSelect, menuItems, value }) => (
  <MenuListWrapper>
    <MenuList>
      {menuItems.map((item, index: number) => (
        <div key={index}>
          {item.name && (
            <SingleSubMenuItem
              onSelect={onSelect}
              item={item}
              selected={value && value.key === item.key}
            >
              {item.icon && (
                <IconWrapper>
                  <Icon name={item.icon} />
                </IconWrapper>
              )}
              <FormattedMessage id={item.name} />
            </SingleSubMenuItem>
          )}
        </div>
      ))}
    </MenuList>
  </MenuListWrapper>
);
const MultiMenuComponent: FC<IMenuProps> = ({
  item,
  onSelect,
  value
}) => {
  const [clickedGear, clickGear] = useState(false);
  return (
    <div
      onMouseLeave={() => {
        clickGear(false);
      }}
    >
      <StyledSubMenuItem
        onItemChosen={() => {
          if (onSelect) {
            onSelect(item);
          }
        }}
        highlightedStyle={{ background: '#E8EBEE' }}
        menu={
          clickedGear && (
            <MenuSub
              onSelect={onSelect}
              menuItems={item.subItems}
              value={value}
            />
          )
        }
        positionOptions={{
          position: 'left',
          vAlign: 'top',
          hAlign: 'left',
          forceVAlign: true,
          forcePosition: true
        }}
      >
        <IconWrapper>
          <Icon name='drag-and-drop' />
        </IconWrapper>
        <IconWrapper>{item.icon && <Icon name={item.icon} />}</IconWrapper>
        <TextLabel style={{ paddingRight: 43 }}>
          <FormattedMessage id={item.name} />
        </TextLabel>
        <SettingIcon
          onClick={() => {
            clickGear(true);
          }}
        >
          <span className='ic-settings'>
            <Icon name='settings' />
          </span>
        </SettingIcon>
      </StyledSubMenuItem>
    </div>
  );
};
const Menu: FC<IMenuProps> = ({
  onSelect,
  order,
  menuItems,
  initialList,
  setChecked,
  checked,
  value,
  initialChecked
}) => {

  let idColumn: IMenuItemProps;

  const itemList = menuItems
    .filter((item: IMenuItemProps) => {
      if (!item.sortable) {
        idColumn = item;
        return false;
      }
      return true;
    })
    .map((item, index: number) => {
      return (
        <div
          key={uniqueId()}
          data-id={index}
          style={{ display: 'flex', position: 'relative', alignItems: 'center' }}
        >
          <div style={{ flex: 12 }}>
            {item.name && !item.subItems && (
              <SingleSubMenuItem onSelect={onSelect} item={item}>
                <IconWrapper>
                  <Icon name='drag-and-drop' />
                </IconWrapper>
                <IconWrapper>
                  {item.icon && <Icon name={item.icon} />}
                </IconWrapper>
                <FormattedMessage id={item.name} />
              </SingleSubMenuItem>
            )}
            {item.name && item.subItems && (
              <MultiMenuComponent
                item={item}
                onSelect={onSelect}
                value={value}
              />
            )}
          </div>
          {item.name && (
            <span style={{ position: 'absolute', right: 15, display: 'flex' }}>
              <Toggle
                checked={checked[item.key]}
                value='checked'
                onChange={event =>
                  setChecked({ ...checked, [item.key]: event.target.checked })
                }
                size='small'
              />
            </span>
          )}
        </div>
      );
    });

  return (
    <MenuListWrapper>
      <MenuList>
        {menuItems.length > 0 && (
          <SortableList
            onChange={items => {
              const OrderedList: IMenuItemProps[] = [];
              items.map((index: number) => {
                OrderedList.push(menuItems[index]);
                return true;
              });
              if (idColumn) {
                OrderedList.push(idColumn);
              }
              if (order) { order(OrderedList); }
            }}
            children={itemList}
          />
        )}

        {idColumn && (
          <FixedItemWrapper>
            <TextLabel
              style={{
                display: 'flex',
                alignItems: 'center',
                paddingLeft: 13
              }}
            >
              <FormattedMessage id={idColumn.name} />
            </TextLabel>
            <span style={{ position: 'absolute', right: 15, display: 'flex' }}>
              <Toggle
                checked={checked[idColumn.key]}
                value='checked'
                onChange={event =>
                  setChecked({ ...checked, [idColumn.key]: event.target.checked })
                }
                size='small'
              />
            </span>
          </FixedItemWrapper>
        )}

        <HR />
        <ResetWrapper
          onClick={e => {
            e.preventDefault();
            if (order) { order(initialList); }
            if (initialChecked) { setChecked(initialChecked); }
          }}
        >
          <IconWrapper>
            <Icon name='refresh' />
          </IconWrapper>
          <TextLabel
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 13
            }}
          >
            Reset to Default
          </TextLabel>
        </ResetWrapper>
      </MenuList>
    </MenuListWrapper>
  );
};
const OrderableMenu: FC<IMenuProps> = ({
  iconName,
  label,
  value,
  onSelect,
  order,
  menuItems,
  initialList,
  setChecked,
  checked,
  initialChecked,
  size
}) => {
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <MenuWrapper size={size}>
        <MenuButton
          className={`menu-btn`}
          menuZIndex={2}
          openedClassName='selected'
          openedStyle={{ background: '#D2D8DD' }}
          menu={(
            <Menu
              onSelect={onSelect}
              order={order}
              menuItems={menuItems}
              initialList={initialList}
              setChecked={setChecked}
              checked={checked}
              initialChecked={initialChecked}
              value={value}
            />
          )}
          positionOptions={{
            position: 'bottom',
            vAlign: 'top',
            hAlign: 'right',
            forceVAlign: true,
            forcePosition: true
          }}
        >
          {iconName && (
            <StyledIcon className='ic-menu'>
              <Icon name={iconName} />
            </StyledIcon>
          )}
          <MenuLabel
            style={{ paddingRight: 8, paddingLeft: iconName ? 11 : 8 }}
          >
            <FormattedMessage id={label} />
          </MenuLabel>
          <StyledIcon className='ic-down'>
            <Icon name='downVector' />
          </StyledIcon>
        </MenuButton>
      </MenuWrapper>
    </ThemeProvider>
  );
};
export default OrderableMenu;
