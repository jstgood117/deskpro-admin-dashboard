import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import Menu, { MenuSub } from './Menu';
import { testDropdownItemsWithIcon } from '../../resources/constants/constants';
import { IMenuProps } from '../../resources/interfaces';
import { WrapperType } from '../../test/types';

const setState = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (init: any) => [init, setState]
}));

describe('Menu', () => {
  const wrapper = (bShallow: boolean, props: IMenuProps): WrapperType => {
    return bShallow ? shallow(<Menu {...props} />) : mount(<Menu {...props} />);
  };
  const wrapperSub = (bShallow: boolean, props: IMenuProps): WrapperType => {
    return bShallow ? shallow(<MenuSub {...props} />) : mount(<MenuSub {...props} />);
  };

  test('always renders a <div> in Menu', () => {
    const props: IMenuProps = {
      label: 'admin_common.table.action',
      iconName: 'menu',
      menuItems: testDropdownItemsWithIcon,
      name: 'group'
    };

    const root = wrapper(false, props);
    const elts = root.find('div');
    expect(elts.length).toBeGreaterThan(0);
    root.unmount();
  });
  test('always renders a <div> in MenuSub', () => {
    const props: IMenuProps = {
      label: 'admin_common.table.action',
      iconName: 'menu',
      menuItems: testDropdownItemsWithIcon,
      name: 'groupSub'
    };

    const root = wrapperSub(false, props);
    const elts = root.find('div');
    expect(elts.length).toBeGreaterThan(0);
    root.unmount();
  });
});
