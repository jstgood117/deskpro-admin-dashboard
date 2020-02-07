import React from 'react';
import { mount, shallow } from 'enzyme';
import TicketLockingPage from './index';

describe('TicketLockingPage', () => {
  let mountedPage: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedPage) {
      mountedPage = bShallow
        ? shallow(<TicketLockingPage path='/tickets/locking' />)
        : mount(<TicketLockingPage path='/tickets/locking' />);
    }
    return mountedPage;
  };

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
