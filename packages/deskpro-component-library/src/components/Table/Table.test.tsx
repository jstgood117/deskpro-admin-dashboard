import React from 'react';
import { mount, shallow } from 'enzyme';

import Table, { IProps } from './Table';

describe("Table", () => {
  let props: IProps;
  let mountedTable: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedTable) {
      mountedTable = bShallow ? shallow(<Table {...props} />) : mount(<Table {...props} />);
    }
    return mountedTable;
  }

  beforeEach(() => {
    props = {
      tableData: undefined,
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
      ];
    });

    it("renders <DataTable>", () => {
      expect(wrapper(true).find('JsonTable').length).toBe(1);
    });

  });
})