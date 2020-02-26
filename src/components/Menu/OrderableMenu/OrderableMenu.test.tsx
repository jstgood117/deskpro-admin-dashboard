import React, { useState } from 'react';
import { mount, shallow } from '../../../test/enzyme';

import OrderableMenu from './OrderableMenu';
import { testOrderableMenuItems } from '../../../resources/constants/constants';
import { IMenuProps, IMenuItemProps } from '../../../resources/interfaces';

describe('OrderableMenu', () => {
  let props: IMenuProps;
  let mountedOrderableMenu: any;

  const OrderableMenuComponent: React.FC<IMenuProps> = _props => {
    const [SortList, SetList] = useState(_props.initialList);
    const [value, setValue] = useState<IMenuItemProps>();
    const checkedState: { [key: string]: boolean } = {};
    const [checked, setChecked] = useState(checkedState);
    return (
      <OrderableMenu
        {..._props}
        order={val => SetList(val)}
        menuItems={SortList}
        value={value}
        onSelect={val => setValue(val)}
        setChecked={setChecked}
        checked={checked}
      />
    );
  };

  const wrapper = (bShallow: boolean) => {
    if (!mountedOrderableMenu) {
      mountedOrderableMenu = bShallow
        ? shallow(<OrderableMenuComponent {...props} />)
        : mount(<OrderableMenuComponent {...props} />);
    }
    return mountedOrderableMenu;
  };

  beforeEach(() => {
    props = {
      label: 'admin_common.table.action',
      iconName: 'menu',
      initialList: testOrderableMenuItems
    };
    mountedOrderableMenu = undefined;
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });

  describe('if there is sort-disabled item', () => {
    beforeEach(() => {
      testOrderableMenuItems.push({ key: 13, name: 'ID', sortable: false });
      props.initialList = testOrderableMenuItems;
      mountedOrderableMenu = undefined;
    });

    it('always renders a <div>', () => {
      const elts = wrapper(false).find('div');
      expect(elts.length).toBeGreaterThan(0);
    });
  });
});
