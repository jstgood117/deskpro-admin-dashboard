import React from 'react';
import { mount, shallow } from '../../../test/enzyme';
import { WrapperType } from '../../../test/types';

import Values, { Props } from './Values';

describe('Values', () => {

  const wrapper = (bShallow: boolean, props: Props): WrapperType => {
    return bShallow
      ? shallow(<Values {...props} />)
      : mount(<Values {...props} />);
  };

  test('always renders a <div>', () => {

    const props: Props = {
      containType: 'TEXT',
      filterValue: '',
      filters: [],
      index: 0,
      uniqueValues:[],
      setFilterValue: jest.fn()
    };

    const root = wrapper(false, props);
    const elts = root.find('div');
    expect(elts.length).toBeGreaterThan(0);

    root.unmount();
  });
});
