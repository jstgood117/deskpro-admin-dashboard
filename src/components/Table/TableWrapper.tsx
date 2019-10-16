import React, { SFC, Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { testTableColumns } from '../../resources/constants';
import Table from './Table';
import { ITableColumn, ITableSetup } from '../../resources/interfaces';

const formattedNameAvatar = (props: any) => {
	const checkArr = Object.keys(props);
	if (!checkArr.includes('avatar') || !checkArr.includes('name')) {
		throw new Error(`formattedNameAvatar did not receive required props: ${JSON.stringify(props)}`);
	}
	return (rowData: any) => <div><img src={rowData[props.avatar]} alt={rowData[props.name]} />{rowData[props.name]}</div>;
}
const sortNameAvatar = (a: any, b: any) => a.name - b.name;

const TableWrapper: SFC<ITableSetup> = ({dataQuery, metadataQuery, options}) => {
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
				column.render = formattedNameAvatar(column.props);
				column.customSort = sortNameAvatar;
		}
		return column;
	});
	
	return (
		<Fragment>
			{(loadingCols || loadingRows) && <p>Loading...</p>}
			{(errorCols || errorRows) && <p>Error, couldn't load data</p>}
			{dataCols && dataRows && <Table data={dataRows.agents_getAgents} columns={dataCols} options={options} />}
		</Fragment>
	);
}

export default TableWrapper;
