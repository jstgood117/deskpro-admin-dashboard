import {
  addFilter,
} from '../FilterService';
import { filterFactory } from '../FilterFactory';
import { FilterType } from '../types';

jest.mock('../FilterFactory');

const equals = (a:any, b:any) => a === b;

(filterFactory as jest.Mock).mockImplementation(() => ({
    id:'FirstName-EQUAL',
    property:'FirstName',
    operator:equals,
    value:'123'
  }
));

describe('addFilter', () => {
  test('adds a new filter to a filters object', () => {
    const filters = [] as FilterType[];
    const property = 'FirstName';
    const operatorName = 'EQUAL';
    const compareValue = ['123'];

    const newFilters = addFilter(filters, property, operatorName, compareValue);

    expect(newFilters).toEqual([{
      id:'FirstName-EQUAL',
      property:'FirstName',
      operator:equals,
      value:['123']
    }]);
  });
});