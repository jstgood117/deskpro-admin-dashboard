import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import FormAndDropdown from './FormAndDropdown';

describe('FormAndDropdown', () => {
  let mountedFormAndDropdown: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedFormAndDropdown) {
      mountedFormAndDropdown = bShallow
        ? shallow(<FormAndDropdown />)
        : mount(<FormAndDropdown />);
    }
    return mountedFormAndDropdown;
  };

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
