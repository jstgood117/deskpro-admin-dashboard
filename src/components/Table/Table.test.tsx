import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

import Table, { IProps } from './Table';

configure({adapter: new Adapter()});

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
      dataQuery: undefined,
      metadataQuery: undefined,
    };
    mountedTable = undefined;
  });

/*  it("always renders a <div>", () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
*/
  describe("when tableData & columns are undefined", () => {
    it("doesn't render anything else", () => {
      expect(wrapper(false).find('div').children().length).toBe(0);
    });
  });

  describe("when tableData & columns are defined", () => {
    beforeEach(() => {
      // set up data?
    });

    it("renders all the rows into <MaterialTable>", () => {
      // MaterialTable component becomes WithStyles (internal to material-table)
      expect(wrapper(true).find('WithStyles(Component)').length).toBe(0);
      // Don't test a sub-component
//      expect(wrapper(false).find('person').length).toBe(props.tableData.length);
    });
  }); 
})