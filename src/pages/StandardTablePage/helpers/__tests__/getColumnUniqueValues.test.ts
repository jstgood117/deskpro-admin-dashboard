import {
  getColumnUniqueValues
} from '../getColumnUniqueValues';

import { testTableData as data1 } from '../../../../fixtures/gql/StandardTablesPage/tableData1';
import { testTableData2 as data2 } from '../../../../fixtures/gql/StandardTablesPage/tableData2';
import { testTableData3 as data3 } from '../../../../fixtures/gql/StandardTablesPage/tableData3';
import { testTableData4 as data4 } from '../../../../fixtures/gql/StandardTablesPage/tableData4';

describe('getColumnUniqueValues', () => {

  test('get all the unique values from a table column - data 1', () => {

    const result = getColumnUniqueValues(data1, 'name', {'name': 'TableColumnText' });
    const expected =  [
      'Aaron Wood',       'Anthony Martin',
      'Braydon Jackson',  'Cynthia Clarke',
      'Ewald Rolfson',    'Georgiana Wolff',
      'Jacinto Jacobson', 'John Doe',
      'Joseph Strosin',   'Kayley Hamill',
      'Leo Walker',       'Mariliou Weissnat',
      'Melvin O\'Conner',  'Noah Williams',
      'Oceane Bins',      'Philip Thompson',
      'Randy Jones',      'Thora Grady',
      'Uriel Smith',      'Vanessa Johnson'
    ];

    expect(result).toEqual(expected);
  });

  test('get all the unique values from a table column - data 2', () => {

    const result = getColumnUniqueValues(data2, 'name', {'name': 'TableColumnText' });
    const expected =  [
      'John Doe',
      'Pansy Mills',
      'Denis Reilly',
      'Dejah McGlynn',
      'Lilliana Weber',
      'Jadyn Fritsch',
      'Clare Cronin',
      'Carlotta Klein',
      'Arnaldo Robel',
      'Major Kulas',
      'Jeffery Cummerata',
      'Corporate Content',
    ];

    expect(result).toEqual(expected);
  });

  test('get all the unique values from a table column - data 3', () => {

    const result = getColumnUniqueValues(data3, 'name', {'name': 'TableColumnText' });
    const expected =  [
      'Level 1',
      'Level 2',
      'Support',
      'Level 4',
      'Level 3',
    ];

    expect(result).toEqual(expected);
  });

  test('get all the unique values from a table column - data 4', () => {

    const result = getColumnUniqueValues(data4, 'name', {'name': 'TableColumnText' });
    const expected =  [] as any;

    expect(result).toEqual(expected);
  });

  test('get all the unique values from a table deep column', () => {

    const result = getColumnUniqueValues(data1, 'teams', {'teams': 'TableColumnAgentTeamList' });
    const expected =  [
      'Accounting', 'Business',
      'Design',     'HR',
      'Sales',      'Finance',
      'Insurance',  'Marketing',
      'Support',    'IT',
      'Enrollment', 'Civil'
    ];

    expect(result).toEqual(expected);
  });

  test('return empty array if column name not found', () => {

    const result1 = getColumnUniqueValues(data1, 'randomnotfound', {'randomnotfound': 'TableColumnText' });
    const expected1 = [] as any[];

    expect(result1).toEqual(expected1);
  });

  test('return all values from comma separate lists', () => {

    const result1 = getColumnUniqueValues(data4, 'namescomma', {'namescomma': 'TableColumnTextCommaSep' });
    const expected1 = [
      'test1',
      'test2',
      'test3',
      'test4',
      'test5',
      'test6',
    ] as any[];

    expect(result1).toEqual(expected1);
  });

  test('return all values from comma separate lists', () => {

    const result1 = getColumnUniqueValues(data4, 'namescomma', {'namescomma': 'TableColumnTextCommaSep' });
    const expected1 = [
      'test1',
      'test2',
      'test3',
      'test4',
      'test5',
      'test6',
    ] as any[];

    expect(result1).toEqual(expected1);
  });

  test('return all unique names in TableColumnAgentTeamList type', () => {

    const result1 = getColumnUniqueValues(data1, 'teams', {'teams': 'TableColumnAgentTeamList' });
    const expected1 = [
      'Accounting',
      'Business',
      'Design',
      'HR',
      'Sales',
      'Finance',
      'Insurance',
      'Marketing',
      'Support',
      'IT',
      'Enrollment',
      'Civil',
    ] as any[];

    expect(result1).toEqual(expected1);
  });

  test('return all unique title in TableColumnTicketDepartmentList type', () => {

    const result1 = getColumnUniqueValues(
      data4,
      'departments', {
        'departments': 'TableColumnTicketDepartmentList'
      });
    const expected1 = [
      'department1',
      'department2',
      'department3',
      'department4',
    ] as any[];

    expect(result1).toEqual(expected1);
  });

  test('return yes, no values for TableColumnBoolYesNo', () => {

    const result1 = getColumnUniqueValues(
      data4,
      'departments', {
        'departments': 'TableColumnBoolYesNo'
      });
    const expected1 = [
      'Yes',
      'No',
    ] as any[];

    expect(result1).toEqual(expected1);
  });
});
