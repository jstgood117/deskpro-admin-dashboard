import {
  updateFilter,
} from '../FilterService';
import { FilterType } from '../types';

const equals = (a:string, b:string) => a === b;

describe('updateFilter', () => {
  test('updates filter in filters object', () => {
    const filters = [{
      id:'FirstName-EQUAL',
      columnName:'EQUAL',
      operator:equals,
      value:'123'
    }] as FilterType[];
    const id = 'FirstName-EQUAL';
    const operatorName = 'CONTAINS';
    const compareValue = 'abc';

    const newFilters = updateFilter(filters, id, operatorName, compareValue);

    expect(newFilters[0].id).toEqual('FirstName-CONTAINS-1');
    expect(newFilters[0].columnName).toEqual('FirstName');
    expect(newFilters[0].value).toEqual('abc');
  });
});