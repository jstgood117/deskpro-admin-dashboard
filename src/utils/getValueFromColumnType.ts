import { KeyValue } from '../types';

export const getValueFromColumnType = (
  columnProps: KeyValue,
  values: KeyValue = {},
): string => {

  let _values: KeyValue[];

  switch (columnProps.__typename) {
    case 'TableColumnNameAvatar':
      return values[columnProps.name.dataPath];
    case 'TableColumnId':
    case 'TableColumnTimeAgo':
    case 'TableColumnText':
    case 'TableColumnInteger':
    case 'TableColumnDateTime':
      return values[columnProps.value.dataPath];
    case 'TableColumnTextCommaSep':
      return values[columnProps.valuesArray.dataPath].join(', ');
    case 'TableColumnTicketDepartmentList':
    case 'TableColumnAgentGroupList':
      _values = values[columnProps.valuesArray.dataPath];
      return _values ? _values.map((_val: KeyValue) => _val.title).join(', ') : '';
    case 'TableColumnAgentTeamList':
      _values = values[columnProps.valuesArray.dataPath];
      return _values ? _values.map((_val: KeyValue) => _val.name).join(', ') : '';
    case 'TableColumnBoolYesNo':
      if (values.hasOwnProperty(columnProps.value.dataPath)) {
        return values[columnProps.value.dataPath] === true ? 'Yes' : 'No';
      }
      return '';
    default:
      return '';
  }
};
