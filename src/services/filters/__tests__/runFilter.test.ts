import {
  runFilter
} from '../FilterService';
import { FilterType } from '../FilterFactory';

const includesOperator = jest.fn((a:string, b:string) => a.includes(b));

const data = [{
  FirstName:'John',
  LastName:'Doe'
},{
  FirstName:'Jane',
  LastName:'Doe'
}];

describe('Run filter', () => {
  test('Runs filter and calls operator on the data', () => {
    const filter = {
      id:'FirstName-equals',
      columnName:'FirstName',
      operator:includesOperator,
      value:'John'
    } as FilterType;

    const newData = runFilter(data, filter);

    expect(includesOperator).toHaveBeenCalledTimes(2);
    expect(newData).toEqual([{
      FirstName:'John',
      LastName:'Doe'
    }]);
  });
});