import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import BinaryButton, { IProps } from './BinaryButton';
import { WrapperType } from '../../test/types';

const select = jest.fn();

describe('BinaryButton', () => {
  let mountedBinaryButton: any;
  const wrapper = (bShallow: boolean, props: IProps) => {
    if (!mountedBinaryButton) {
      mountedBinaryButton = bShallow
        ? shallow(<BinaryButton {...props} />)
        : mount(<BinaryButton {...props} />);
    }
    return mountedBinaryButton;
  };

  const simulateYesBtnClick = (root: WrapperType) => {
    const yesBtn = root.find('button');
    yesBtn.at(0).simulate('click');
  };
  const simulateNoBtnClick = (root: WrapperType) => {
    const yesBtn = root.find('button');
    yesBtn.at(1).simulate('click');
  };

  beforeEach(() => {
    mountedBinaryButton = undefined;
  });

  it('always renders a <div>', () => {
    const props = {
      selected: true,
      select
    };
    const elts = wrapper(false, props).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
  it('click yes button', () => {
    const props = {
      selected: true,
      select
    };
    const root = wrapper(false, props);
    simulateYesBtnClick(root);
    expect(select).toBeCalledTimes(1);
  });
  it('click no button', () => {
    const props = {
      selected: false,
      select
    };
    const root = wrapper(false, props);
    simulateNoBtnClick(root);
    expect(select).toBeCalledTimes(2);
  });
});
