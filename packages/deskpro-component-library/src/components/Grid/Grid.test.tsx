import React from 'react';
import { mount, shallow } from 'enzyme';

import Grid, { IProps } from './Grid';

describe("Grid", () => {
  let props: IProps;
  let mountedGrid: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedGrid) {
      mountedGrid = bShallow ? shallow(<Grid {...props} />) : mount(<Grid {...props} />);
    }
    return mountedGrid;
  }

  beforeEach(() => {
    props = {};
    mountedGrid = undefined;
  });

  it("always renders a <div>", () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });

  describe("when children is undefined", () => {
    beforeEach(() => {
      props.children = undefined;
    });

    it("doesn't render anything else", () => {
      expect(wrapper(false).find('div').children().length).toBe(0);
    });
  });

  describe("when children is defined", () => {
    beforeEach(() => {
      props.children = <div>Grid text</div>;
    });

    it("renders them within the div tag", () => {
      expect(wrapper(false).find('div').children().length).toBe(1);
    });
  });
})