import React, { SyntheticEvent, SFC, useCallback, useState, Fragment } from 'react';
import { withApollo } from 'react-apollo';
import { gql, ApolloClient } from 'apollo-boost';
import { injectIntl } from 'react-intl';

import { runFilters } from '../../services/filters';
import { FilterType } from '../../services/filters/types';
import { ITableSetup } from '../../resources/interfaces';

import { logError } from '../Error/ErrorBoundary';

import { onSelectChange } from './helpers/functions';

import { transformColumnData } from './Table';
import TableSync from './TableSync';
import TableAsync from './TableAsync';

type EventType = SyntheticEvent<HTMLInputElement>;

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
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [checked, setChecked] = useState<object>({});

  const getData = async () => {
    try {
      const result = await client.query({ query: gql`${dataQuery}`, errorPolicy: 'all' });
      setData(result.data.results);

      setPageCount(result.data.results.length / 20); // TODO non-hardcoded page size
      setLoading(false);
    } catch(err) {
      logError(err);
    }
  };

  const fetchData = useCallback(({ pageSize, pageIndex }) => {
    if (!loading) {
      setLoading(true);
      getData();
    }
    // disable warning, otherwise component is constantly refreshed
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataQuery]);

  const options = {};

  if (bChooseSyncTable) getData();

  const handleSelectAllChange = (event:EventType) => {
    // onSelectAllChange(event, setChecked);
  };

  const handleSelectChange = (event:EventType) => {
    onSelectChange(event, checked, setChecked);
  };

  const filteredData = runFilters(data, filters);
console.log(filteredData);
  return (
    <Fragment>
      {bChooseSyncTable && (
        <TableSync
          data={filteredData}
          columns={transformColumnData([...tableDef.columns], intl)}
          options={options}
          checked={checked}
          onSelectAllChange={handleSelectAllChange}
          onSelectChange={handleSelectChange}
        />
      )}
      {!bChooseSyncTable && (
        <TableAsync
          data={filteredData}
          columns={tableDef.columns}
          fetchData={fetchData}
          loading={loading}
          pageCount={pageCount}
          options={options}
        />
      )}
    </Fragment>
  );
};

export default injectIntl(withApollo<ITableSetup & IProps>(TableWrapper));
