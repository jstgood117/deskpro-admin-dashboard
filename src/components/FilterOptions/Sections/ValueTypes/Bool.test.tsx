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
    if (bShallow){
      return shallow(<Bool {...props} />);
    }

    return mount(<Bool {...props} />);
  };

  test('renders <input> tag at Bool', () => {
    const props: Props = {
      ...commonProps
    };

    const root = wrapper(false, props);
    expect(root.find('input').length).toEqual(1);
    root.unmount();
  });

});
