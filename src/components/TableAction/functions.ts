import {
  KeyValue,
  ITableSetup,
  ITableColumn,
  IMenuItemProps
} from '../../resources/interfaces';

import { IntlShape } from 'react-intl';

type GenerateResultType = {
  checkedState: KeyValue;
  columnsViewList: IMenuItemProps[];
};

type SortMenuItem = {
  link: string;
};

export const generatSortMenuItems = (tableDef: ITableSetup, intl: IntlShape): SortMenuItem[] => {

  if(!tableDef || !tableDef.columns) {
    return [];
  }

  const columnsViewList: SortMenuItem[] = tableDef.columns.map((column: ITableColumn, index: number) => {
    return {
      link:intl.formatMessage({id: column.title})
    };
  });

  return columnsViewList;
};

export const generateViewList = (tableDef: ITableSetup): GenerateResultType => {

  if(!tableDef || !tableDef.columns) {
    return {
      checkedState:{},
      columnsViewList:[]
    };
  }

  const checkedState: KeyValue = {};
  const columnsViewList: IMenuItemProps[] = tableDef.columns.map((column: ITableColumn, index: number) => {

    checkedState[String(index)] = true;

    return {
      key:index,
      name:column.title
    };
  });

  return {
    checkedState,
    columnsViewList
  };
};