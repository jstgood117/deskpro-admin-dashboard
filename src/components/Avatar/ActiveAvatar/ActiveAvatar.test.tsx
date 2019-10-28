import React from 'react';
import { mount, shallow } from '../../../test/enzyme';

import ActiveAvatar, { IProps } from './ActiveAvatar';

describe('Active Avatar', () => {
  let props: IProps;
  let mountedUserDefaultCard: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedUserDefaultCard) {
      mountedUserDefaultCard = bShallow
        ? shallow(<ActiveAvatar {...props} />)
        : mount(<ActiveAvatar {...props} />);
    }
    return mountedUserDefaultCard;
  };

  beforeEach(() => {
    props = {
      name: 'test'
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});