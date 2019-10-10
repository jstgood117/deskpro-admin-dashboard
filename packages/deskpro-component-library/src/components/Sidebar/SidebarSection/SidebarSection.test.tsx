import React from 'react';
import { mount, shallow } from 'enzyme';

import SidebarSection, { IProps } from './SidebarSection';
import Icon from '../../Icon';

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
      navData: undefined,
    };
    mountedSidebarSection = undefined;
  });

  describe("when navData is undefined", () => {
    beforeEach(() => {
      props.navData = undefined;
    });

    it("doesn't render anything", () => {
      expect(wrapper(false).children().length).toBe(0);
    });
  });

  describe("when navData is defined with a sectionName", () => {
    it("renders the label and an icon", () => {
      props.navData = { sectionName: 'Help' };
      expect(wrapper(true).find(Icon).length).toBe(1);
      expect(wrapper(true).text()).toContain('Help');
    });

    it("renders just the label", () => {
      props.navData = { sectionName: 'section 1' };
      expect(wrapper(true).find('svg').length).toBe(0);
      expect(wrapper(true).text()).toContain('section 1');
    });

  });
})