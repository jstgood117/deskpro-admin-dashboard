import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

import DropdownButton, { IProps } from './DropdownButton';

configure({ adapter: new Adapter() });

describe('DropdownButton', () => {
  let props: IProps;
  let mountedDropdownButton: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedDropdownButton) {
      mountedDropdownButton = bShallow
        ? shallow(<DropdownButton {...props} />)
        : mount(<DropdownButton {...props} />);
    }
    return mountedDropdownButton;
  };
  const Items = [
    { link: 'Link1' },
    { link: 'Link2' },
    { link: 'Link3' },
    { link: 'Link4' }
  ];
  beforeEach(() => {
    props = {
      iconName: 'filter',
      label: 'Filter',
      items: Items
    };
    mountedDropdownButton = undefined;
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });

  describe('when items is empty', () => {
    beforeEach(() => {
      props.items = [];
    });

    it("doesn't render DropdownContentLink", () => {
      expect(wrapper(false).find('DropdownContentLink').length).toBe(0);
    });
  });
  describe('when items are defined', () => {
    beforeEach(() => {
      props.items = Items;
    });

    it('renders div tags and svg tag', () => {
      expect(wrapper(false).find('div').length).toBe(4);
      expect(wrapper(false).find('svg').length).toBe(2);
    });
  });
  describe('when onClick is defined', () => {
    it('when button clicked', () => {
      const button = wrapper(false).find('div');
      button.at(1).simulate('click');
      expect(wrapper(false).find('div').length).toBe(10);
    });
  });
});
