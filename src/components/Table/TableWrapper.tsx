import React, { SFC, Fragment, useCallback, useState } from 'react';
import { gql } from 'apollo-boost';

import { testTableColumns } from '../../resources/constants';
import { ITableSetup } from '../../resources/interfaces';

import Table from './Table';
import Loading from '../Loading';
import Error from '../Error';
import { client } from '../../App';
import { logError } from '../Error/ErrorBoundary';

/* const formattedNameAvatar = (props: any) => {
	const checkArr = Object.keys(props);
	if (!checkArr.includes('avatar') || !checkArr.includes('name')) {
		throw new Error(`formattedNameAvatar did not receive required props: ${JSON.stringify(props)}`);
	}
	return (rowData: any) => <div><img src={rowData[props.avatar]} alt={rowData[props.name]} />{rowData[props.name]}</div>;
}
const sortNameAvatar = (a: any, b: any) => a.name - b.name; */

const TableWrapper: SFC<ITableSetup> = ({dataQuery, metadataQuery, options}) => {
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

/*	dataCols.map((column) => {
		switch (column.field) {
			case 'formattedNameAvatar':
				column.render = formattedNameAvatar(column.props);
				column.customSort = sortNameAvatar;
		}
		return column;
	}); */

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

export default TableWrapper;
