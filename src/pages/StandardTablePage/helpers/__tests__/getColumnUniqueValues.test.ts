import {
  getColumnUniqueValues
} from '../getColumnUniqueValues';

import { testTableData as data1 } from '../../../../fixtures/gql/StandardTablesPage/tableData1';
import { testTableData2 as data2 } from '../../../../fixtures/gql/StandardTablesPage/tableData2';
import { testTableData3 as data3 } from '../../../../fixtures/gql/StandardTablesPage/tableData3';
import { testTableData4 as data4 } from '../../../../fixtures/gql/StandardTablesPage/tableData4';

describe('getColumnUniqueValues', () => {

  test('get all the unique values from a table column - data 1', () => {

    const result = getColumnUniqueValues(data1, 'name');
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

    const result = getColumnUniqueValues(data2, 'name');
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

    const result = getColumnUniqueValues(data3, 'name');
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

    const result = getColumnUniqueValues(data4, 'name');
    const expected =  [] as any;

    expect(result).toEqual(expected);
  });

  test('get all the unique values from a table deep column', () => {

    const result = getColumnUniqueValues(data1, 'team');
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

  test('return empy array if column name not found', () => {

    const result1 = getColumnUniqueValues(data1, 'randomnotfound');
    const expected1 = [] as any[];

    expect(result1).toEqual(expected1);
  });
});
