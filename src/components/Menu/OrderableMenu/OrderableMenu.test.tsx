import React, { useState } from 'react';
import { mount, shallow } from '../../../test/enzyme';

import OrderableMenu from './OrderableMenu';
import { OrderableMenuItems } from '../../../resources/constants';
import { IMenuProps } from '../../../resources/interfaces';

describe('OrderableMenu', () => {
  let props: IMenuProps;
  let mountedOrderableMenu: any;

  const OrderableMenuComponent: React.FC<IMenuProps> = props => {
    const [SortList, SetList] = useState(OrderableMenuItems);
    const [value, setValue] = useState();
    const checkedState: { [key: string]: boolean } = {};
    const [checked, setChecked] = useState(checkedState);
    return (
      <OrderableMenu
        {...props}
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
      label: 'Action',
      iconName: 'menu',
      initialList: OrderableMenuItems,
      submenuPosition: 'left'
    };
    mountedOrderableMenu = undefined;
  });
  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
