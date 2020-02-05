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
    pageSize: number;
    sortBy?:SortType[];
  };
  orderByFn?: (...args: any[]) => any[];
  manualSortBy?: boolean;
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

export type objectUseState = React.Dispatch<React.SetStateAction<object>>;
export type booleanUseState = React.Dispatch<React.SetStateAction<boolean>>;
export type anyUseState = React.Dispatch<any>;

export interface IPageChange {
  currentPage: number;
  totalPages: number;
  start: number;
  end: number;
}
