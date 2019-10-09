import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { ITableColumns, ITableData } from '../../resources/interfaces';
import { DeskproAdminTheme } from '../Theme';

const DataTable = require('ts-react-json-table');
//const DataTable = require('react-data-table-component');

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

interface IProps {
	columns?: ITableColumns[];
	data: ITableData[];
}
interface IState {
//	sort: boolean;
	data: ITableData[];
}

class Table extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = { 
			// sort: false, 
			data: this.props.data
		};
	}

	componentWillReceiveProps() {
			
	}

	onClickHeader = (e: any, column: string) => {
		let sortedData = this.state.data;
		sortedData.sort( function( a: ITableData, b: ITableData ) {
			return a[column] > b[column] ? 1 : -1;
	 });
		this.setState({ data: sortedData });
	}

	render() {
		return (
			<ThemeProvider theme={DeskproAdminTheme}>
				<TableStyled>
					<DataTable
						rows={this.state.data}
						columns={this.props.columns}
						onClickHeader={ this.onClickHeader }
					/>
				</TableStyled>
			</ThemeProvider>
		);
	}
}

export default Table;
