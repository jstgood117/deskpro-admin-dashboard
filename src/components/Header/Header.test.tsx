import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

import Header, { IProps } from './Header';

configure({ adapter: new Adapter() });

describe('Header', () => {
  let props: IProps;
  let mountedHeader: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedHeader) {
      mountedHeader = bShallow
        ? shallow(<Header {...props} />)
        : mount(<Header {...props} />);
    }
    return mountedHeader;
  };

  beforeEach(() => {
    props = {
      title: 'some.phrase.id',
      description:
        'The Agents section allows you to configure settings related to all agents in the system, whether or not they are using the helpdesk software at the moment.',
      illustration: null
    };
    mountedHeader = undefined;
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });

  describe('when children is undefined', () => {
    it("doesn't render anything else", () => {
      expect(
        wrapper(false)
          .find('div')
          .children().length
      ).toBe(0);
    });
  });

  describe('when children is defined', () => {
    it('renders them within the div tag', () => {
      expect(
        wrapper(false)
          .find('div')
          .children().length
      ).toBe(1);
    });
  });
});