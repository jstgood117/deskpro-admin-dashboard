import React, { ReactNode } from 'react';
import { mount } from '../../../test/enzyme';
import TicketsProblemsPage from './TicketsProblems';

jest.mock('react-dom', () => ({
  createPortal: (node: ReactNode) => node
}));

describe('TicketsProblemsPage', () => {
  const wrapper = () =>
    mount(
      <TicketsProblemsPage path='/tickets/problems' />
    );

  it('should render settings form', () => {
    const root = wrapper();
    expect(root.find('h1').length).toEqual(1);
    expect(root.find('h1').text()).toEqual('Problems & Incidents');
  });
});
