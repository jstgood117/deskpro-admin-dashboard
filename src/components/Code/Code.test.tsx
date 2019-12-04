import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import Code, { IProps } from './Code';

describe('Code', () => {
  let props: IProps;
  let mountedCode: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedCode) {
      mountedCode = bShallow
        ? shallow(<Code {...props} />)
        : mount(<Code {...props} />);
    }
    return mountedCode;
  };

  beforeEach(() => {
    props = {
      children: 'Code Element'
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
