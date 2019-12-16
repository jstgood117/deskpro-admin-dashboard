import _ from 'lodash';
import { IMenuItemProps } from '../../../resources/interfaces';
import { ActionsType } from '../../../services/actions/types';
import { setCheckedType, TableParams, TableType } from '../types';

export const onCheckboxChange = (
  value: string,
  checked: object,
  setChecked: setCheckedType
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
  setChecked: setCheckedType,
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
    const ids = showingRows.map((_row: any) => ({
      [_row.id]: true
    }));
    setChecked(Object.assign({}, ...ids));
  }
};

export const onSelectEverything = (
  data: object[],
  setChecked: setCheckedType
) => {
  const ids = data.map((_row: any) => ({
    [_row.id]: true
  }));
  setChecked(Object.assign({}, ...ids));
};

export const generateTableParams = (
  tableType: TableType,
  columns: any[],
  data: any[],
  controlledPageCount: number
): TableParams => {
  return tableType === 'async'
    ? {
        columns,
        data,
        initialState: { pageIndex: 0 },
        manualPagination: true,
        pageCount: controlledPageCount
      }
    : {
        columns,
        data,
        initialState: { pageIndex: 0 }
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

export const generateCSVData = (table: any, columnsMeta: any) => {
  const csvData: any[] = [];

  if (table && table.length > 0) {
    table.map((row: any) => {
      const temp = Object.assign({}, row.values);
      columnsMeta.map((columnMeta: any) => {
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
