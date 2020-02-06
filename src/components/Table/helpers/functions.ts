import _ from 'lodash';
import { KeyValue } from '../../../types';

import { UserType } from '../../Card/KanbanViewCard/KanbanViewCard';
import { objectUseState, TableParams, TableType, ColumnMeta } from '../types';

export const onCheckboxChange = (
  value: string,
  checked: object,
  setChecked: objectUseState,
  subRows: any[],
  options: any = {}
) => {
  let selected: any[] = [];
  let { groupedRows } = options;
  const isGrouped = !!options.isGrouped;
  const keys = Object.keys(checked);
  if (subRows.length > 0) {
    if (keys.includes(value)) {
      const ids: string[] = [];
      ids.push(value);
      subRows.map((_subRow: any) => {
        const id = (_subRow.original && _subRow.original.id) || _subRow.id;
        ids.push(id);
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
      subRows.map((_subRow: any) => {
        const id = (_subRow.original && _subRow.original.id) || _subRow.id;
        ids.push({ ...checked, ...{ [id]: true } });
        return true;
      });
      setChecked(Object.assign({}, ...ids));
      return true;
    }
  } else {
    let newIds: KeyValue = {};
    if (keys.includes(value)) {
      newIds = keys
        .filter(_id => _id !== value)
        .reduce((_obj, _id) => Object.assign(_obj, { [_id]: true }), {});
    } else {
      newIds = {
        ...checked,
        [value]: true
      };
    }
    if (isGrouped) {
      selected = Object.keys(newIds);
      groupedRows = groupedRows.reduce(
        (o: any, group: any) => ({
          ...o,
          [group.id]: group.subRows.map((r: any) => r.original.id)
        }),
        {}
      );
      Object.keys(groupedRows).forEach((groupId: string) => {
        const group = groupedRows[groupId];
        if (_.difference(group, selected).length === 0) {
          newIds = {
            ...newIds,
            [groupId]: true
          };
        } else {
          delete newIds[groupId];
        }
      });
    }
    setChecked(newIds);
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
    const ids = getIdsFromData(showingRows);
    setChecked(Object.assign({}, ...ids));
    return true;
  }
};

export const onSelectEverything = (data: any[], setChecked: objectUseState) => {
  const ids = getIdsFromData(data);
  setChecked(Object.assign({}, ...ids));
  return true;
};

export const generateTableParams = (
  tableType: TableType,
  columns: any[],
  data: KeyValue[],
  controlledPageCount: number
): TableParams => {
  return tableType === 'async'
    ? {
        columns,
        data,
        initialState: {
          pageIndex: 0,
          pageSize: 100
        },
        manualPagination: true,
        pageCount: controlledPageCount
      }
    : {
        columns,
        data,
        initialState: {
          pageIndex: 0,
          pageSize: 100
        }
      };
};

export const getCSVCellFormatOnType = (
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

export const getIdsFromData = (data: any) => {
  const ids = data.map((_row: KeyValue) => {
    const id = (_row.original && _row.original.id) || _row.id;
    return {
      [id]: true
    };
  });
  data.forEach((row: KeyValue) => {
    if (row.subRows.length > 0) {
      row.subRows.forEach((_row: KeyValue) => {
        const id = (_row.original && _row.original.id) || _row.id;
        ids.push({
          [id]: true
        });
      });
    }
  });
  return ids;
};

const getElementStyle = (el: HTMLElement) => {
  return window ? window.getComputedStyle(el) : {};
};

export const resizableTable = () => {
  const divs = document.getElementsByClassName('resizer');
  if (!divs.length) return;

  for (const div of divs) {
    setListeners(div);
  }
};

export function getLargestPadding(colIndex: number) {
  const colTds = document.getElementsByClassName(`td-${colIndex}`);

  let largestPadding = 0;
  for (const tdEl of colTds) {

    const currentStyle: any = getElementStyle(tdEl as HTMLElement);
    if( currentStyle &&
        currentStyle.hasOwnProperty('padding-left') &&
        currentStyle.hasOwnProperty('padding-right')
      ) {

      largestPadding = Math.max(
        parseInt(currentStyle['padding-left'], 10) + parseInt(currentStyle['padding-right'], 10),
        largestPadding
      );
    }
  }

  return largestPadding;
}

function setListeners(div: any) {
  let pageX: number;
  let curCol: any;
  let nxtCol: any;
  let curColWidth: number;
  let nxtColWidth: number;
  let curColIndex: number;
  let largestPadding: any;
  div.addEventListener('mousedown', (e: any) => {
    curCol = e.target.parentElement;
    nxtCol = curCol.nextElementSibling;
    curColIndex = curCol.getAttribute('data-colindex');
    largestPadding = getLargestPadding(curColIndex);
    pageX = e.pageX;
    curColWidth = curCol.offsetWidth;
    if (nxtCol) nxtColWidth = nxtCol.offsetWidth;
  });

  div.addEventListener('dblclick', (e: any) => {
    curCol = e.target.parentElement;
    resetColWidth(curCol);
  });

  document.addEventListener('mousemove', (e: any) => {

    if (curCol) {

      const diffX = e.pageX - pageX;

      if (nxtCol) nxtCol.style.minWidth = nxtColWidth - diffX + largestPadding + 'px';

      curCol.style.minWidth = curColWidth + diffX - largestPadding + 'px';

      setTdsWidth(curColIndex, curColWidth + diffX - largestPadding);
    }
  });

  document.addEventListener('mouseup', (e: any) => {
    curCol = undefined;
    nxtCol = undefined;
    pageX = undefined;
    nxtColWidth = undefined;
    curColWidth = undefined;
    largestPadding = undefined;
  });
}

export function setTdsWidth(colIndex: number, width: number) {
  const colTds = document.getElementsByClassName(`td-${colIndex}`);

  for (const tdEl of colTds) {

    (tdEl as HTMLElement).style.minWidth = width + 'px';
  }
}

export function resetColWidth(el: any) {
  const curColIndex = el.getAttribute('data-colindex');
  el.style.minWidth = '1px';
  setTdsWidth(curColIndex, 1);
}
