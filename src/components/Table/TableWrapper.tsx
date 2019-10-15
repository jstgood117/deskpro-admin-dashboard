import React, { SFC, Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { testTableColumns } from '../../resources/constants';
import Table from './Table';
import { ITableColumn } from '../../resources/interfaces';

export interface IProps {
	dataQuery: string,
	metadataQuery: string,
}

const formattedNameAvatar = (props: any) => {
	return (rowData: any) => <div><img src={rowData[props.avatar]} alt={rowData[props.name]} />{rowData[props.name]}</div>;
}

const TableWrapper: SFC<IProps> = ({dataQuery, metadataQuery}) => {
//		const { loading: loadingCols, error: errorCols, data: dataCols } = useQuery(gql`${metadataQuery}`);
	const { loading: loadingRows, error: errorRows, data: dataRows } = useQuery(gql`${dataQuery}`);
//		if (dataCols) console.log(dataCols)

	// test data for now
	const loadingCols = false;
	const errorCols = false;
	const dataCols: ITableColumn[] = testTableColumns;

	dataCols.map((column) => {
		switch (column.field) {
			case 'formattedNameAvatar':
				// PSRA check props are valid
				column.render = formattedNameAvatar(column.props);
		}
		return column;
	});

	return (
		<Fragment>
			{(loadingCols || loadingRows) && <p>Loading...</p>}
			{(errorCols || errorRows) && <p>Error, couldn't load data</p>}
			{dataCols && dataRows && <Table data={dataRows.agents_getAgents} columns={dataCols} />}
		</Fragment>
	);
}

export default TableWrapper;
