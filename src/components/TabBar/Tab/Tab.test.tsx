import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

import Tab, { IProps } from './Tab';

configure({ adapter: new Adapter() });

describe('Tab', () => {
  let props: IProps;
  let mountedTab: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedTab) {
      mountedTab = bShallow
        ? shallow(<Tab {...props} />)
        : mount(<Tab {...props} />);
    }
    return mountedTab;
  };

  beforeEach(() => {
    props = {
      label: 'Property',
      index: 0,
      value: 0
    };
    mountedTab = undefined;
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });

  describe('when label is undefined', () => {
    beforeEach(() => {
      props.label = undefined;
    });

    it("doesn't render anything else", () => {
      expect(
        wrapper(false)
          .find('div')
          .children().length
      ).toBe(0);
    });
  });

  describe('label is defined', () => {
    beforeEach(() => {
      props.label = 'Property';
      props.value = 1;
      props.index = 1;
    });

    it('renders the div tag', () => {
      expect(wrapper(false).find('div').length).toBe(1);
    });
  });

  describe('when onClick is defined', () => {
    it('when Tab clicked, will call the handler', () => {
      let passedParam = 0;
      const handleParam = () => {
        passedParam = 999;
      };
      props.onClick = handleParam;

      const Tab = wrapper(false).find('div');
      Tab.simulate('click');
      expect(passedParam).toBe(999);
    });
  });
});
