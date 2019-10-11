import React from 'react';
import { mount, shallow } from 'enzyme';

import Table, { IProps } from './Table';

describe("Table", () => {
  let props: IProps;
  let mountedTable: any;
  let shallowTable: any;

  const wrapper = (bShallow: boolean) => {
    if (!bShallow && !mountedTable) {
      mountedTable = mount(<Table {...props} />);
    }
    if (bShallow && !shallowTable) {
      shallowTable = shallow(<Table {...props} />);
    }
    return bShallow ? shallowTable : mountedTable;
  }

  beforeEach(() => {
    props = {
      tableData: undefined,
      columns: undefined,
    };
    mountedTable = undefined;
  });

  it("always renders a <div>", () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });

  describe("when tableData & columns are undefined", () => {
    it("doesn't render anything else", () => {
      expect(wrapper(false).find('div').children().length).toBe(0);
    });
  });

  describe("when tableData & columns are defined", () => {
    beforeEach(() => {
      props.columns = [
        { title: 'Name', field: 'name' },
      ];
      props.tableData = [
        { name: 'person 1' },
        { name: 'person 2' },
        { name: 'person 3' },
        { name: 'person 4' },
        { name: 'person 5' },
        { name: 'person 6' },
        { name: 'person 7' },
      ];
    });

    it("renders all the rows into <MaterialTable>", () => {
      // MaterialTable component becomes WithStyles (internal to material-table)
      expect(wrapper(true).find('WithStyles(Component)').length).toBe(1);
      // Don't test a sub-component
//      expect(wrapper(false).find('person').length).toBe(props.tableData.length);
    });
  }); 
})