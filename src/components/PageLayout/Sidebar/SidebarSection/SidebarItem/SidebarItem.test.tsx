import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from "react-intl";

import SidebarItem, { IProps } from './SidebarItem';
import { DeskproAdminTheme } from '../../../../Theme';
import { MemoryRouter } from 'react-router';

configure({adapter: new Adapter()});

const testTranslations = {
  test: "Test",
}

describe("SidebarItem", () => {
  let props: IProps;
  let mountedSidebarItem: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedSidebarItem) {
      mountedSidebarItem = bShallow ? shallow(
        <IntlProvider locale='en' messages={testTranslations}>
          <ThemeProvider theme={DeskproAdminTheme}>
            <MemoryRouter>
              <SidebarItem {...props} />
            </MemoryRouter>
          </ThemeProvider>
        </IntlProvider>
      ) : mount(
        <IntlProvider locale='en' messages={testTranslations}>
          <ThemeProvider theme={DeskproAdminTheme}>
            <MemoryRouter>
              <SidebarItem {...props} />
            </MemoryRouter>
          </ThemeProvider>
        </IntlProvider>
        );
    }
    return mountedSidebarItem;
  }

  beforeEach(() => {
    props = {
      key: 0,
      path: undefined,
      itemName: 'test'
    };
    mountedSidebarItem = undefined;
  });

  describe("when itemName and path are defined", () => {
    it("renders the label", () => {
      expect(wrapper(false).text()).toContain('Test');
    });

    it("renders the link", () => {
//      expect(wrapper(false).text()).toContain('item 1');
    });
  });
})