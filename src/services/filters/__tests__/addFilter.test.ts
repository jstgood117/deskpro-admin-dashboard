import {
  addFilter,
} from '../FilterService';
import { filterFactory, FilterType } from '../FilterFactory';
jest.mock('../FilterFactory');

const mockOperator = (a:any, b:any) => a === b;

(filterFactory as jest.Mock).mockImplementation(() => ({
    id:'FirstName-equals',
    columnName:'FirstName',
    operator:mockOperator,
    value:'123'
  }
));

describe('addFilter', () => {
  test('adds a new filter to a filters object', () => {
    const filters = [] as FilterType[];
    const columnName = 'FirstName';
    const operatorName = 'equals';
    const compareValue = '123';

    const newFilters = addFilter(filters, columnName, operatorName, compareValue);

    expect(newFilters).toEqual([{
      id:'FirstName-equals',
      columnName:'FirstName',
      operator:mockOperator,
      value:'123'
    }]);
  });
});