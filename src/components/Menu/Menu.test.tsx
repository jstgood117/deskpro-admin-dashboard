import React, { useState } from 'react';
import { mount, shallow } from '../../test/enzyme';

import Menu, { IProps } from './Menu';
import { DropdownItemsWithIcon } from '../../resources/constants';

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

  beforeEach(() => {
    props = {
      label: 'Action',
      iconName: 'menu',
      items: DropdownItemsWithIcon
    };
    mountedMenu = undefined;
  });
  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
