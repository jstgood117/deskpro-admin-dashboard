export type TableType = 'sync' | 'async';

export type TableParams = {
  columns: any[];
  data: any[];
  initialState: {
    pageIndex: number;
  };
  manualPagination?: boolean;
  pageCount?: number;
};

export type setCheckedType = React.Dispatch<React.SetStateAction<object>>;
