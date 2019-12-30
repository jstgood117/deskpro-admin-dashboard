import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import TableActions, { IProps } from './TableActions';

import { ColumnOrder } from '../../types';
import { SortType } from '../Table/types';

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
      viewMenu: true,
      onSortChange: (sortItems: SortType[]) => {},
      onOrderChange: (order: ColumnOrder[]) => {
        order.sort();
        return;
      }

    };
    mountedTableActions = undefined;
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
