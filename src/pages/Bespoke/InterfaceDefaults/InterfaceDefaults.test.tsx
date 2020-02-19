import React from 'react';
import { mount, shallow } from 'enzyme';
import InterfaceDefaultsPage from './index';

describe('InterfaceDefaultsPage', () => {
  let mountedPage: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedPage) {
      mountedPage = bShallow
        ? shallow(<InterfaceDefaultsPage path='/interface-defaults' />)
        : mount(<InterfaceDefaultsPage path='/interface-defaults' />);
    }
    return mountedPage;
  };

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
