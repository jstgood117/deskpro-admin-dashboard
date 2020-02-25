import { IntlShape } from 'react-intl';
import { customSortMethod } from './../../../utils/sort';
import _ from 'lodash';
import { KeyValue, ColumnOrder } from '../../../types';

import { UserType } from '../../Card/KanbanViewCard/KanbanViewCard';
import { objectUseState, TableParams, TableType, SortType, ColumnMeta } from '../types';
import { orderByFn } from './orderFn';
import { ITableColumn } from '../../../resources/interfaces';

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
        } else if (_.difference(group, selected).length < group.length) {
          newIds = {
            ...newIds,
            [groupId]: 'indeterminate'
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

export const getSortDefault = (
  path?: string
) => {
  let sortBy: any[] = [];
  switch (path) {
    case '/tickets/forms':
      sortBy = [
        {
          id: 'admin_common.col.name',
          desc: true,
        }
      ];
  }

  return sortBy;
};

export const generateTableParams = (
  tableType: TableType,
  columns: any[],
  data: KeyValue[],
  controlledPageCount: number,
  path?: string
): TableParams => {
  return tableType === 'async'
    ? {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: 100,
        sortBy: getSortDefault(path)
      },
      manualPagination: true,
      pageCount: controlledPageCount
    }
    : {
      columns,
      data,
      orderByFn,
      initialState: {
        pageIndex: 0,
        pageSize: 100,
        sortBy: getSortDefault(path)
      }
    };
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

export const compareSorts = (sort1: SortType[], sort2: SortType[]) => {
  let result = sort1.length === sort2.length;

  if (result) {
    sort1.forEach((item1, index) => {
      const item2 = sort2[index];
      result = result && item1.id === item2.id && !!item1.desc === !!item2.desc;
      return result;
    });
  }
  return result;
};

export const compareGroups = (group1: string[], group2: string[]) => {
  return (
    group1.length === group2.length && _.difference(group1, group2).length === 0
  );
};

const generateSortType = (sortType: string) => {
  if (!sortType) {
    return 'alphanumeric';
  }

  switch (sortType) {
    case 'ALPHANUMERIC':
      return 'alphanumeric';
    default:
      return customSortMethod;
  }
};

export const transformColumnData = (
  columns: ITableColumn[],
  columnOrder: ColumnOrder[],
  intl: IntlShape
) => {
  const newCols: ColumnMeta[] = [];
  columnOrder.forEach((_order: ColumnOrder) => {
    const column = columns.find(_col => _order.column === _col.title);
    if (column && _order.show) {
      newCols.push({
        columnProps: column.field,
        id: column.title,
        Header: intl.formatMessage({ id: column.title }),
        accessor: column.sortField || '',
        type: column.field,
        sortType: generateSortType(column.sortField)
      });
    }
  });

  return newCols;
};
