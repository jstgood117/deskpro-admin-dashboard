import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

import Avatar, { IProps } from './Avatar';

configure({ adapter: new Adapter() });

describe('Avatar', () => {
  let props: IProps;
  let mountedIcon: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedIcon) {
      mountedIcon = bShallow
        ? shallow(<Avatar {...props} />)
        : mount(<Avatar {...props} />);
    }
    return mountedIcon;
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