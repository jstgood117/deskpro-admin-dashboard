import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { IntlProvider } from "react-intl";

import SidebarSection, { IProps } from './SidebarSection';
import Icon from '../../Icon';
import { ThemeProvider } from 'styled-components';
import { DeskproAdminTheme } from '../../Theme';

configure({adapter: new Adapter()});

const testTranslations = {
  test: "Test",
  sidebarChannels: "Channels",
}

describe("SidebarSection", () => {
  let props: IProps;
  let mountedSidebarSection: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedSidebarSection) {
      mountedSidebarSection = bShallow ? shallow(
        <IntlProvider locale='en' messages={testTranslations}>
          <ThemeProvider theme={DeskproAdminTheme}>
            <SidebarSection {...props} />
          </ThemeProvider>
        </IntlProvider>
      ) : mount(
        <IntlProvider locale='en' messages={testTranslations}>
          <ThemeProvider theme={DeskproAdminTheme}>
            <SidebarSection {...props} />
          </ThemeProvider>
        </IntlProvider>
      );
    }
    return mountedSidebarSection;
  }

  beforeEach(() => {
    props = {
      key: 0,
      path: undefined,
      sectionName: 'test',
      navItems: undefined,
    };
    mountedSidebarSection = undefined;
  });

  describe("always", () => {
    it("renders the label and an icon", () => {
      expect(wrapper(false).find(Icon).length).toBe(1);
      expect(wrapper(false).text()).toContain('Test');
    });
  });

  describe("when navItems are defined", () => {
    it("renders the correct number of <SidebarItem>", () => {
      props.navItems = [
        { itemName: 'test' },
        { itemName: 'test' },
        { itemName: 'test' },
        { itemName: 'test' },
        { itemName: 'test' },
      ]
      expect(wrapper(false).find('SidebarItem').length).toBe(props.navItems.length);
    });
  });  

  describe("when navItems are defined with navItems inside", () => {    
    it("renders the correct number of <SidebarSubSection>", () => {
      props.navItems = [
        { itemName: 'test',
          navItems: [
            { itemName: 'test' },
            { itemName: 'test' },
            { itemName: 'test' },
            { itemName: 'test' },
            { itemName: 'test' },
              ]
        },
        { itemName: 'test',
          navItems: [] },
      ]
      expect(wrapper(false).find('SidebarSubSection').length).toBe(props.navItems.length);
    });
  });  
})