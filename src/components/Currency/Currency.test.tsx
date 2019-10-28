import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import Currency, { IProps } from './Currency';

describe('Currency', () => {
  let props: IProps;
  let mountedAvatar: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedAvatar) {
      mountedAvatar = bShallow
        ? shallow(<Currency {...props} />)
        : mount(<Currency {...props} />);
    }
    return mountedAvatar;
  };

  beforeEach(() => {
    props = {
      value: 1000
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
}); 