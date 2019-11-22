import React, { useEffect, SFC, useCallback, useState, Fragment } from 'react';
import { withApollo } from 'react-apollo';
import { /* gql, */ ApolloClient } from 'apollo-boost';
import { injectIntl } from 'react-intl';

import { runFilters } from '../../services/filters';
import { FilterType } from '../../services/filters/types';
import { ITableSetup } from '../../resources/interfaces';
import { logError } from '../Error/ErrorBoundary';
import { testTableData2 } from '../../resources/constants/mock/testTableData2';
import { ITableColumn } from '../../resources/interfaces';
import { customSortMethod } from '../../utils/sort';
import Table from './Table';

interface IProps {
  intl: any;
  client: ApolloClient<any>;
  dataType: string;
  dataQuery: string;
  tableDef: ITableSetup;
  filters?: FilterType[];
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

const transformColumnData = (columns: ITableColumn[], intl: any) => {
  const newCols = columns.map((column: ITableColumn) => {
    return {
      id: column.title,
      Header: intl.formatMessage({ id: `admin_common.${column.title}` }),
      accessor: column.data[0].path,
      type: column.field,
      sortType: generateSortType(column.sort)
    };
  });

  return newCols;
};

const TableWrapper: SFC<ITableSetup & IProps> = ({intl, client, dataQuery, tableDef, filters, dataType}) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPageCount, setTotalPageCount] = useState(1);
  const [pageSize] = useState<number>(10);

  const getData = async () => {
    setLoading(true);

    // TODO: Covert filters into GQL fitlers.
      try {
      // const response = await client.query({
      //   query: gql`${dataQuery}`,
      //   errorPolicy: 'all'
      // });
      // const { results } = response.data;

      const { results } = testTableData2;
      setData(results);
      setFilteredData(results);

      setTotalPageCount(Math.ceil(results.length / pageSize));
      setLoading(false);
    } catch(err) {
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
          data={filteredData}
          columns={transformColumnData([...tableDef.columns], intl)}
          tableType='sync'
        />
      )}
      {dataType === 'async' && (
        <Table
          data={filteredData}
          columns={transformColumnData([...tableDef.columns], intl)}
          fetchData={fetchData}
          loading={loading}
          pageCount={totalPageCount}
          tableType='async'
        />
      )}
    </Fragment>
  );
};

export default injectIntl(withApollo<ITableSetup & IProps>(TableWrapper));
