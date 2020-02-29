import {
  buildColumnPropToTypeDictionary
} from '../buildColumnPropToTypeDictionary';

import {
  API_TableColumnDef
} from '../../codegen/types';

describe('buildColumnPropToTypeDictionary', () => {

  test('generates correct data based on columnDefs', () => {
    const columnDefs: API_TableColumnDef[] = [{
      title: 'test1',
      field: {
        __typename: 'TableColumnNameAvatar',
        name: {
          dataPath:'name1'
        },
        avatar: {
          dataPath:'avatar1'
        }
      }
    }, {
      title: 'test2',
      field: {
        __typename: 'TableColumnId',
        value: {
          dataPath:'value1'
        }
      }
    }, {
      title: 'test3',
      field: {
        __typename: 'TableColumnTextCommaSep',
        valuesArray: {
          dataPath:'valuesArray1'
        }
      }
    }];


    const result = buildColumnPropToTypeDictionary(columnDefs);

    expect(result).toEqual({
      name1: 'TableColumnNameAvatar',
      value1: 'TableColumnId',
      valuesArray1: 'TableColumnTextCommaSep'
    });
  });

});