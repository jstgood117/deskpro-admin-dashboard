import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import Locale, { IProps } from './Locale';

describe('Locale', () => {
  let props: IProps;
  let mountedAvatar: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedAvatar) {
      mountedAvatar = bShallow
        ? shallow(<Locale {...props} />)
        : mount(<Locale {...props} />);
    }
    return mountedAvatar;
  };

  beforeEach(() => {
    props = {
      code: 'GB'
    };
  });

  it('always renders a <img>', () => {
    const elts = wrapper(false).find('img');
    expect(elts.length).toBeGreaterThan(0);
  });
});