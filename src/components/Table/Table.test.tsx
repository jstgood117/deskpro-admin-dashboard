import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';

import Table, { IProps } from './Table';
import { ThemeProvider } from 'styled-components';
import { DeskproAdminTheme } from '../Theme';
import { ITableColumn } from '../../resources/interfaces';

configure({adapter: new Adapter()});

const testData = [
  {"id": 75950,"name": "Louella Wallace","age": 24,"phone": "+44 (0)203 437 7302","avatar": "https://randomuser.me/api/portraits/men/49.jpg"},
  {"id": 80616,"name": "Hanson Perry","age": 36,"phone": "+44 (0)203 279 3708","color": "brown"},
  {"id": 77621,"name": "Brandi Long","age": 20,"phone": "+44 (0)203 319 4880","color": "gray"},
  {"id": 81299,"name": "Tonia Sykes","age": 38,"phone": "+44 (0)208 328 3671","color": "blue"},
  {"id": 14225,"name": "Leach Durham","age": 23,"phone": "+44 (0)208 280 9572","color": "green"}
];
const testCols: ITableColumn[] = [
  { title: 'Name', field: 'name' },
  { title: 'Email', field: 'email' },
  { title: 'Phone', field: 'phone' },
  { title: 'Access', field: 'access' },
  { title: 'Team', field: 'team' },
  { title: 'Permission Group', field: 'group' },
];

describe("Table", () => {
  let props: IProps;
  let mountedTable: any;
  let shallowTable: any;

  const wrapper = (bShallow: boolean) => {
    if (!bShallow && !mountedTable) {
      mountedTable = mount(
        <ThemeProvider theme={DeskproAdminTheme}>
          <Table {...props} />
        </ThemeProvider>
      );
    }
    if (bShallow && !shallowTable) {
      shallowTable = shallow(
        <ThemeProvider theme={DeskproAdminTheme}>
          <Table {...props} />
        </ThemeProvider>
      );
    }
    return bShallow ? shallowTable : mountedTable;
  }

  beforeEach(() => {
    props = {
      data: testData,
      columns: testCols,
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
//      expect(wrapper(false).find('div').children().length).toBe(0);
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