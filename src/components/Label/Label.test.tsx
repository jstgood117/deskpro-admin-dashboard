import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import Label, { IProps, IStyleProps } from './Label';

describe('Label', () => {
  const props: IProps = {label: 'test'};
  const styleProps: IStyleProps = {styleType:'lined'};
  let mountedLabel: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedLabel) {
      mountedLabel = bShallow
        ? shallow(<Label {...props} {...styleProps} />)
        : mount(<Label {...props} {...styleProps} />);
    }
    return mountedLabel;
  };

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
