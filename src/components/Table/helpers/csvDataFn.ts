import { KeyValue } from '../../../types';
import { getValueFromColumnType } from '../../../utils/getValueFromColumnType';
import { ColumnMeta } from '../types';

export const generateCSVData = (
  table: KeyValue[],
  columnsMeta: ColumnMeta[]
) => {
  const csvData: KeyValue[] = [];

  // The table values have already been reduced to
  // the amount of columns shown in the UI. We just
  // need to extract the data in from the column in
  // the correct way.
  if (table && table.length > 0) {
    table.map((row: KeyValue) => {
      const temp = Object.assign({}, row.values);
      columnsMeta.map((columnMeta: ColumnMeta) => {
        temp[columnMeta.id] = getValueFromColumnType(
          columnMeta.columnProps,
          row.original
        );
        return true;
      });
      csvData.push(temp);
      return true;
    });
  }

  return csvData;
};