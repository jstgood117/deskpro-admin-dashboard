import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

import Main, { IProps } from './Main';

configure({adapter: new Adapter()});

describe("Main", () => {
  let props: IProps;
  let mountedMain: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedMain) {
      mountedMain = bShallow ? shallow(<Main {...props} />) : mount(<Main {...props} />);
    }
    return mountedMain;
  }

  beforeEach(() => {
    props = {};
    mountedMain = undefined;
  });

  it("always renders a <main>", () => {
    const elts = wrapper(false).find('main');
    expect(elts.length).toBeGreaterThan(0);
  });

  describe("when children is undefined", () => {
    beforeEach(() => {
      props.children = undefined;
    });

    it("doesn't render anything else", () => {
      expect(wrapper(false).find('main').children().length).toBe(0);
    });
  });

  describe("when children is defined", () => {
    beforeEach(() => {
      props.children = <div>Main text</div>;
    });

    it("renders them within the main tag", () => {
      expect(wrapper(false).find('main').children().length).toBe(1);
    });
  });
})