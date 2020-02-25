import React, { useState } from 'react';
import { mount, shallow } from '../../../test/enzyme';

import BrandButtonGroup from './BrandButtonGroup';
import { SizeTypes } from '../../../types';

describe('BrandButtonGroup', () => {
  let props: {
    size?: SizeTypes;
  };
  let mountedBrandButtonGroupComponent: any;

  const BrandButtonGroupComponent: React.FC<{
    size?: SizeTypes;
  }> = _props => {
    const [selected, selectBtn] = useState<string>();
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
