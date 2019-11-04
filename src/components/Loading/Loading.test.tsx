import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import Loading, { IProps, IStyleProps } from './Loading';

describe('Loading', () => {
  let props: IProps & IStyleProps;
  let mountedLoading: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedLoading) {
      mountedLoading = bShallow ? shallow(
        <Loading {...props} />
      ) : mount(
        <Loading {...props} />
      );
    }
    return mountedLoading;
  };

  beforeEach(() => {
    props = {
      styleType: 'primary'
    };
    mountedLoading = undefined;
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});