import {
  runFilter
} from '../FilterService';
import { FilterType } from '../types';

const includesOperator = jest.fn((row:any, prop:string, value:string) => row[prop].includes(value));

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
      id:'FirstName-EQUAL',
      columnName:'FirstName',
      operatorName:'EQUAL',
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