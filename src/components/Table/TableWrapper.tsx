import React, { useEffect, SFC, useCallback, useState, Fragment } from 'react';
import { withApollo } from 'react-apollo';
import { gql, ApolloClient } from 'apollo-boost';
import { injectIntl } from 'react-intl';

import { runFilters } from '../../services/filters';
import { FilterType } from '../../services/filters/types';
import { ITableSetup } from '../../resources/interfaces';

import { logError } from '../Error/ErrorBoundary';

import { transformColumnData } from './Table';
import TableSync from './TableSync';
import TableAsync from './TableAsync';

interface IProps {
  intl: any;
  client: ApolloClient<any>;
  dataQuery: string;
  tableDef: ITableSetup;
  filters?: FilterType[];
}

// TODO how does memory vs async choice come through in the agents_getAgentsPage query?
const bChooseSyncTable = true;

const TableWrapper: SFC<ITableSetup & IProps> = ({intl, client, dataQuery, tableDef, filters}) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPageCount, setTotalPageCount] = useState(1);
  const [pageSize] = useState<number>(10);

  const getData = async () => {
    setLoading(true);

    try {
      const response = await client.query({
        query: gql`${dataQuery}`,
        errorPolicy: 'all'
      });
      const { results } = response.data;
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
    if (bChooseSyncTable) getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataQuery]);

  useEffect(() => {
    setFilteredData(runFilters(data, filters));
  }, [filters, data]);

  return (
    <Fragment>
      {bChooseSyncTable && (
        <TableSync
          data={filteredData}
          columns={transformColumnData([...tableDef.columns], intl)}
        />
      )}
      {!bChooseSyncTable && (
        <TableAsync
          data={filteredData}
          columns={tableDef.columns}
          fetchData={fetchData}
          loading={loading}
          pageCount={totalPageCount}
        />
      )}
    </Fragment>
  );
};

export default injectIntl(withApollo<ITableSetup & IProps>(TableWrapper));
