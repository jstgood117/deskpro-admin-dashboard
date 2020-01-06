import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import AppError, { Props } from './AppError';

describe('AppError', () => {
  const props: Props = { message: 'hello'};
  let mountedLabel: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedLabel) {
      mountedLabel = bShallow
        ? shallow(<AppError {...props} />)
        : mount(<AppError {...props} />);
    }
    return mountedLabel;
  };

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});