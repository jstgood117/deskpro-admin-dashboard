import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Menu, { IProps } from './Menu';
import {
  DropdownItemsWithoutIcon,
  DropdownItemsWithIcon
} from '../../resources/constants';

const MenuComponent: React.FC<IProps> = props => {
  const [value, setValue] = useState('');

  return (
    <Menu
      items={props.items}
      iconName={props.iconName}
      value={value}
      label={value ? value : props.label}
      onSelect={val => setValue(val)}
    />
  );
};

storiesOf('Menu', module)
  .add('Menu with dummy data and icon', () => (
    <MenuComponent
      label="Action"
      items={DropdownItemsWithIcon}
      iconName="menu"
    />
  ))
  .add('Menu with dummy data and without icon', () => (
    <MenuComponent
      label="Action"
      items={DropdownItemsWithoutIcon}
      iconName="menu"
    />
  ));
