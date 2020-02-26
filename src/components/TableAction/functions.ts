import {
  ITableSetup,
  ITableColumn,
  IMenuItemProps
} from '../../resources/interfaces';
import { FilterMeta } from '../../resources/interfaces/filterMeta';

import { KeyValue } from '../../types';

import { IntlShape } from 'react-intl';

type GenerateResultType = {
  checkedState: KeyValue;
  columnsViewList: IMenuItemProps[];
};

type SortMenuItem = {
  link: string;
};

export const generatSortMenuItems = (
  tableDef: ITableSetup,
  intl: IntlShape
): SortMenuItem[] => {
  if (!tableDef || !tableDef.columns) {
    return [];
  }

  const columnsViewList: SortMenuItem[] = tableDef.columns.map(
    (column: ITableColumn, index: number) => {
      return {
        label: intl.formatMessage({ id: column.title }),
        link: column.title
      };
    }
  );

  return columnsViewList;
};

export const generateGroupMenuItems = (options: {
  tableDef: ITableSetup;
  intl: IntlShape;
  sortMenuItems: any;
}) => {
  const { sortMenuItems, tableDef: { columns }, intl } = options;
  const groupItem: any = columns
    .filter(({ groupable }: any) => groupable)
    .map(({ title: column }: any) => ({ column, name: intl.formatMessage({ id: column }) }));

  groupItem.push({});
  groupItem.push({
    name: 'Sort group',
    subItems: sortMenuItems.map((item: any) => ({
      sortable: true,
      name: item.label,
      column: item.link
    }))
  });

  return groupItem;
};

export const generateViewList = (tableDef: ITableSetup): GenerateResultType => {
  if (!tableDef || !tableDef.columns) {
    return {
      checkedState: {},
      columnsViewList: []
    };
  }

  let hasIdColumn = false;
  const checkedState: KeyValue = {};
  const columnsViewList: IMenuItemProps[] = tableDef.columns
    .filter((column: ITableColumn) => {
      if (column.field.__typename === 'TableColumnId') {
        hasIdColumn = true;
        return false;
      }
      return true;
    })
    .map((column: ITableColumn, index: number) => {
      checkedState[String(index)] = column.defaultShow;

      return {
        key: index,
        name: column.title,
        sortable: true
      };
    });

  if (hasIdColumn) {
    checkedState[String(columnsViewList.length)] = true;
    columnsViewList.push({
      key: columnsViewList.length,
      name: 'admin_common.col.id',
      sortable: false
    });
  }

  return {
    checkedState,
    columnsViewList
  };
};

export const generatFilterOptions = (
  filterDef: FilterMeta[],
  intl: IntlShape
): FilterMeta[] => {
  if (!filterDef) {
    return [];
  }

  const filterOptions: FilterMeta[] = filterDef.map(
    (option: FilterMeta, index: number) => {
      option.title = intl.formatMessage({ id: option.title });
      return option;
    }
  );

  return filterOptions;
};
