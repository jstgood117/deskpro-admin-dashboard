import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import TableActions, { IProps } from './TableActions';

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
          .at(2)
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
          .at(2)
          .children().length
      ).toBe(1);
    });
  });
  describe('when filterMenu is undefined', () => {
    beforeEach(() => {
      props.filterMenu = false;
    });

    it('Renders only 3 div tags', () => {
      expect(
        wrapper(false)
          .find('div')
          .at(5)
          .children().length
      ).toBe(1);
    });
  });
  describe('when filterMenu is defined', () => {
    beforeEach(() => {
      props.filterMenu = true;
    });

    it('Renders only two div tags', () => {
      expect(
        wrapper(false)
          .find('div')
          .at(4)
          .children().length
      ).toBe(1);
    });
  });
});
