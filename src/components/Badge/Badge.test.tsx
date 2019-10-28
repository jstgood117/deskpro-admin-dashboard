import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import Badge, { IProps } from './Badge';

describe('Badge', () => {
  let props: IProps;
  let mountedAvatar: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedAvatar) {
      mountedAvatar = bShallow
        ? shallow(<Badge {...props} />)
        : mount(<Badge {...props} />);
    }
    return mountedAvatar;
  };

  beforeEach(() => {
    props = {
      backgroundColor: '#fff',
      color: '#000'
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
}); 