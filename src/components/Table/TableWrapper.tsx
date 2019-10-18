import React, { SFC, Fragment, useCallback, useState } from 'react';
import { withApollo } from 'react-apollo';
import { gql, ApolloClient } from 'apollo-boost';

import { testTableColumns } from '../../resources/constants';
import { ITableSetup } from '../../resources/interfaces';

import Table from './Table';
import Loading from '../Loading';
import Error from '../Error';
import { logError } from '../Error/ErrorBoundary';

interface IProps {
	client: ApolloClient<any>,
	dataQuery: string,
}

const TableWrapper: SFC<ITableSetup & IProps> = ({client, dataQuery}) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [pageCount, setPageCount] = useState(0);
//	const fetchIdRef = useRef(0);

	const fetchData = useCallback(({ pageSize, pageIndex }) => {
			//	const fetchID = ++fetchIdRef.current;
		if (!loading) {
			setLoading(true);
			console.log('loading data...')

			client.query({ query: gql`${dataQuery}`, errorPolicy: 'all' }).then(result => {
				setData(result.data.agents_getAgents); // TODO this needs to be generic!
				setPageCount(100); // TODO this need to be returned in results
				setLoading(false);
			}).catch(err => logError(err))
		}		
			
/*			if (dataRows) {
		//		if (fetchID === fetchIdRef.current) {
				const startRow = pageSize * pageIndex;
				const endRow = startRow + pageSize;
				setData(dataRows.slice(startRow, endRow));
		//		setPageCount(NEEDS TO BE RETURNED FROM QUERY);
				setLoading(false);
			} */
			
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dataQuery]);
		
//		const { loading: loadingCols, error: errorCols, data: dataCols } = useQuery(gql`${metadataQuery}`, { errorPolicy: 'all' }););
//		if (dataCols) console.log(dataCols)

	// test data for now
	const loadingCols = false;
	const errorCols = false;
	const dataCols = testTableColumns;
	const options = {};

	return (
		<Fragment>
			{loadingCols && <Loading />}
			{errorCols && <Error />}
			{dataCols && <Table
				data={data}
				columns={dataCols}
				fetchData={fetchData}
				loading={loading}
				pageCount={pageCount}
				options={options} />}
		</Fragment>
	);
}

export default withApollo<ITableSetup & IProps>(TableWrapper);
