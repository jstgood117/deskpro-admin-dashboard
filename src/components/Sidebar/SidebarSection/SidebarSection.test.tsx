import React from 'react';
import { mount, shallow } from '../../../test/enzyme';

import SidebarSection, { IProps } from './SidebarSection';
import Icon from '../../Icon';
import { MemoryRouter } from 'react-router';

const testTranslations = {
  'test': 'Test',
  'admin.sidebar.channels': 'Channels',
};

describe('SidebarSection', () => {
  let props: IProps;
  let mountedSidebarSection: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedSidebarSection) {
      mountedSidebarSection = bShallow ? shallow(
          <MemoryRouter>
            <SidebarSection {...props} />
          </MemoryRouter>
      ) : mount(
          <MemoryRouter>
            <SidebarSection {...props} />
          </MemoryRouter>
      );
    }
    return mountedSidebarSection;
  };

  beforeEach(() => {
    props = {
      key: 0,
      sectionName: 'test',
      navItems: undefined,
    };
    mountedSidebarSection = undefined;
  });

  describe('always', () => {
    it('renders the label and an icon', () => {
      expect(wrapper(false).find(Icon).length).toBe(1);
      expect(wrapper(false).text()).toContain('Test');
    });
  });

  describe('when navItems are defined', () => {
    it('renders the correct number of <SidebarItem>', () => {
      props.navItems = [
        { itemName: 'test' },
        { itemName: 'test' },
        { itemName: 'test' },
        { itemName: 'test' },
        { itemName: 'test' },
      ];
      expect(wrapper(false).find('SidebarItem').length).toBe(props.navItems.length);
    });
  });

  describe('when navItems are defined with navItems inside', () => {
    it('renders the correct number of <SidebarItem>', () => {
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
      ];
      expect(wrapper(false).find('SidebarItem').length).toBe(6);
    });
  });
});