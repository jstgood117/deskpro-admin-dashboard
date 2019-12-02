import React from 'react';
import { mount, shallow } from '../../../test/enzyme';

import MultiSelect from './MultiSelect';
import { IOptions } from '../interfaces';

describe('MultiSelect', () => {
  let props: {
    options: IOptions[];
    type: 'fixed' | 'autocomplete';
  };
  let mountedMultiSelect: any;

  const MultiSelectComponent: React.FC<{
    options: IOptions[];
    type: 'fixed' | 'autocomplete';
  }> = _props => {
    const [selectedOptions, selectOptions] = React.useState([]);

    return (
      <MultiSelect
        {..._props}
        selectOptions={selectOptions}
        selectedOptions={selectedOptions}
      />
    );
  };

  const wrapper = (bShallow: boolean) => {
    if (!mountedMultiSelect) {
      mountedMultiSelect = bShallow
        ? shallow(<MultiSelectComponent {...props} />)
        : mount(<MultiSelectComponent {...props} />);
    }
    return mountedMultiSelect;
  };

  beforeEach(() => {
    props = {
      options: [{ value: 'accounting', label: 'Accounting' }],
      type: 'autocomplete'
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
