import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import SidebarSubSection, { IProps } from './SidebarSubSection';
import { DeskproAdminTheme } from '../../../Theme';

configure({adapter: new Adapter()});

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
      path: undefined,
      itemName: undefined,
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

  describe("when itemName is defined", () => {
    beforeEach(() => {
      props.itemName = 'item 1';
    });

    it("renders the label", () => {
      expect(wrapper(false).text()).toContain('item 1');
    });
  });

  describe("when navItems are defined", () => {
    beforeEach(() => {
      props.navItems = [
        { itemName: '1' },
        { itemName: '2' },
        { itemName: '3' },
        { itemName: '4' },
        { itemName: '5' },
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