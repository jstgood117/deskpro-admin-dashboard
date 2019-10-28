import React from 'react';
import { mount, shallow } from '../../../test/enzyme';

import TeamOverflow, { IProps } from './TeamOverflow';

describe('TeamOverflow', () => {
  let props: IProps;
  let mountedAvatar: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedAvatar) {
      mountedAvatar = bShallow
        ? shallow(<TeamOverflow {...props} />)
        : mount(<TeamOverflow {...props} />);
    }
    return mountedAvatar;
  };

  beforeEach(() => {
    props = {
      items: [],
      max: 3,
      styleType: 'name-avatar'
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});