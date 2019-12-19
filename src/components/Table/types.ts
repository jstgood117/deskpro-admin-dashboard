export type TableType = 'sync' | 'async';
export type SortType = {
  id: string;
  desc: boolean;
};
export type TableParams = {
  columns: any[];
  data: any[];
  initialState: {
    pageIndex: number;
    sortBy?:SortType[];
  };
  manualPagination?: boolean;
  pageCount?: number;
  autoResetSortBy?: boolean;
  defaultCanSort?:boolean;
};

export type setCheckedType = React.Dispatch<React.SetStateAction<object>>;