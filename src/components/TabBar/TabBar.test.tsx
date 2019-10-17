import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

import TabBar, { IProps } from './TabBar';

configure({ adapter: new Adapter() });

describe('TabBar', () => {
  let props: IProps;
  let mountedTabBar: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedTabBar) {
      mountedTabBar = bShallow
        ? shallow(<TabBar {...props} />)
        : mount(<TabBar {...props} />);
    }
    return mountedTabBar;
  };

  const TabItems = [
    { label: 'Property1' },
    { label: 'Property2' },
    { label: 'Property3' }
  ];
  beforeEach(() => {
    props = {
      tabItems: TabItems
    };
    mountedTabBar = undefined;
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });

  describe('when tabItems is empty', () => {
    beforeEach(() => {
      props.tabItems = [];
    });

    it("doesn't render anything else", () => {
      expect(wrapper(false).find('Tab').length).toBe(0);
    });
  });

  describe('when tabItems is defined', () => {
    beforeEach(() => {
      props.tabItems = TabItems;
    });

    it('renders  the div tag', () => {
      expect(wrapper(false).find('div').length).toBe(11);
      expect(wrapper(false).find('Dropdown').length).toBe(1);
    });
  });
});
