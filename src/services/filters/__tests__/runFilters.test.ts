import {
  runFilters
} from '../FilterService';
import { FilterType } from '../types';

const data = [{
  FirstName:'John',
  LastName:'Doe'
},{
  FirstName:'Jane',
  LastName:'Doe'
}];

describe('Run filters', () => {
  test('Runs all the filters in the passed to the function', () => {

    const mockOperator1 = jest.fn(() => true);
    const mockOperator2 = jest.fn(() => true);

    const filters = [{
      id:'FirstName-EQUAL',
      property:'FirstName',
      operator:mockOperator1,
      value:'John'
    }, {
      id:'LastName-EQUAL',
      property:'LastName',
      operator:mockOperator2,
      value:'Doe'
    }] as FilterType[];

    runFilters(data, filters);

    expect(mockOperator1).toHaveBeenCalledTimes(2);
    expect(mockOperator2).toHaveBeenCalledTimes(2);
  });
});