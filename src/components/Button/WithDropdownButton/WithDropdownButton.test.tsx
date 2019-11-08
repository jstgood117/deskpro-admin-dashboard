import React from 'react';
import { mount, shallow } from '../../../test/enzyme';

import WithDropdownButton, { IProps } from './WithDropdownButton';

describe('WithDropdownButton', () => {
  let props: IProps;
  let mountedWithDropdownButton: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedWithDropdownButton) {
      mountedWithDropdownButton = bShallow
        ? shallow(<WithDropdownButton {...props} />)
        : mount(<WithDropdownButton {...props} />);
    }
    return mountedWithDropdownButton;
  };

  beforeEach(() => {
    props = {
      styleType: 'primary',
      contentPosistion: 'left',
      size: 'medium',
      icon: 'plus',
      handleSelect: () => {
        return true;
      }
    };
    mountedWithDropdownButton = undefined;
  });

  it('always renders a <button>', () => {
    const elts = wrapper(false).find('button');
    expect(elts.length).toBeGreaterThan(0);
  });
});
