import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import Avatar, { IProps } from './Avatar';

describe('Avatar', () => {
  let props: IProps;
  let mountedAvatar: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedAvatar) {
      mountedAvatar = bShallow
        ? shallow(<Avatar {...props} />)
        : mount(<Avatar {...props} />);
    }
    return mountedAvatar;
  };

  beforeEach(() => {
    props = {
      type: 'image',
      content: ''
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });

  describe('when type is image', () => {
    beforeEach(() => {
      props.type = 'image';
      props.content =
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80';
    });

    it('renders the img', () => {
      expect(wrapper(false).find('div>img').length).toBeGreaterThan(0);
    });
  });
});