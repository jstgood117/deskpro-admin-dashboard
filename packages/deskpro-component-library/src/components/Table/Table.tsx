import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { ITableColumns, ITableData } from '../../resources/interfaces';
import { DeskproAdminTheme } from '../Theme';

const JsonTable = require('ts-react-json-table');
//const DataTable = require('react-tableData-table-component');

const TableStyled = styled.div`
	& table {
		width: 100%;
		border-collapse: collapse;

		& thead {
			& tr {
				border-top: 1px solid ${props => props.theme.greyLight};
				border-bottom: 1px solid ${props => props.theme.greyLight};

				& th {
					text-align: left;
					line-height: 26px;
					color: ${props => props.theme.greyDark};
				}
			}
		}
		& tbody {
			& tr {
				border-bottom: 1px solid ${props => props.theme.greyLighter};

				& td {
					text-align: left;
					line-height: 44px;
					color: ${props => props.theme.staticColour};

					& img {
						width: 25px;
						height: 25px;
						border-radius: 12px;
						vertical-align: middle;
						margin-right: 15px;
					}
				}
			}
		}
	}
`

export interface IProps {
	columns?: ITableColumns[];
	tableData: ITableData[];
}
interface IState {
//	sort: boolean;
	tableData: ITableData[];
}

class Table extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = { 
			// sort: false, 
			tableData: this.props.tableData
		};
	}

	componentDidUpdate(prevProps: IProps) {
		if (this.props.tableData.length !== prevProps.tableData.length) {
			this.setState({ tableData: this.props.tableData });
		}
	}

	onClickHeader = (e: any, column: string) => {
		console.log(`>>> clicked ${column}`);
		let sortedData = this.state.tableData;
		sortedData.sort( function( a: ITableData, b: ITableData ) {
			console.log(a[column]);
			return a[column] > b[column] ? 1 : -1;
		});

		this.setState({ tableData: sortedData });
	}

	render() {
		return (
			<ThemeProvider theme={DeskproAdminTheme}>
				<TableStyled>
					{this.state.tableData && <JsonTable
						rows={this.state.tableData}
						columns={this.props.columns}
						onClickHeader={ this.onClickHeader }
					/>}
				</TableStyled>
			</ThemeProvider>
		);
	}
}

export default Table;
