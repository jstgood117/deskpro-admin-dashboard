import {
  processFiltersToFilterTypes
} from '../processFiltersToFilterTypes';

import {
  operators
} from '../../../../services/filters/operators';

describe('processFiltersToFilterTypes', () => {
  test('processes FilterOption return value format to FilterService format', () => {
    const params = [{
      'property':'name',
      'operatorName':'CONTAINS',
      'value':['jo'],
      'applied':true
    },{
      'property':'primary_email',
      'operatorName':'CONTAINS',
      'value':['testing'],
      'applied':true
    }];

    const results = processFiltersToFilterTypes(params);
    expect(results).toEqual([
      {
        id: 'name-CONTAINS-1',
        property: 'name',
        operatorName: 'CONTAINS',
        operator: operators.CONTAINS,
        value: ['jo']
      },
      {
        id: 'primary_email-CONTAINS-1',
        property: 'primary_email',
        operatorName: 'CONTAINS',
        operator: operators.CONTAINS,
        value: ['testing']
      }
    ]);
  });
  test('processes FilterOption return value format to FilterService format', () => {
    const params = [{
      'property':'name',
      'operatorName':'CONTAINS',
      'value':['jo'],
      'applied':true
    },{
      'property':'primary_email',
      'operatorName':'CONTAINS',
      'value':['testing'],
      'applied':true
    }];

    const results = processFiltersToFilterTypes(params);
    expect(results).toEqual([
      {
        id: 'name-CONTAINS-1',
        property: 'name',
        operatorName: 'CONTAINS',
        operator: operators.CONTAINS,
        value: ['jo']
      },
      {
        id: 'primary_email-CONTAINS-1',
        property: 'primary_email',
        operatorName: 'CONTAINS',
        operator: operators.CONTAINS,
        value: ['testing']
      }
    ]);
  });test('skips filter if property or operactorName is not set', () => {
    const params = [{
      'property':'',
      'operatorName':'CONTAINS',
      'value':['jo'],
      'applied':true
    },{
      'property':'primary_email',
      'operatorName':'',
      'value':['testing'],
      'applied':true
    }];

    const results = processFiltersToFilterTypes(params);
    expect(results).toEqual([]);
  });
});