import React from 'react';
import { mount, shallow } from 'enzyme';
import TicketDeflectionPage from './index';

describe('TicketDeflectionPage', () => {
  let mountedPage: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedPage) {
      mountedPage = bShallow
        ? shallow(<TicketDeflectionPage path='/tickets/deflection' />)
        : mount(<TicketDeflectionPage path='/tickets/deflection' />);
    }
    return mountedPage;
  };

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
