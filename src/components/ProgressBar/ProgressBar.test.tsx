import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import ProgressBar, { IProps } from './ProgressBar';

describe('ProgressBar', () => {
  let props: IProps;
  let mountedProgressBar: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedProgressBar) {
      mountedProgressBar = bShallow
        ? shallow(<ProgressBar {...props} />)
        : mount(<ProgressBar {...props} />);
    }
    return mountedProgressBar;
  };
  beforeEach(() => {
    props = {
      percentage: 20
    };
    mountedProgressBar = undefined;
  });
  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
