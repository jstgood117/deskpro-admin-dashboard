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

  describe("when tableData is undefined", () => {
    beforeEach(() => {
      props.tableData = undefined;
    });

    it("doesn't render anything else", () => {
      expect(wrapper(false).find('div').children().length).toBe(0);
    });
  });

  describe("when tableData is defined", () => {
    beforeEach(() => {
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

/*    describe("when pageSize is undefined", () => {
      it("renders all the rows into <DataTable>", () => {
        expect(wrapper(true).find('MaterialTable').length).toBe(1);
        // expect +1 row because of the header row
        expect(wrapper(false).find('tr').length).toBe(props.tableData.length+1);
      });
    });

    describe("when pageSize is defined, and less than rows", () => {
      beforeEach(() => {
        props.pageSize = 3;
      });

      it("renders pageSize rows into <DataTable>", () => {
        expect(wrapper(true).find('MaterialTable').length).toBe(1);
        expect(wrapper(false).find('tr').length).toBe(props.pageSize);
      });

      it("renders <Pagination> objects", () => {
        expect(wrapper(true).find('Pagination').length).toBe(1);
      });
    });

    describe("when pageSize is defined, and more than rows", () => {
      beforeEach(() => {
        props.pageSize = 30;
      });

      it("renders all the rows into <DataTable>", () => {
        expect(wrapper(true).find('MaterialTable').length).toBe(1);
        expect(wrapper(false).find('tr').length).toBe(props.tableData.length);
      });

      it("renders no <Pagination> objects", () => {
        expect(wrapper(true).find('Pagination').length).toBe(0);
      });
    }); */
  }); 
})