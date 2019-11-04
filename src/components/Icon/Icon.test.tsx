import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import Icon, { IProps } from './Icon';

describe('Icon', () => {
  let props: IProps;
  let mountedIcon: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedIcon) {
      mountedIcon = bShallow ? shallow(<Icon {...props} />) : mount(<Icon {...props} />);
    }
    return mountedIcon;
  };

  beforeEach(() => {
    props = {
      name: 'admin.sidebar.setup'
    };
    mountedIcon = undefined;
  });

  it('always renders a <svg>', () => {
    const elts = wrapper(false).find('svg');
    expect(elts.length).toBeGreaterThan(0);
  });
});