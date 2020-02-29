import {
  KeyValue,
} from '../../../types';

export const getColumnUniqueValues = (
  tableData: KeyValue[],
  columnProp: string,
  dictionary: KeyValue
): string[] => {

  const focusValues: string[] = [];
  tableData.forEach((row: KeyValue) => {

    switch(dictionary[columnProp]) {

      case 'TableColumnNameAvatar':
      case 'TableColumnId':
      case 'TableColumnTimeAgo':
      case 'TableColumnText':
      case 'TableColumnInteger':
      case 'TableColumnDateTime':
        if (row[columnProp]) {
          focusValues.push(row[columnProp]);
        }
        break;
      case 'TableColumnTextCommaSep':
        row[columnProp].split(',').forEach((_val: string) => {
          focusValues.push(_val);
        });
        break;
      case 'TableColumnTicketDepartmentList':
      case 'TableColumnAgentGroupList':
        const _listValues1 = row[columnProp];
        _listValues1.map((_val: KeyValue) => focusValues.push(_val.title));
        break;
      case 'TableColumnAgentTeamList':
        const _listValues2 = row[columnProp];
        _listValues2.map((_val: KeyValue) => focusValues.push(_val.name));
        break;
      case 'TableColumnBoolYesNo':
          focusValues.push('Yes');
          focusValues.push('No');
          break;
      default:
        console.error(`Unable to find dataPath: ${columnProp} in unique values dictionary`);
    }
  });

  return [...new Set(focusValues)];
};
