import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { IntlProvider } from 'react-intl';

import { testTranslations } from '../../resources/constants/constants';

import Menu from './Menu';
import {
  testDropdownItemsWithIcon,
  testDropdownItemsWithoutIcon,
  testOrderableMenuItems
} from '../../resources/constants/constants';
import { IMenuProps } from '../../resources/interfaces';
import OrderableMenu from './OrderableMenu';

const MenuComponent: React.FC<IMenuProps> = props => {
  const [value, setValue] = useState();

  return (
    <IntlProvider locale='en' messages={testTranslations}>
      <Menu
        menuItems={props.menuItems}
        iconName={props.iconName}
        value={value}
        label={value ? value['name'] : props.label}
        onSelect={val => setValue(val)}
      />
    </IntlProvider>
  );
};

const OrderableMenuComponent: React.FC<IMenuProps> = props => {
  const [value, setValue] = useState();
  const [SortList, SetList] = useState(testOrderableMenuItems);
  const checkedState: { [key: string]: boolean } = {};
  const [checked, setChecked] = useState(checkedState);
  return (
    <IntlProvider locale='en' messages={testTranslations}>
      <OrderableMenu
        iconName={props.iconName}
        value={value}
        label={value ? value['name'] : props.label}
        onSelect={val => setValue(val)}
        order={val => SetList(val)}
        initialList={testOrderableMenuItems}
        menuItems={SortList}
        setChecked={setChecked}
        checked={checked}
      />
    </IntlProvider>
  );
};

storiesOf('Menu', module)
  .add('Menu with dummy data and icon', () => (
    <MenuComponent
      label='admin_common.table.action'
      menuItems={testDropdownItemsWithIcon}
      iconName='menu'
    />
  ))
  .add('Menu with dummy data and without icon', () => (
    <MenuComponent
      label='admin_common.table.action'
      menuItems={testDropdownItemsWithoutIcon}
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
          label='admin_common.table.view'
          iconName='view'
        />
      </div>
    </div>
  ));
