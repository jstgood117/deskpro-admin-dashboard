import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import MultiSelect, { IProps } from './MultiSelect';

describe('MultiSelect', () => {
  let props: IProps;
  let mountedMultiSelect: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedMultiSelect) {
      mountedMultiSelect = bShallow
        ? shallow(<MultiSelect {...props} />)
        : mount(<MultiSelect {...props} />);
    }
    return mountedMultiSelect;
  };

  beforeEach(() => {
    props = {
      options: [{ value: 'accounting', label: 'Accounting' }]
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
