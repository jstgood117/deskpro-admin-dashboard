import React, { useState } from 'react';
import { mount, shallow } from '../../../test/enzyme';

import BrandButtonGroup from './BrandButtonGroup';
import { ISizeTypes } from '../../../resources/interfaces';

describe('BrandButtonGroup', () => {
  let props: {
    size?: ISizeTypes;
  };
  let mountedBrandButtonGroupComponent: any;

  const BrandButtonGroupComponent: React.FC<{
    size?: ISizeTypes;
  }> = _props => {
    const [selected, selectBtn] = useState();
    return (
      <BrandButtonGroup
        size={_props.size}
        selectBtn={(val: string) => {
          selectBtn(val);
        }}
        selected={selected}
      />
    );
  };

  const wrapper = (bShallow: boolean) => {
    if (!mountedBrandButtonGroupComponent) {
      mountedBrandButtonGroupComponent = bShallow
        ? shallow(<BrandButtonGroupComponent {...props} />)
        : mount(<BrandButtonGroupComponent {...props} />);
    }
    return mountedBrandButtonGroupComponent;
  };

  beforeEach(() => {
    props = {
      size: 'medium'
    };
    mountedBrandButtonGroupComponent = undefined;
  });

  it('always renders a <button>', () => {
    const elts = wrapper(false).find('button');
    expect(elts.length).toBeGreaterThan(0);
  });
});
