import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import FilterOptions, { IProps } from './FilterOptions';

describe('FilterOptions', () => {
  let props: IProps;
  let mountedAutoComplete: any;

  const items = [{ label: 'apple' }, { label: 'banana' }, { label: 'pear' }];

  const wrapper = (bShallow: boolean) => {
    if (!mountedAutoComplete) {
      mountedAutoComplete = bShallow
        ? shallow(<FilterOptions {...props} />)
        : mount(<FilterOptions {...props} />);
    }
    return mountedAutoComplete;
  };

  beforeEach(() => {
    props = {
      properties: items,
      options: items,
      placeholder: 'Select Property'
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
