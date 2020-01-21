import React, { FC, Fragment } from 'react';
import { injectIntl, WrappedComponentProps, IntlShape } from 'react-intl';

import { ITableSetup, ITableColumn } from '../../resources/interfaces';
import { KeyValue, ColumnOrder } from '../../types';
import { customSortMethod } from '../../utils/sort';
import Table from './Table';
import Card from './Card';
import { SortType, ColumnMeta } from './types';

interface IProps {
  view: 'table' | 'list' | 'card';
  path: string;
  dataType: 'sync' | 'async';
  fetchData: () => void;
  totalPageCount: number;
  data:KeyValue[];
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
  intl: IntlShape
) => {
  const newCols: ColumnMeta[] = [];
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
  sortBy,
  view
}) => {
  return (
    <Fragment>
      {view === 'table' && (
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
          tableType={dataType}
          sortBy={sortBy}
        />
        )
      }
      {
        view === 'card' && (
          <Card
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
            tableType={dataType}
            sortBy={sortBy}
          />
        )
      }
    </Fragment>
  );
};

export default injectIntl(TableWrapper);
