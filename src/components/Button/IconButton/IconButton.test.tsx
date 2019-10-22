import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

import IconButton, { IProps } from './IconButton';

configure({ adapter: new Adapter() });

describe('IconButton', () => {
  let props: IProps;
  let mountedIconButton: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedIconButton) {
      mountedIconButton = bShallow
        ? shallow(<IconButton {...props} />)
        : mount(<IconButton {...props} />);
    }
    return mountedIconButton;
  };

  beforeEach(() => {
    props = {
      size: 'medium',
      styleType: 'primary',
      icon: 'plus'
    };
    mountedIconButton = undefined;
  });

  describe('renders button tags and svg tags', () => {
    it('render button', () => {
      expect(
        wrapper(false)
          .find('button')
          .children().length
      ).toBe(1);
    });
    it('render svg', () => {
      expect(
        wrapper(false)
          .find('svg')
          .children().length
      ).toBe(1);
    });
  });
});