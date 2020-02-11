import _ from 'lodash';
import { KeyValue } from '../../../types';

import { UserType } from '../../Card/KanbanViewCard/KanbanViewCard';
import { objectUseState, TableParams, TableType } from '../types';
import { orderByFn } from './orderFn';

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
        [value]: true,
      };
    }
    if (isGrouped) {
      selected = Object.keys(newIds);
      groupedRows = groupedRows.reduce(
        (o: any, group: any) => ({
          ...o,
          [group.id]: group.subRows.map((r: any) => r.original.id),
        }),
        {}
      );
      Object.keys(groupedRows).forEach((groupId: string) => {
        const group = groupedRows[groupId];
        if (_.difference(group, selected).length === 0) {
          newIds = {
            ...newIds,
            [groupId]: true,
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
          pageSize: 100,
        },
        manualPagination: true,
        pageCount: controlledPageCount,
      }
    : {
        columns,
        data,
        orderByFn,
        initialState: {
          pageIndex: 0,
          pageSize: 100,
        },
      };
};

export const generateCardProps = (row: any): UserType => {
  const { original } = row;
  return {
    userName: original.name,
    userNumber: original.phone,
    userMail: original.primary_email,
    // avatar: original.avatarUrn
  };
};

