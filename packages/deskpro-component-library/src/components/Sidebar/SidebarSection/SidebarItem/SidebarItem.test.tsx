import React from 'react';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import SidebarItem, { IProps } from './SidebarItem';
import { DeskproAdminTheme } from '../../../Theme';

describe("SidebarItem", () => {
  let props: IProps;
  let mountedSidebarItem: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedSidebarItem) {
      mountedSidebarItem = bShallow ? shallow(<ThemeProvider theme={DeskproAdminTheme}><SidebarItem {...props} /></ThemeProvider>) : mount(<ThemeProvider theme={DeskproAdminTheme}><SidebarItem {...props} /></ThemeProvider>);
    }
    return mountedSidebarItem;
  }

  beforeEach(() => {
    props = {
      key: 0,
      navData: undefined,
    };
    mountedSidebarItem = undefined;
  });

  it("always renders a <li>", () => {
    const elts = wrapper(false).find('li');
    expect(elts.length).toBeGreaterThan(0);
  });

  describe("when navData is undefined", () => {
    beforeEach(() => {
      props.navData = undefined;
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
  });
})