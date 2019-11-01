import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Menu from './Menu';
import {
  DropdownItemsWithoutIcon,
  DropdownItemsWithIcon,
  OrderableMenuItems
} from '../../resources/constants';
import { IMenuProps } from '../../resources/interfaces';
import OrderableMenu from './OrderableMenu';

const MenuComponent: React.FC<IMenuProps> = props => {
  const [value, setValue] = useState('');

  return (
    <Menu
      menuItems={props.menuItems}
      iconName={props.iconName}
      value={value}
      label={value ? value : props.label}
      onSelect={val => setValue(val)}
    />
  );
};

const OrderableMenuComponent: React.FC<IMenuProps> = props => {
  const [value, setValue] = useState('');
  const [SortList, SetList] = useState(OrderableMenuItems);
  const checkedState: { [key: string]: any } = {};
  const [checked, setChecked] = useState(checkedState);
  return (
    <OrderableMenu
      iconName={props.iconName}
      value={value}
      label={value ? value : props.label}
      onSelect={val => setValue(val)}
      order={val => SetList(val)}
      initialList={OrderableMenuItems}
      menuItems={SortList}
      submenuPosition={props.submenuPosition}
      setChecked={setChecked}
      checked={checked}
    />
  );
};

storiesOf('Menu', module)
  .add('Menu with dummy data and icon', () => (
    <MenuComponent
      label="Action"
      menuItems={DropdownItemsWithIcon}
      iconName="menu"
    />
  ))
  .add('Menu with dummy data and without icon', () => (
    <MenuComponent
      label="Action"
      menuItems={DropdownItemsWithoutIcon}
      iconName="menu"
    />
  ))
  .add('OrderableMenu with dummy data and icon', () => (
    <div
      style={{
        width: '100%',
        border: 'solid 1px',
        position: 'relative',
        boxSizing: 'border-box',
        height: '75vh',
        padding: 10
      }}
    >
      <div style={{ position: 'absolute', right: 10 }}>
        <OrderableMenuComponent
          label="View"
          iconName="view"
          submenuPosition="left"
        />
      </div>
    </div>
  ));
