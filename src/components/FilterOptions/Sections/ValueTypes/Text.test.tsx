import React from 'react';
import Text  from './Text';
import { Props } from './types';

import { mount, shallow } from '../../../../test/enzyme';
import { WrapperType } from '../../../../test/types';

const commonProps: Props = {
  filterValue: ['some value'],
  filters: [],
  index: 0,
  setFilterValue: jest.fn(),
  uniqueValues: []
};

describe('Text', () => {

  const wrapper = (bShallow: boolean, props: Props): WrapperType => {
    return bShallow
      ? shallow(<Text {...props} />)
      : mount(<Text {...props} />);
  };

  test('renders <input> tag', () => {
    const props: Props = {
      ...commonProps
    };

    const root = wrapper(false, props);
    expect(root.find('input').length).toEqual(1);
    root.unmount();
  });

  test('onClear clears filter value and calls setFilterValue', () => {

    const setFilterValue = jest.fn();
    const filter = {
      property: 'name',
      operatorName: 'CONTAINS',
      value: ['some value']
    }
    const filters = [
      { ...filter }
    ];

    const props: Props = {
      ...commonProps,
      filters,
      setFilterValue,
    };

    const root = wrapper(false, props);
    root.find('input').at(0).simulate('focus');
    root.update();
    const clearButton = root.find('.close-icon');
    clearButton.at(0).simulate('click');
    expect(setFilterValue).toHaveBeenCalledTimes(1);
    expect(filters[0].value).toEqual([""]);

    root.unmount();
  });
});