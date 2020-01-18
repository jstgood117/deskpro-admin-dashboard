import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import UnitsComponent, { IProps, UnitsValuesType } from './UnitsComponent';

describe('UnitsComponent', () => {
  const props: IProps = {
    inputValue: '10',
    options: [{ value: 'minutes', label: 'minutes' }],
    option: { value: 'minutes', label: 'minutes' },
    onChange: (val: UnitsValuesType) => {
      return true;
    }
  };

  let mountedUnitsComponent: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedUnitsComponent) {
      mountedUnitsComponent = bShallow
        ? shallow(<UnitsComponent {...props} />)
        : mount(<UnitsComponent {...props} />);
    }
    return mountedUnitsComponent;
  };

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
