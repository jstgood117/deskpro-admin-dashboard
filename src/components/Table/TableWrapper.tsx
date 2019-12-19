import React, { useEffect, FC, useCallback, useState, Fragment } from 'react';
import { withApollo } from 'react-apollo';
import { gql, ApolloClient } from 'apollo-boost';
import { injectIntl, WrappedComponentProps } from 'react-intl';

import { runFilters } from '../../services/filters';
import { FilterType } from '../../services/filters/types';
import { ITableSetup, ColumnOrder } from '../../resources/interfaces';
import { logError } from '../Error/ErrorBoundary';
import { ITableColumn } from '../../resources/interfaces';
import { customSortMethod } from '../../utils/sort';
import Table from './Table';
import { SortType } from './types';

interface IProps {
  path: string; // TODO: Remove when db
  client: ApolloClient<any>;
  dataType: string;
  dataQuery: string;
  tableDef: ITableSetup;
  columnOrder: ColumnOrder[];
  filters?: FilterType[];
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
  client,
  dataQuery,
  tableDef,
  filters,
  dataType,
  columnOrder,
  sortBy
}) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPageCount, setTotalPageCount] = useState(1);
  const [pageSize] = useState<number>(10);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await client.query({
        query: gql`
          ${dataQuery}
        `,
        errorPolicy: 'all'
      });
      const { results } = response.data;

      setData(results);
      setFilteredData(results);

      setTotalPageCount(Math.ceil(results.length / pageSize));
      setLoading(false);
    } catch (err) {
      console.debug('sError for query: ' + dataQuery);
      console.error(err);
      logError(err);
      setLoading(false);
    }
  };

  const fetchData = useCallback(() => {
    if (!loading) {
      getData();
    }
    // disable warning, otherwise component is constantly refreshed
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataQuery]);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataQuery]);

  useEffect(() => {
    setFilteredData(runFilters(data, filters));
  }, [filters, data]);
  return (
    <Fragment>
      {dataType === 'sync' && (
        <Table
          path={path}
          data={filteredData}
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
          data={filteredData}
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

export default injectIntl(
  withApollo<ITableSetup & IProps & WrappedComponentProps>(TableWrapper)
);
