import React, { ReactNode } from 'react';
import { mount, shallow } from 'enzyme';
import TicketsProblemsPage from './index';

jest.mock('react-dom', () => ({
  createPortal: (node: ReactNode) => node
}));

describe('TicketsProblemsPage', () => {
  let mountedPage: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedPage) {
      mountedPage = bShallow
        ? shallow(<TicketsProblemsPage path='/tickets/problems' />)
        : mount(<TicketsProblemsPage path='/tickets/problems' />);
    }
    return mountedPage;
  };

  it('renders a <div> root', () => {
    const root = wrapper(true);
    expect(root.length).toEqual(1);
  });
});
