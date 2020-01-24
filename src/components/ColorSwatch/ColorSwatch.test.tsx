import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import ColorSwatch, { IProps } from './ColorSwatch';

describe('ColorSwatch', () => {
  let props: IProps;
  let mountedCode: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedCode) {
      mountedCode = bShallow
        ? shallow(<ColorSwatch {...props} />)
        : mount(<ColorSwatch {...props} />);
    }
    return mountedCode;
  };

  beforeEach(() => {
    props = {
      children: 'Magenta',
      color: '#fffff'
    };
    mountedCode = undefined;
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
