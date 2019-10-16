import React, { SFC, Fragment } from 'react';
import styled from 'styled-components';
import MaterialTable from 'material-table';

import { ITableRow, ITableColumn } from '../../resources/interfaces';

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
	data: ITableRow[],
	columns: ITableColumn[],
	options?: {
		[key: string]: any,
	}
}

const Table: SFC<IProps> = ({data,columns,options}) => {
	const fullOptions = Object.assign({}, options, { showTitle: false });

	return (
		<Fragment>
			<TableStyled>
				<MaterialTable
					data={data}
					columns={columns}
					options={fullOptions}
				/>
			</TableStyled>
		</Fragment>
	);
}

export default Table;
