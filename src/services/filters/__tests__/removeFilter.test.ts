import {
  removeFilter
} from '../FilterService';
import { FilterType } from '../FilterFactory';

const mockOperator = (a:any, b:any) => a === b;

describe('Remove filter', () => {
  test('removes a filter from filters array based on `id`', () => {
    const filters = [{
      id:'FirstName-equals',
      columnName:'FirstName',
      operator:mockOperator,
      value:'123'
    }] as FilterType[];
    const id = 'FirstName-equals';

    const newFilters = removeFilter(id, filters);

    expect(newFilters).toEqual([]);
  });
});