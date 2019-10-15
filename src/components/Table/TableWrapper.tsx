import React, { SFC, Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { testTableColumns } from '../../resources/constants';
import Table from './Table';

export interface IProps {
	dataQuery: string,
	metadataQuery: string,
}

const TableWrapper: SFC<IProps> = ({dataQuery, metadataQuery}) => {
//		const { loading: loadingCols, error: errorCols, data: dataCols } = useQuery(gql`${metadataQuery}`);
	const { loading: loadingRows, error: errorRows, data: dataRows } = useQuery(gql`${dataQuery}`);
//		if (dataCols) console.log(dataCols)

	// test data for now
	const loadingCols = false;
	const errorCols = false;
	const dataCols = testTableColumns;

	return (
		<Fragment>
			{(loadingCols || loadingRows) && <p>Loading...</p>}
			{(errorCols || errorRows) && <p>Error, couldn't load data</p>}
			{dataCols && dataRows && <Table data={dataRows.agents_getAgents} columns={dataCols} />}
		</Fragment>
	);
}

export default TableWrapper;
