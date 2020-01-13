import React from 'react';
import { Props } from './types';

import Bool from './Bool';

import { mount, shallow } from '../../../../test/enzyme';
import { WrapperType } from '../../../../test/types';

describe('Bool', () => {

  const wrapper = (bShallow: boolean, props: Props): WrapperType => {
    if (bShallow){
      return shallow(<Bool {...props} />);
    }

    return mount(<Bool {...props} />);
  };

  test('renders <input> tag at Bool', () => {
    const props: Props = {
      filterValue: ['no'],
      filters: [{operatorName:'EQUAL', property: 'can_admin', value:['no']}],
      index: 0,
      setFilterValue: jest.fn(),
      uniqueValues: []
    };

    const root = wrapper(false, props);
    expect(root.find('input').length).toEqual(1);
    root.unmount();
  });

});
