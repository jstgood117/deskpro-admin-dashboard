import React from 'react';
import { mount, shallow } from '../../../../test/enzyme';

import SidebarItem, { IProps } from './SidebarItem';
import { MemoryRouter } from 'react-router';

describe("SidebarItem", () => {
  let props: IProps;
  let mountedSidebarItem: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedSidebarItem) {
      mountedSidebarItem = bShallow ? shallow(
          <MemoryRouter>
            <SidebarItem {...props} />
          </MemoryRouter>
      ) : mount(
          <MemoryRouter>
            <SidebarItem {...props} />
          </MemoryRouter>
        );
    }
    return mountedSidebarItem;
  }

  beforeEach(() => {
    props = {
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