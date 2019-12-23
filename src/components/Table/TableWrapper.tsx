import React, { FC, Fragment } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';

import { ITableSetup, ITableColumn } from '../../resources/interfaces';
import { ColumnOrder } from '../../types';
import { customSortMethod } from '../../utils/sort';
import Table from './Table';
import { SortType } from './types';

interface IProps {
  path: string; // TODO: Remove when db
  dataType: string;
  fetchData: () => void;
  totalPageCount: number;
  data:any[];
  dataQuery: string;
  loading: boolean;
  tableDef: ITableSetup;
  columnOrder: ColumnOrder[];
  sortBy?: SortType[];
}

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

const transformColumnData = (
  columns: ITableColumn[],
  columnOrder: ColumnOrder[],
  intl: any
) => {
  const newCols: any[] = [];
  columnOrder.forEach((_order: ColumnOrder) => {
    const column = columns.find(_col => _order.column === _col.title);
    if (_order.show) {
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

const TableWrapper: FC<ITableSetup & IProps & WrappedComponentProps> = ({
  intl,
  path,
  data,
  loading,
  fetchData,
  totalPageCount,
  tableDef,
  dataType,
  columnOrder,
  sortBy
}) => {
  return (
    <Fragment>
      {dataType === 'sync' && (
        <Table
          path={path}
          data={data}
          columns={transformColumnData(
            [...tableDef.columns],
            columnOrder,
            intl
          )}
          tableType='sync'
          sortBy={sortBy}
        />
      )}
      {dataType === 'async' && (
        <Table
          path={path}
          data={data}
          columns={transformColumnData(
            [...tableDef.columns],
            columnOrder,
            intl
          )}
          fetchData={fetchData}
          loading={loading}
          pageCount={totalPageCount}
          tableType='async'
          sortBy={sortBy}
        />
      )}
    </Fragment>
  );
};

export default injectIntl(TableWrapper);
