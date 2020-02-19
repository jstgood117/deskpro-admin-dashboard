import { KeyValue } from '../types';

export const getValueFromColumnType = (
  columnProps: KeyValue,
  values: any = {}
): string => {
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
    case 'TableColumnAgentTeamList':
      return (
        values[columnProps.valuesArray.dataPath] &&
        values[columnProps.valuesArray.dataPath]
          .map((item: any) => item.title)
          .join(', ')
      );
    case 'TableColumnBoolYesNo':
      if (values.hasOwnProperty(columnProps.value.dataPath)) {
        return values[columnProps.value.dataPath] === true ? 'Yes' : 'No';
      }
      return '';
    default:
      return '';
  }
};