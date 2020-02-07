import React from 'react';
import { mount, shallow } from 'enzyme';
import DataCenterPage from './index';

describe('DataCenterPage', () => {
  let mountedPage: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedPage) {
      mountedPage = bShallow
        ? shallow(<DataCenterPage path='/data-center' />)
        : mount(<DataCenterPage path='/data-center' />);
    }
    return mountedPage;
  };

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
