import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

import Dropdown, { IProps } from './Dropdown';

configure({ adapter: new Adapter() });

describe('Dropdown', () => {
  let mountedDropdown: any;
  let props: IProps;

  const wrapper = (bShallow: boolean) => {
    if (!mountedDropdown) {
      mountedDropdown = bShallow
        ? shallow(<Dropdown {...props} />)
        : mount(<Dropdown {...props} />);
    }
    return mountedDropdown;
  };
  beforeEach(() => {
    const DropdownItems = [
      { id: 0, link: 'Link1' },
      { id: 1, link: 'Link2' },
      { id: 2, link: 'Link3' },
      { id: 3, link: 'Link4' }
    ];
    props = {
      label: 'Dropdown',
      items: DropdownItems
    };
    mountedDropdown = undefined;
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });

  describe('when label is defined', () => {
    beforeEach(() => {
      props.label = 'Dropdown';
    });

    it('renders them within the div tag', () => {
      expect(
        wrapper(false)
          .find('div')
          .children().length
      ).toBe(8);
    });
  });
  describe('when items is empty', () => {
    beforeEach(() => {
      props.items = [];
    });

    it('renders them within the div tag', () => {
      expect(
        wrapper(false)
          .find('div')
          .children().length
      ).toBe(4);
    });
  });
});
