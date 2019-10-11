import React from 'react';
import { mount, shallow } from 'enzyme';

import Icon, { IProps } from './Icon';
import { IconHelp } from './SVG';

describe("Icon", () => {
  let props: IProps;
  let mountedIcon: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedIcon) {
      mountedIcon = bShallow ? shallow(<Icon {...props} />) : mount(<Icon {...props} />);
    }
    return mountedIcon;
  }

  beforeEach(() => {
    props = {
      name: 'Setup'
    };
    mountedIcon = undefined;
  });

  it("always renders a <svg>", () => {
    const elts = wrapper(false).find('svg');
    expect(elts.length).toBeGreaterThan(0);
  });

  describe("when name is defined", () => {
    beforeEach(() => {
      props.name = 'Help';
    });

    it("renders the correct icon", () => {
      expect(wrapper(false).find(IconHelp).children().length).toBe(1);
    });
  });
})