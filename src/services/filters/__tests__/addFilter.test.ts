import {
  addFilter,
} from '../FilterService';
import { filterFactory } from '../FilterFactory';
import { FilterType } from '../types';

jest.mock('../FilterFactory');

const equals = (a:any, b:any) => a === b;

describe('addFilter', () => {
  test('adds a new filter to a filters object', () => {

    (filterFactory as jest.Mock).mockImplementation(() => ({
      id:'FirstName-EQUAL-1',
      property:'FirstName',
      operator:equals,
      value:['123']
    }
  ));

    const filters = [] as FilterType[];
    const property = 'FirstName';
    const operatorName = 'EQUAL';
    const compareValue = ['123'];

    const newFilters = addFilter(filters, property, operatorName, compareValue);

    expect(newFilters).toEqual([{
      id:'FirstName-EQUAL-1',
      property:'FirstName',
      operator:equals,
      value:['123']
    }]);
  });

  test('prevents duplicate ids of exisiting filters', () => {

    (filterFactory as jest.Mock).mockImplementation(() => ({
        id:'FirstName-EQUAL-2',
        property:'FirstName',
        operator:equals,
        value:['123']
      }
    ));

    const filters = [{
      id:'FirstName-EQUAL-1',
      property:'FirstName',
      operator:equals,
      value:['123']
    }] as FilterType[];
    const property = 'FirstName';
    const operatorName = 'EQUAL';
    const compareValue = ['123'];

    const newFilters = addFilter(filters, property, operatorName, compareValue);

    expect(newFilters).toEqual([{
      id:'FirstName-EQUAL-1',
      property:'FirstName',
      operator:equals,
      value:['123']
    }, {
      id:'FirstName-EQUAL-2',
      property:'FirstName',
      operator:equals,
      value:['123']
    }]);
  });
});
