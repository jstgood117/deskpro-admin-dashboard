import React, { useState } from 'react';
import { mount, shallow } from '../../../test/enzyme';

import SingleSelect from './SingleSelect';
import { IOptions } from '../../../types';

describe('SingleSelect', () => {
  let props: {
    options: IOptions[];
    type: 'withImage' | 'medium' | 'large' | 'primary';
  };
  let mountedSingleSelect: any;

  const SingleSelectComponent: React.FC<{
    options: IOptions[];
    type: 'withImage' | 'medium' | 'large' | 'primary';
  }> = _props => {
    const [selectedOption, selectOptions] = useState<IOptions>();

    return (
      <SingleSelect
        {..._props}
        selectOption={selectOptions}
        selectedOption={selectedOption}
      />
    );
  };

  const wrapper = (bShallow: boolean) => {
    if (!mountedSingleSelect) {
      mountedSingleSelect = bShallow
        ? shallow(<SingleSelectComponent {...props} />)
        : mount(<SingleSelectComponent {...props} />);
    }
    return mountedSingleSelect;
  };

  beforeEach(() => {
    props = {
      options: [{ value: 'accounting', label: 'Accounting' }],
      type: 'large'
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
