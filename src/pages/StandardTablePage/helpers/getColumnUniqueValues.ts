import {
  KeyValue
} from '../../../types';

export const getColumnUniqueValues = (tableData:KeyValue[], columnProp:string): string[] => {

  const focusValues: string[] = [];
  tableData.forEach((row:KeyValue) => {
    if(typeof row[columnProp] === 'string') {
      focusValues.push(row[columnProp]);
    }
  });

  return [...new Set(focusValues)];
};
