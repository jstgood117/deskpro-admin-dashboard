import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Menu, { IProps, IItemProps } from './Menu';

const DropdownItems1: IItemProps[] = [
  { name: 'Delete Agents', icon: 'trash' },
  {},
  {
    name: 'Change Team',
    subItems: [
      { name: 'Add Team' },
      { name: 'Remove Team' },
      { name: 'Remove All & Add Team' }
    ],
    icon: 'user.check'
  },
  {
    name: 'Change Permission Group',
    subItems: [
      { name: 'Add Permission Group' },
      { name: 'Remove Permission Group' },
      { name: 'Remove All & Add Permission Group' }
    ],
    icon: 'chat'
  },
  {
    name: 'Change Access',
    subItems: [
      { name: 'Add Admin Access' },
      { name: 'Add Reports Admin Access' },
      { name: 'Remove Admin Access' },
      { name: 'Remove All & Add Admin Access' }
    ],
    icon: 'user.setting'
  },
  {
    name: 'Change Alias',
    subItems: [
      { name: 'Add Alias' },
      { name: 'Remove Alias' },
      { name: 'Remove All & Add Alias' }
    ],
    icon: 'user.alias'
  },
  {},
  {
    name: 'Set Timezone'
  },
  {
    name: 'Set Language'
  }
];
const DropdownItems2: IItemProps[] = [
  { name: 'Delete Agents' },
  {},
  {
    name: 'Change Team',
    subItems: [
      { name: 'Add Team' },
      { name: 'Remove Team' },
      { name: 'Remove All & Add Team' }
    ]
  },
  {
    name: 'Change Permission Group',
    subItems: [
      { name: 'Add Permission Group' },
      { name: 'Remove Permission Group' },
      { name: 'Remove All & Add Permission Group' }
    ]
  },
  {
    name: 'Change Access',
    subItems: [
      { name: 'Add Admin Access' },
      { name: 'Add Reports Admin Access' },
      { name: 'Remove Admin Access' },
      { name: 'Remove All & Add Admin Access' }
    ]
  },
  {
    name: 'Change Alias',
    subItems: [
      { name: 'Add Alias' },
      { name: 'Remove Alias' },
      { name: 'Remove All & Add Alias' }
    ]
  },
  {},
  {
    name: 'Set Timezone'
  },
  {
    name: 'Set Language'
  }
];

const MenuComponent: React.FC<IProps> = props => {
  const [value, setValue] = useState('');

  return <Menu {...props} value={value} onSelect={val => setValue(val)} />;
};

storiesOf('Menu', module)
  .add('Menu with dummy data and icon', () => (
    <MenuComponent label="Action" items={DropdownItems1} iconName="menu" />
  ))
  .add('Menu with dummy data and without icon', () => (
    <MenuComponent label="Action" items={DropdownItems2} iconName="menu" />
  ));
