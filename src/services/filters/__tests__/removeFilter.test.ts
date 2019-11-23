import {
  removeFilter
} from '../FilterService';
import { FilterType } from '../types';

const mockOperator = (a:any, b:any) => a === b;

describe('Remove filter', () => {
  test('removes a filter from filters array based on `id`', () => {
    const filters = [{
      id:'FirstName-EQUAL',
      property:'FirstName',
      operator:mockOperator,
      value:'123'
    }] as FilterType[];
    const id = 'FirstName-EQUAL';

    const newFilters = removeFilter(filters, id);

    expect(newFilters).toEqual([]);
  });
});