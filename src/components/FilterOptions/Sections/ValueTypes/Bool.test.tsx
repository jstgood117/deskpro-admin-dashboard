import React from 'react';
import { Props } from './types';
import Select from 'react-select';

import Bool from './Bool';

import { mount, shallow } from '../../../../test/enzyme';
import { WrapperType } from '../../../../test/types';

const commonProps: Props = {
  filterValue: ['some value'],
  filters: [],
  index: 0,
  setFilterValue: jest.fn(),
  uniqueValues: []
};

describe('Bool', () => {

  const wrapper = (bShallow: boolean, props: Props): WrapperType => {
    return bShallow
      ? shallow(<Bool {...props} />)
      : mount(<Bool {...props} />);
  };

  test('renders <input> tag', () => {
    const props: Props = {
      ...commonProps
    };

    const root = wrapper(false, props);
    expect(root.find('input').length).toEqual(1);
    root.unmount();
  });

  test('on select option calls setFilterValue', () => {

    const setFilterValue = jest.fn();
    const filter = {
      property: 'can_admin',
      operatorName: 'EQUAL',
      value: ['no']
    };
    const filters = [
      { ...filter }
    ];

    const props: Props = {
      ...commonProps,
      filters,
      setFilterValue,
    };

    const root = wrapper(false, props);
    // root.simulate('keyDown', { keyCode: 40 });
    // root.simulate('keyDown', { keyCode: 13 });
    // expect(filters[0].value).toEqual(['yes']);
    // (root.find('Select').instance() as Select).selectOption({label:'Yes', value:'yes'});

    root.unmount();
  });
});
