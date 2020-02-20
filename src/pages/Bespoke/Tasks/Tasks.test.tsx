import React from 'react';
import { mount, shallow } from 'enzyme';
import TasksPage from './index';

describe('TasksPage', () => {
  let mountedPage: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedPage) {
      mountedPage = bShallow
        ? shallow(<TasksPage path='/tasks' />)
        : mount(<TasksPage path='/tasks' />);
    }
    return mountedPage;
  };

  it('renders a <div> root', () => {
    const root = wrapper(true);
    expect(root.length).toEqual(1);
  });
});
