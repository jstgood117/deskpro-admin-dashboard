import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import OverflowList, { IProps } from './OverflowList';

describe('OverflowList', () => {
  let props: IProps;
  let mountedAvatar: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedAvatar) {
      mountedAvatar = bShallow
        ? shallow(<OverflowList {...props} />)
        : mount(<OverflowList {...props} />);
    }
    return mountedAvatar;
  };

  beforeEach(() => {
    props = {
      items: [],
      max: 3,
      renderItem: () => null
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});