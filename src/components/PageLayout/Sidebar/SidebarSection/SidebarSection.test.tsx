import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { IntlProvider } from "react-intl";

import SidebarSection, { IProps } from './SidebarSection';
import Icon from '../../../Icon';
import { ThemeProvider } from 'styled-components';
import { DeskproAdminTheme } from '../../../Theme';
import { MemoryRouter } from 'react-router';

configure({adapter: new Adapter()});

const testTranslations = {
  "test": "Test",
  "admin.sidebar.channels": "Channels",
}

describe("SidebarSection", () => {
  let props: IProps;
  let mountedSidebarSection: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedSidebarSection) {
      mountedSidebarSection = bShallow ? shallow(
        <IntlProvider locale='en' messages={testTranslations}>
          <ThemeProvider theme={DeskproAdminTheme}>
            <MemoryRouter>
              <SidebarSection {...props} />
            </MemoryRouter>
          </ThemeProvider>
        </IntlProvider>
      ) : mount(
        <IntlProvider locale='en' messages={testTranslations}>
          <ThemeProvider theme={DeskproAdminTheme}>
            <MemoryRouter>
              <SidebarSection {...props} />
            </MemoryRouter>
          </ThemeProvider>
        </IntlProvider>
      );
    }
    return mountedSidebarSection;
  }

  beforeEach(() => {
    props = {
      key: 0,
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
    it("renders the correct number of <SidebarItem>", () => {
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
      expect(wrapper(false).find('SidebarItem').length).toBe(6);
    });
  });
})