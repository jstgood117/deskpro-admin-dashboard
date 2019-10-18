import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

import FilterButton, { IProps } from './FilterButton';

configure({adapter: new Adapter()});

describe("Grid", () => {
  let props: IProps;
  let mountedFilterButton: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedFilterButton) {
      mountedFilterButton = bShallow ? shallow(<FilterButton {...props} />) : mount(<FilterButton {...props} />);
    }
    return mountedFilterButton;
  }

  beforeEach(() => {
    props = {};
    mountedFilterButton = undefined;
  });

  it("always renders a <div>", () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });

  describe("renders div tags and button tags, svg tags: ", () => {

    it("render div", () => {
      expect(wrapper(false).find('div').children().length).toBe(1);
    });
    it("render svg", () => {
      expect(wrapper(false).find('svg').children().length).toBe(1);
    });
    it("render svg", () => {
      expect(wrapper(false).find('button').children().length).toBe(1);
    });
  });
})