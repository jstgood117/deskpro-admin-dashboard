import { KeyValue } from '../../types';
export type TableType = 'sync' | 'async';
export type SortType = {
  id: string;
  desc: boolean;
};
export type TableParams = {
  columns: any[];
  data: KeyValue[];
  initialState: {
    pageIndex: number;
    sortBy?:SortType[];
  };
  manualPagination?: boolean;
  pageCount?: number;
  autoResetSortBy?: boolean;
  defaultCanSort?:boolean;
};

export type CustomSortFn = (a:any, b:any, col:string) => number;

export type ColumnMeta = {
  columnProps: KeyValue;
  id: string;
  Header: string;
  accessor: string;
  type: string;
  sortType: string | CustomSortFn;
};

export type HeaderGroup = {
  headers: KeyValue[];
  getHeaderGroupProps: (userProps?: any) => void;
  getFooterGroupProps: (userProps?: any) => void;
};

export type setCheckedType = React.Dispatch<React.SetStateAction<object>>;