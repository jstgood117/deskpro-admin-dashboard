import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import Units, { IProps, UnitsValuesType } from './Units';

describe('Units', () => {
  const props: IProps = {
    inputValue: '10',
    options: [{ value: 'minutes', label: 'minutes' }],
    option: 'minutes',
    onChange: (val: UnitsValuesType) => {
      return true;
    }
  };

  let mountedUnits: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedUnits) {
      mountedUnits = bShallow
        ? shallow(<Units {...props} />)
        : mount(<Units {...props} />);
    }
    return mountedUnits;
  };

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
