import React from 'react';
import { mount, shallow } from '../../test/enzyme';
import testData from '../../fixtures/tableDataSmall';

import Table, { Props } from './Table';
import { ColumnMeta } from './types';

const testCols: ColumnMeta[] = [{
  id:'name',
  Header:'Name',
  accessor:'name',
  type:'name',
  sortType: (a:any, b:any, col:string) => 1,
  columnProps:{}
}];

describe('Table', () => {
  let props: Props;
  let mountedTable: any;
  let shallowTable: any;

  const wrapper = (bShallow: boolean) => {
    if (!bShallow && !mountedTable) {
      mountedTable = mount(
          <Table {...props} />
      );
    }
    if (bShallow && !shallowTable) {
      shallowTable = shallow(
          <Table {...props} />
      );
    }
    return bShallow ? shallowTable : mountedTable;
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

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
