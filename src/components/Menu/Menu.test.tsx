import React, { useState } from 'react';
import { mount, shallow } from '../../test/enzyme';

import Menu, { IProps } from './Menu';
import { IMenuItemProps } from '../../resources/interfaces';

describe('Menu', () => {
  let props: IProps;
  let mountedMenu: any;

  const MenuComponent: React.FC<IProps> = props => {
    const [value, setValue] = useState('');

    return <Menu {...props} value={value} onSelect={val => setValue(val)} />;
  };

  const wrapper = (bShallow: boolean) => {
    if (!mountedMenu) {
      mountedMenu = bShallow
        ? shallow(<MenuComponent {...props} />)
        : mount(<MenuComponent {...props} />);
    }
    return mountedMenu;
  };
  const DropdownItems: IMenuItemProps[] = [
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

  beforeEach(() => {
    props = {
      label: 'Action',
      iconName: 'menu',
      items: DropdownItems
    };
    mountedMenu = undefined;
  });
  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
