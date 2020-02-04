import React from 'react';
import { mount, shallow } from '../../../../test/enzyme';
import Table, { Props } from '../../Table';
import { resizableTable } from '../functions';
import { ColumnMeta } from '../../types';

const testData = [
  { 'id': 75950, 'name': 'Louella Wallace', 'age': 24, 'phone': '+44 (0)203 437 7302', 'avatar': 'https://randomuser.me/api/portraits/men/49.jpg' },
  { 'id': 80616, 'name': 'Hanson Perry', 'age': 36, 'phone': '+44 (0)203 279 3708', 'color': 'brown', 'avatar': 'https://randomuser.me/api/portraits/men/49.jpg' },
  { 'id': 77621, 'name': 'Brandi Long', 'age': 20, 'phone': '+44 (0)203 319 4880', 'color': 'gray', 'avatar': 'https://randomuser.me/api/portraits/men/49.jpg' },
  { 'id': 81299, 'name': 'Tonia Sykes', 'age': 38, 'phone': '+44 (0)208 328 3671', 'color': 'blue', 'avatar': 'https://randomuser.me/api/portraits/men/49.jpg' },
  { 'id': 14225, 'name': 'Leach Durham', 'age': 23, 'phone': '+44 (0)208 280 9572', 'color': 'green', 'avatar': 'https://randomuser.me/api/portraits/men/49.jpg' }
];
const testCols: ColumnMeta[] = [{
  id: 'name',
  Header: 'Name',
  accessor: 'name',
  type: 'name',
  sortType: (a: any, b: any, col: string) => 1,
  columnProps: {}
}, {
  id: 'email',
  Header: 'Email',
  accessor: 'email',
  type: 'email',
  sortType: (a: any, b: any, col: string) => 1,
  columnProps: {}
}, {
  id: 'emails',
  Header: 'Emails',
  accessor: 'emails',
  type: 'emails',
  sortType: (a: any, b: any, col: string) => 1,
  columnProps: {}
}, {
  id: 'agents',
  Header: 'Agents',
  accessor: 'agents',
  type: 'agents',
  sortType: (a: any, b: any, col: string) => 1,
  columnProps: {}
}];

describe('resizableTable', () => {
  let props: Props;
  let mountedTable: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedTable) {
      mountedTable = bShallow
        ? shallow(<Table {...props} />)
        : mount(<Table {...props} />);
    }
    return mountedTable;
  };

  beforeEach(() => {
    props = {
      data: testData,
      columns: testCols,
      path: '',
      tableType: 'sync',
      sortBy: [{
        id: 'name',
        desc: false
      }],
      groupBy: ['agents']
    };
    mountedTable = undefined;
  });

  it('always renders four <div class="resizer">', () => {
    const elts = wrapper(false).find('.resizer');
    resizableTable();
    expect(elts.length).toBe(4);
  });
});
