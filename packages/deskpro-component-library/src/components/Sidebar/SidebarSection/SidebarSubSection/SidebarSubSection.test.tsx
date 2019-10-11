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

/*  it("always renders a <li>", () => {
    const elts = wrapper(false).find('li');
    expect(elts.length).toBeGreaterThan(0);
  });

  describe("when navData is undefined", () => {
    beforeEach(() => {
    });

    it("doesn't render anything else", () => {
      expect(wrapper(false).find('li').children().length).toBe(0);
    });
  });

  describe("when navData is defined", () => {
    beforeEach(() => {
      props.navData = {
        navItemName: 'item 1',
        url: '/page1'
      };
    });

    it("renders the label", () => {
      expect(wrapper(false).text()).toContain('item 1');
    });
  }); */
})