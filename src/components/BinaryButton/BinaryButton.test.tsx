import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import BinaryButton, { IProps } from './BinaryButton';

describe('BinaryButton', () => {
  let props: IProps;
  let mountedBinaryButton: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedBinaryButton) {
      mountedBinaryButton = bShallow
        ? shallow(<BinaryButton {...props} />)
        : mount(<BinaryButton {...props} />);
    }
    return mountedBinaryButton;
  };

  beforeEach(() => {
    props = {};
    mountedBinaryButton = undefined;
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
