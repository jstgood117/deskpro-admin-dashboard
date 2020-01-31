import _ from 'lodash';
import { KeyValue } from '../../../types';

import { UserType } from '../../Card/KanbanViewCard/KanbanViewCard';
import {
  objectUseState,
  TableParams,
  TableType,
  ColumnMeta,
  DefaultColumnType
} from '../types';

export const onCheckboxChange = (
  value: string,
  checked: object,
  setChecked: objectUseState,
  subRows: any[]
) => {
  const keys = Object.keys(checked);
  if (subRows.length > 0) {
    if (keys.includes(value)) {
      const ids: string[] = [];
      ids.push(value);
      subRows.map((_subRow: { id: any }) => {
        ids.push(_subRow.id);
        return true;
      });
      const newIds = keys
        .filter(_id => !ids.includes(_id))
        .reduce((_obj, _id) => Object.assign(_obj, { [_id]: true }), {});
      setChecked(newIds);
      return true;
    } else {
      const ids = [];
      ids.push({ [value]: true });
      subRows.map((_subRow: { id: any }) => {
        ids.push({ ...checked, ...{ [_subRow.id]: true } });
        return true;
      });
      setChecked(Object.assign({}, ...ids));
      return true;
    }
  } else {
    if (keys.includes(value)) {
      const newIds = keys
        .filter(_id => _id !== value)
        .reduce((_obj, _id) => Object.assign(_obj, { [_id]: true }), {});
      setChecked(newIds);
    } else {
      setChecked({
        ...checked,
        [value]: true
      });
    }
    return true;
  }
};

export const onSelectAllChange = (
  isChecked: boolean,
  setChecked: objectUseState,
  currentPage: number,
  pageSize: number,
  data: any[]
) => {
  if (!isChecked) {
    setChecked({});
    return true;
  } else {
    const startPos = Math.max(currentPage * pageSize, 0);
    const endPos = Math.min(startPos + pageSize, data.length);

    const showingRows = _.slice(data, startPos, endPos);
    const ids = showingRows.map((_row: KeyValue) => ({
      [_row.id]: true
    }));
    showingRows.map(row => {
      if (row.subRows.length > 0) {
        row.subRows.map((_row: KeyValue) =>
          ids.push({
            [_row.id]: true
          })
        );
      }
      return true;
    });
    setChecked(Object.assign({}, ...ids));
    return true;
  }
};

export const onSelectEverything = (data: any[], setChecked: objectUseState) => {
  const ids = data.map((_row: KeyValue) => ({
    [_row.id]: true
  }));
  data.map(row => {
    if (row.subRows.length > 0) {
      row.subRows.map((_row: KeyValue) =>
        ids.push({
          [_row.id]: true
        })
      );
    }
    return true;
  });
  setChecked(Object.assign({}, ...ids));
  return true;
};

export const generateTableParams = (
  tableType: TableType,
  columns: any[],
  data: KeyValue[],
  controlledPageCount: number,
  column?: DefaultColumnType
): TableParams => {
  const defaultColumn = column? column : {};
  return tableType === 'async'
    ? {
        columns,
        data,
        initialState: {
          pageIndex: 0,
          pageSize: 100
        },
        manualPagination: true,
        pageCount: controlledPageCount,
        defaultColumn
      }
    : {
        columns,
        data,
        initialState: {
          pageIndex: 0,
          pageSize: 100
        },
        defaultColumn
      };
};

export const getCSVCellFormatOnType = (
  columnProps: KeyValue,
  values: any
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
        temp[columnMeta.id] = getCSVCellFormatOnType(
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

export const generateCardProps = (row: any): UserType => {
  const { original } = row;
  return {
    userName: original.name,
    userNumber: original.phone,
    userMail: original.primary_email
    // avatar: original.avatarUrn
  };
};
