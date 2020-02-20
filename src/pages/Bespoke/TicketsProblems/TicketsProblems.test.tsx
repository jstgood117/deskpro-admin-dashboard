import React from 'react';
import { mount, shallow } from 'enzyme';
import TicketsProblemsPage from './index';

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
