import React from 'react';
import { mount, shallow } from 'enzyme';

import Text, { IProps, IStyleProps } from './Text';

describe("Text", () => {
  let props: IProps & IStyleProps;
  let mountedText: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedText) {
      mountedText = bShallow ? shallow(<Text {...props} />) : mount(<Text {...props} />);
    }
    return mountedText;
  }

  beforeEach(() => {
    props = {
      styleType: 'p1'
    };
    mountedText = undefined;
  });

  it("always renders a <p>", () => {
    const elts = wrapper(false).find('p');
    expect(elts.length).toBeGreaterThan(0);
  });

  describe("when children is undefined", () => {
    beforeEach(() => {
      props.children = undefined;
    });

    it("doesn't render anything else", () => {
      expect(wrapper(false).find('p').children().length).toBe(0);
    });
  });

  describe("when children is defined", () => {
    beforeEach(() => {
      props.children = <b>text</b>;
    });

    it("renders them within the p tag", () => {
      expect(wrapper(false).find('p').children().length).toBe(1);
    });
  });

  describe("when onClick is defined", () => {
    it('when button clicked, will call the handler', () => {
      let passedParam = 0;
      const handleParam = () => {
        passedParam = 999;
      };
      props.onClick = handleParam;

      const p = wrapper(false).find('p');
      p.simulate('click');
      expect(passedParam).toBe(999);
    });
  });
})