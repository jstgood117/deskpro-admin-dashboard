import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import Relationship, { IProps } from './Relationship';

describe('Relationship', () => {
  let props: IProps;
  let mountedAvatar: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedAvatar) {
      mountedAvatar = bShallow
        ? shallow(<Relationship {...props} />)
        : mount(<Relationship {...props} />);
    }
    return mountedAvatar;
  };

  beforeEach(() => {
    props = {
      items: [],
      color: '#fff',
      backgroundColor: '#fff',
      icon: 'question',
      renderItem: () => null,
      title: ''
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});