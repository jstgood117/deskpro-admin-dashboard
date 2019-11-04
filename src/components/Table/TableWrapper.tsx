import React, { SFC, useCallback, useState, Fragment } from 'react';
import { withApollo } from 'react-apollo';
import { gql, ApolloClient } from 'apollo-boost';
import { injectIntl } from 'react-intl';

// import { testTableColumns } from '../../resources/constants';
import { ITableSetup } from '../../resources/interfaces';

import { transformColumnData } from './Table';
import TableMemory from './TableMemory';
import TableAsync from './TableAsync';
import { logError } from '../Error/ErrorBoundary';

interface IProps {
	intl: any;
	client: ApolloClient<any>;
	dataQuery: string;
	tableDef: ITableSetup;
}

// TODO how does memory vs async choice come through in the agents_getAgentsPage query?
const bChooseMemoryTable = true;

const TableWrapper: SFC<ITableSetup & IProps> = ({intl, client, dataQuery, tableDef}) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [pageCount, setPageCount] = useState(0);
// 	const fetchIdRef = useRef(0);

	// TODO remove this when backend data is fixed
	const dataQuery2 = 'query { results: agents_getAgents(filter: { is_deleted: false }) { id, name, first_name, last_name, primary_email, emails, can_admin, can_agent }}';

	const getData = () => {
		client.query({ query: gql`${dataQuery2}`, errorPolicy: 'all' }).then(result => {
			setData(result.data.results);
			setPageCount(result.data.results.length / 20); // TODO non-hardcoded page size
			setLoading(false);
		}).catch(err => logError(err));
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

	if (bChooseMemoryTable) getData();

	return (
		<Fragment>
			{bChooseMemoryTable && (
				<TableMemory
					data={data}
					columns={transformColumnData([...tableDef.columns], intl)}
					options={options}
				/>
			)}
			{!bChooseMemoryTable && (
				<TableAsync
					data={data}
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
