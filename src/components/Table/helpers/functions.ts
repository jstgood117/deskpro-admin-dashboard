import _ from 'lodash';
import { IMenuItemProps } from '../../../resources/interfaces';
import { KeyValue } from '../../../types';
import { ActionsType } from '../../../services/actions/types';
import {
  objectUseState,
  TableParams,
  TableType,
  ColumnMeta
} from '../types';

export const onCheckboxChange = (
  value: string,
  checked: object,
  setChecked: objectUseState
) => {
  const keys = Object.keys(checked);

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
};

export const onSelectAllChange = (
  isChecked: boolean,
  setChecked: objectUseState,
  currentPage: number,
  pageSize: number,
  data: object[]
) => {
  if (!isChecked) {
    setChecked({});
  } else {
    const startPos = Math.max(currentPage * pageSize, 0);
    const endPos = Math.min(startPos + pageSize, data.length);

    const showingRows = _.slice(data, startPos, endPos);
    const ids = showingRows.map((_row: KeyValue) => ({
      [_row.id]: true
    }));
    setChecked(Object.assign({}, ...ids));
  }
};

export const onSelectEverything = (
  data: object[],
  setChecked: objectUseState
) => {
  const ids = data.map((_row: KeyValue) => ({
    [_row.id]: true
  }));
  setChecked(Object.assign({}, ...ids));
};

export const generateTableParams = (
  tableType: TableType,
  columns: any[],
  data: KeyValue[],
  controlledPageCount: number,
): TableParams => {
  return tableType === 'async'
    ? {
        columns,
        data,
        initialState: {
          pageIndex: 0
        },
        manualPagination: true,
        pageCount: controlledPageCount,
      }
    : {
        columns,
        data,
        initialState: {
          pageIndex: 0,
        }
      };
};

const generateMenuItem = (item: ActionsType) => {
  switch (item.type) {
    case 'action':
      return {
        name: item.title,
        ...(item.icon && { icon: item.icon })
      };
    case 'separator':
      return {};
    case 'folder':
      return {
        name: item.title,
        icon: item.icon,
        subItems: convertActionsToMenuFormat(item.actions)
      };
  }
};

export const convertActionsToMenuFormat = (
  actions: ActionsType[]
): IMenuItemProps[] => {
  if (!actions) {
    return [];
  }

  return actions.map(_item => generateMenuItem(_item));
};

export const generateCSVData = (table: KeyValue[], columnsMeta: ColumnMeta[]) => {
  const csvData: KeyValue[] = [];

  if (table && table.length > 0) {
    table.map((row: KeyValue) => {
      const temp = Object.assign({}, row.values);
      columnsMeta.map((columnMeta: ColumnMeta) => {
        if (Array.isArray(temp[columnMeta.id])) {
          temp[columnMeta.id] =
            temp[columnMeta.id] &&
            temp[columnMeta.id].length > 0 &&
            temp[columnMeta.id].map((meta: any) => {
              if (typeof meta === 'string') {
                return meta;
              }
              return meta.name ? meta.name : meta.title;
            });
        }
        return true;
      });

      csvData.push(temp);
      return true;
    });
  }

  return csvData;
};
