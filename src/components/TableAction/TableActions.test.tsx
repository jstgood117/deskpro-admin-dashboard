import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import TableActions, { IProps } from './TableActions';

import { ColumnOrder } from '../../types';
import { SortType } from '../Table/types';
import { WrapperType } from '../../test/types';

const setSearchValue = jest.fn();
const debounceOnSearchChange = jest.fn();

describe('TableActions', () => {
  let props: IProps;
  let mountedTableActions: any;

  const simulateClick = (root: WrapperType) => {
    const input = root.find('input');
    input.simulate('focus');
    root.update();
    const clearBtn = root.find('.clear-btn');
    clearBtn.first().simulate('click');
  };
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
      },
      onGroupByChange: (columnNames: string[]) => {
        return;
      }
    };
    mountedTableActions = undefined;
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
  test('Test click event', () => {
    const root = wrapper(false);
    simulateClick(root);
    expect(debounceOnSearchChange).toBeCalledTimes(0);
    expect(setSearchValue).toBeCalledTimes(0);
    root.unmount();
  });
});
