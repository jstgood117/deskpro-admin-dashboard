import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import UserGroupSelector from './UserGroupSelector';

describe('UserGroupSelector', () => {

  const items = [
    { id: 0, value: 'Extra Privileged', selected: true },
    { id: 1, value: 'General Users', selected: true },
    { id: 2, value: 'Registered', selected: true },
    { id: 3, value: 'VIP', selected: false },
  ];

  let mountedSelector: any;
  const props: any = {
    items,
    onSelect: () => { }
  };

  const wrapper = (bShallow: boolean) => {
    if (!mountedSelector) {
      mountedSelector = bShallow
        ? shallow(<UserGroupSelector {...props} />)
        : mount(<UserGroupSelector {...props} />);
    }
    return mountedSelector;
  };

  it('should generate items rows', () => {
    const root = wrapper(false);
    expect(root.find({ type: 'checkbox' }).length).toBe(4);
  });
});
