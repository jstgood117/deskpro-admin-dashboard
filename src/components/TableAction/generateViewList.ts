import {
  KeyValue,
  ITableSetup,
  ITableColumn,
  IMenuItemProps
} from '../../resources/interfaces';

type GenerateResultType = {
  checkedState: KeyValue;
  columnsViewList: IMenuItemProps[];
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