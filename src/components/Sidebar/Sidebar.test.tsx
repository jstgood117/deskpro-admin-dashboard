import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

import Sidebar, { IProps } from './Sidebar';

configure({adapter: new Adapter()});

describe("Sidebar", () => {
  let props: IProps;
  let mountedSidebar: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedSidebar) {
      mountedSidebar = bShallow ? shallow(<Sidebar {...props} />) : mount(<Sidebar {...props} />);
    }
    return mountedSidebar;
  }

  beforeEach(() => {
    props = {
      data: undefined,
      path: undefined,
    };
    mountedSidebar = undefined;
  });

  it("always renders a <nav>", () => {
    const elts = wrapper(false).find('nav');
    expect(elts.length).toBeGreaterThan(0);
  });

  describe("when data is undefined", () => {
    beforeEach(() => {
      props.data = undefined;
    });

    it("doesn't render anything else", () => {
      expect(wrapper(false).find('nav').children().length).toBe(0);
    });
  });

  describe("when data is defined with N sectionNames", () => {
    beforeEach(() => {
      props.data = [
        { sectionName: 'section 1' },
        { sectionName: 'section 2' },
        { sectionName: 'section 3' },
      ];
    });

    it("renders N <SidebarSection>", () => {
      expect(wrapper(true).find('SidebarSection').length).toBe(props.data.length);
    });

  });
})