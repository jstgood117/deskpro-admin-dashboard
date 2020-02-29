import {
  KeyValue,
} from '../types';

import {
  API_TableColumnDef
} from '../codegen/types';

export const buildColumnPropToTypeDictionary = (
  columnDefs: API_TableColumnDef[]
) => {
  const dictionary: KeyValue = {};

  columnDefs.forEach((col: API_TableColumnDef) => {

    const fieldData = col.field;
    switch (fieldData.__typename) {
      case 'TableColumnNameAvatar':
        dictionary[fieldData.name.dataPath] = fieldData.__typename;
        break;
      case 'TableColumnId':
      case 'TableColumnTimeAgo':
      case 'TableColumnText':
      case 'TableColumnInteger':
      case 'TableColumnDateTime':
      case 'TableColumnBoolYesNo':
        dictionary[fieldData.value.dataPath] = fieldData.__typename;
        break;
      case 'TableColumnTextCommaSep':
      case 'TableColumnTicketDepartmentList':
      case 'TableColumnAgentGroupList':
      case 'TableColumnAgentTeamList':
        dictionary[fieldData.valuesArray.dataPath] = fieldData.__typename;
        break;
      default:
        dictionary['__unknown__'] = fieldData.__typename;
    }
  });

  return dictionary;
};