import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

import Body, { IProps } from './Body';

configure({ adapter: new Adapter() });

describe('Body', () => {
  let mountedBody: any;
  let props: IProps;

  const wrapper = (bShallow: boolean) => {
    if (!mountedBody) {
      mountedBody = bShallow
        ? shallow(<Body {...props} />)
        : mount(<Body {...props} />);
    }
    return mountedBody;
  };

  beforeEach(() => {
    props = {};
    mountedBody = undefined;
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(6);
  });

  describe('when children is undefined', () => {
    beforeEach(() => {
      props.children = undefined;
    });

    it("doesn't render anything else", () => {
      expect(
        wrapper(false)
          .find('div')
          .children().length
      ).toBe(6);
    });
  });

  describe('when children is defined', () => {
    beforeEach(() => {
      props.children = <div>body</div>;
    });

    it('renders them within the div tag', () => {
      expect(
        wrapper(false)
          .find('div')
          .children().length
      ).toBe(7);
    });
  });
});
