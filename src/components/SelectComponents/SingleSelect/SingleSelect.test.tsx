import React from 'react';
import { mount, shallow } from '../../../test/enzyme';

import SingleSelect from './SingleSelect';
import { IOptions } from '../interfaces';

describe('SingleSelect', () => {
  let props: {
    options: IOptions[];
  };
  let mountedSingleSelect: any;

  const SingleSelectComponent: React.FC<{
    options: IOptions[];
  }> = _props => {
    const [selectedOption, selectOptions] = React.useState();

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
      options: [{ value: 'accounting', label: 'Accounting' }]
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
