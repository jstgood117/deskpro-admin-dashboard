import React, { Component, forwardRef, LegacyRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import MaterialTable from 'material-table';
import { ChevronLeft, ChevronRight, FirstPage, LastPage } from '@material-ui/icons';

import { DeskproAdminTheme } from '../Theme';

const tableIcons = {
	FirstPage: forwardRef((props, ref: LegacyRef<SVGSVGElement>) => <FirstPage {...props} ref={ref} />),
	LastPage: forwardRef((props, ref: LegacyRef<SVGSVGElement>) => <LastPage {...props} ref={ref} />),
	NextPage: forwardRef((props, ref: LegacyRef<SVGSVGElement>) => <ChevronRight {...props} ref={ref} />),
	PreviousPage: forwardRef((props, ref: LegacyRef<SVGSVGElement>) => <ChevronLeft {...props} ref={ref} />),
};

const TableStyled = styled.div`
	& .MuiToolbar-regular {
		min-height: 0;
	}
	& .MuiPaper-elevation2 {
		box-shadow: none;
	}
	& .MuiSvgIcon-root {
		fill: ${props => props.theme.greyLight};
	}

	& table {
		& thead {
			& tr {
				border-top: 1px solid ${props => props.theme.greyLight};
				border-bottom: 1px solid ${props => props.theme.greyLight};

				& th {
					padding: 0;
					line-height: 26px;
					color: ${props => props.theme.greyDark};
				}
			}
		}
		& tbody {
			& tr {
				border-bottom: 1px solid ${props => props.theme.greyLighter};

				& td {
					padding: 0;
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
	columns: any;
	tableData: any;
}
interface IState {
	tableData: any;
}

class Table extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = { 
			tableData: this.props.tableData,
		};
	}

	componentDidUpdate(prevProps: IProps) {
		if (this.props.tableData.length !== prevProps.tableData.length) {
			this.setState({ tableData: this.props.tableData });
		}
	}

	render() {
		return (
			<ThemeProvider theme={DeskproAdminTheme}>
				<TableStyled>
					{this.state.tableData && <MaterialTable
						data={this.state.tableData}
						columns={this.props.columns}
						options={{
							pageSize: 2,
							search: false,
							showTitle: false,
							selection: true,
						}}
						icons={tableIcons}
					/>}
				</TableStyled>
			</ThemeProvider>
		);
	}
}

export default Table;
