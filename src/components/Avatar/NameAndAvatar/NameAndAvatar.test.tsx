import React from 'react';
import { mount, shallow } from '../../../test/enzyme';

import NameAndAvatar, { IProps } from './NameAndAvatar';

describe('Name And Avatar', () => {
  let props: IProps;
  let mountedUserDefaultCard: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedUserDefaultCard) {
      mountedUserDefaultCard = bShallow
        ? shallow(<NameAndAvatar {...props} />)
        : mount(<NameAndAvatar {...props} />);
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