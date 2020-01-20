import { generateViewList } from '../functions';
import { ITableSetup } from '../../../resources/interfaces';

describe('generateViewList', () => {
  const tableDef: ITableSetup = {
    columns: [
      {
        title: 'admin_common.col.id',
        sortField: 'id',
        defaultShow: true,
        field: {
          __typename: 'TableColumnId',
          value: {
            dataPath: 'id',
            staticJson: null,
            staticValue: null,
            __typename: 'TablePayloadValue'
          }
        }
      },
      {
        title: 'admin_common.col.agents',
        sortField: 'members',
        defaultShow: true,
        field: {
          __typename: 'TableColumnAgentList',
          valuesArray: {
            ataPath: 'members',
            staticJson: null,
            staticValue: null,
            __typename: 'TablePayloadValue'
          }
        }
      }
    ]
  };

  test('returns {sortable: false} for ID column', () => {
    const result = generateViewList(tableDef);
    expect(result.columnsViewList[1].sortable).toBe(false);
  });
});
