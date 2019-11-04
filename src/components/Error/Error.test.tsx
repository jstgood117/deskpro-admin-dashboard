import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import Error, { IProps, IStyleProps } from './Error';

describe('Error', () => {
  let props: IProps & IStyleProps;
  let mountedError: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedError) {
      mountedError = bShallow ? shallow(
        <Error {...props} />
      ) : mount(
        <Error {...props} />
      );
    }
    return mountedError;
  };

  beforeEach(() => {
    props = {
      apolloError: undefined,
    };
    mountedError = undefined;
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});