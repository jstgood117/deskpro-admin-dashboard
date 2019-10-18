import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

import TableActions, { IProps } from './TableActions';

configure({ adapter: new Adapter() });

describe('TableActions', () => {
  let props: IProps;
  let mountedTableActions: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedTableActions) {
      mountedTableActions = bShallow
        ? shallow(<TableActions {...props} />)
        : mount(<TableActions {...props} />);
    }
    return mountedTableActions;
  };

  beforeEach(() => {
    props = {
      showSearch: true,
      filterMenu: true,
      sortMenu: true,
      groupMenu: true,
      viewMenu: true
    };
    mountedTableActions = undefined;
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });

  describe('when showSearch is undefined', () => {
    beforeEach(() => {
      props.showSearch = false;
    });

    it('Renders only one div', () => {
      expect(
        wrapper(false)
          .find('div')
          .at(1)
          .children().length
      ).toBe(1);
    });
  });
  describe('when showSearch is defined', () => {
    beforeEach(() => {
      props.showSearch = true;
    });

    it('Renders only two div tags', () => {
      expect(
        wrapper(false)
          .find('div')
          .at(1)
          .children().length
      ).toBe(2);
    });
  });

  // describe('when children is defined', () => {
  //   beforeEach(() => {
  //     props.children = <div>Grid text</div>;
  //   });

  //   it('renders them within the div tag', () => {
  //     expect(
  //       wrapper(false)
  //         .find('div')
  //         .children().length
  //     ).toBe(1);
  //   });
  // });
});
