import React, { useState } from 'react';
import { mount, shallow } from '../../test/enzyme';

import Menu from './Menu';
import { testDropdownItemsWithIcon } from '../../resources/constants/constants';
import { IMenuProps } from '../../resources/interfaces';

describe('Menu', () => {
  let props: IMenuProps = {};
  let mountedMenu: any;

  const MenuComponent: React.FC<IMenuProps> = _props => {
    const [value, setValue] = useState();

    return <Menu {..._props} value={value} onSelect={val => setValue(val)} />;
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
      label: 'admin_common.table.action',
      iconName: 'menu',
      menuItems: testDropdownItemsWithIcon,
      name: 'groupSub'
    };
    mountedMenu = undefined;
  });
  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
