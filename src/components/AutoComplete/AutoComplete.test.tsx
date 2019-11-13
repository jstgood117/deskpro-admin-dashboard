import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import AutoComplete, { IProps } from './AutoComplete';

describe('AutoComplete', () => {
  let props: IProps;
  let mountedAutoComplete: any;

  const items = [{ label: 'apple' }, { label: 'banana' }, { label: 'pear' }];

  const wrapper = (bShallow: boolean) => {
    if (!mountedAutoComplete) {
      mountedAutoComplete = bShallow
        ? shallow(<AutoComplete {...props} />)
        : mount(<AutoComplete {...props} />);
    }
    return mountedAutoComplete;
  };

  beforeEach(() => {
    props = {
      menuItems: items,
      placeholder: 'Select Property'
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
