import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

import Header, { IProps } from './Header';

configure({adapter: new Adapter()});

describe("Header", () => {
  let props: IProps;
  let mountedHeader: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedHeader) {
      mountedHeader = bShallow ? shallow(<Header {...props} />) : mount(<Header {...props} />);
    }
    return mountedHeader;
  }

  beforeEach(() => {
    props = {};
    mountedHeader = undefined;
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
      props.children = <div>Header text</div>;
    });

    it("renders them within the div tag", () => {
      expect(wrapper(false).find('div').children().length).toBe(1);
    });
  });
})