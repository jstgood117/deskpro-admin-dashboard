import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

import SidebarSection, { IProps } from './SidebarSection';
import Icon from '../../Icon';

configure({adapter: new Adapter()});

describe("SidebarSection", () => {
  let props: IProps;
  let mountedSidebarSection: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedSidebarSection) {
      mountedSidebarSection = bShallow ? shallow(<SidebarSection {...props} />) : mount(<SidebarSection {...props} />);
    }
    return mountedSidebarSection;
  }

  beforeEach(() => {
    props = {
      key: 0,
      path: undefined,
      sectionName: undefined,
      navItems: undefined,
    };
    mountedSidebarSection = undefined;
  });

  describe("when props are undefined", () => {
    it("doesn't render anything", () => {
      expect(wrapper(false).children().length).toBe(0);
    });
  });

  describe("when navData is defined with a known sectionName", () => {
    it("renders the label and an icon", () => {
      props.sectionName = 'Help';
      expect(wrapper(true).find(Icon).length).toBe(1);
      expect(wrapper(true).text()).toContain('Help');
    });
  });

  describe("when navData is defined with a unknown sectionName", () => {
    it("renders just the label", () => {
      props.sectionName = 'section 1';
      expect(wrapper(true).find('svg').length).toBe(0);
      expect(wrapper(true).text()).toContain('section 1');
    });
  });  

  describe("when navItems are defined", () => {
    it("renders the correct number of <SidebarItem>", () => {
      props.navItems = [
        { navItemName: '1' },
        { navItemName: '2' },
        { navItemName: '3' },
        { navItemName: '4' },
        { navItemName: '5' },
      ]
      expect(wrapper(true).find('SidebarItem').length).toBe(props.navItems.length);
    });
  });  

  describe("when navItems are defined with navItems inside", () => {    
    it("renders the correct number of <SidebarSubSection>", () => {
      props.navItems = [
        { navItemName: '1',
          navItems: [
            { navItemName: '1' },
            { navItemName: '2' },
            { navItemName: '3' },
            { navItemName: '4' },
            { navItemName: '5' },
          ]
        },
        { navItemName: '2',
          navItems: [] },
      ]
      expect(wrapper(true).find('SidebarSubSection').length).toBe(props.navItems.length);
    });
  });  
})