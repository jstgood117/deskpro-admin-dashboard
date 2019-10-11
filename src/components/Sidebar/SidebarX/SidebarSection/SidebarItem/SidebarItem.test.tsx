import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import SidebarItem, { IProps } from './SidebarItem';
import { DeskproAdminTheme } from '../../../../Theme';

configure({adapter: new Adapter()});

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
      navItemName: undefined,
      url: undefined,
    };
    mountedSidebarItem = undefined;
  });

  it("always renders a <li>", () => {
    const elts = wrapper(false).find('li');
    expect(elts.length).toBeGreaterThan(0);
  });

  describe("when props are undefined", () => {
    it("doesn't render anything else", () => {
      expect(wrapper(false).find('li').children().length).toBe(0);
    });
  });

  describe("when navItemName and url are defined", () => {
    beforeEach(() => {
      props.navItemName = 'item 1';
      props.url = '/page1';
    });

    it("renders the label", () => {
      expect(wrapper(false).text()).toContain('item 1');
    });

    it("renders the link", () => {
//      expect(wrapper(false).text()).toContain('item 1');
    });
  });
})