import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from "react-intl";

import SidebarItem, { IProps } from './SidebarItem';
import { DeskproAdminTheme } from '../../../Theme';

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
            <SidebarItem {...props} />
          </ThemeProvider>
        </IntlProvider>
      ) : mount(
        <IntlProvider locale='en' messages={testTranslations}>
          <ThemeProvider theme={DeskproAdminTheme}>
            <SidebarItem {...props} />
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
      itemName: 'test',
      url: undefined,
    };
    mountedSidebarItem = undefined;
  });

  it("always renders a <li>", () => {
    const elts = wrapper(false).find('li');
    expect(elts.length).toBeGreaterThan(0);
  });

  describe("when itemName and url are defined", () => {
    beforeEach(() => {
      props.url = '/page1';
    });

    it("renders the label", () => {
      expect(wrapper(false).text()).toContain('Test');
    });

    it("renders the link", () => {
//      expect(wrapper(false).text()).toContain('item 1');
    });
  });
})