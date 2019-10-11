import React from 'react';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import SidebarSubSection, { IProps } from './SidebarSubSection';
import { DeskproAdminTheme } from '../../../Theme';

describe("SidebarSubSection", () => {
  let props: IProps;
  let mountedSidebarSubSection: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedSidebarSubSection) {
      mountedSidebarSubSection = bShallow ? shallow(<ThemeProvider theme={DeskproAdminTheme}><SidebarSubSection {...props} /></ThemeProvider>) : mount(<ThemeProvider theme={DeskproAdminTheme}><SidebarSubSection {...props} /></ThemeProvider>);
//      mountedSidebarSubSection = bShallow ? shallow(<SidebarSubSection {...props} />) : mount(<SidebarSubSection {...props} />);
    }
    return mountedSidebarSubSection;
  }

  beforeEach(() => {
    props = {
      key: 0,
      navItemName: undefined,
      navItems: undefined,
    };
    mountedSidebarSubSection = undefined;
  });

  it("always renders a <li>", () => {
    const elts = wrapper(false).find('li');
    expect(elts.length).toBeGreaterThan(0);
  });
  it("always renders the arrow", () => {
//    console.log(wrapper(true).debug())
//    expect(wrapper(true).find('KeyboardArrowDownIcon').length).toBe(1);
  });

  describe("when navItemName is defined", () => {
    beforeEach(() => {
      props.navItemName = 'item 1';
    });

    it("renders the label", () => {
      expect(wrapper(false).text()).toContain('item 1');
    });
  });

  describe("when navItems are defined", () => {
    beforeEach(() => {
      props.navItems = [
        { navItemName: '1' },
        { navItemName: '2' },
        { navItemName: '3' },
        { navItemName: '4' },
        { navItemName: '5' },
      ]
    });

    it("renders no <SidebarItem>", () => {
      expect(wrapper(true).find('SidebarItem').length).toBe(0);
    });

    it("when clicked, renders the correct number of <SidebarItem>", () => {
      wrapper(false).find('li').simulate('click');
      expect(wrapper(true).find('SidebarItem').length).toBe(props.navItems.length);
    });
  });  
})