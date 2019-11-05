import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import Navigation, { IProps } from './Navigation';
import { testNavData } from '../../resources/constants/constants';

describe('Navigation', () => {
  let props: IProps;
  let mountedNavigation: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedNavigation) {
      mountedNavigation = bShallow
        ? shallow(<Navigation {...props} />)
        : mount(<Navigation {...props} />);
    }
    return mountedNavigation;
  };

  beforeEach(() => {
    props = {
      itemList: testNavData
    };
    mountedNavigation = undefined;
  });
  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
