import React from 'react';
import styled from 'styled-components';
import { useTable, useSortBy } from 'react-table';

const TableStyled = styled.div`
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

/* export interface IProps {
	data: Array<any>,
	columns: Array<Column>,
	options?: {
		[key: string]: any,
	}
} */

const Table = ({data,columns,options}) => {
//	const memoizedDataCols: Array<Column> = useMemo(() => columns, [columns]);
//	const memoizedDataRows: Array<any> = useMemo(() => data, [data]);

	const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
		{
    	columns,
    	data,
		},
		useSortBy,
	)

	// TODO: replace up/down characters with SVGs from Figma

	return (
		<TableStyled>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map(headerGroup => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => (
								<th {...column.getHeaderProps(column.getSortByToggleProps())}>
									{column.render('Header')}
									<span>{column.isSorted ? column.isSortedDesc ? ' v' : ' ^' : ''}
                  </span>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map(
						(row, i) => {
							prepareRow(row);
							return (
								<tr {...row.getRowProps()}>
									{row.cells.map(cell => {
										return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
									})}
								</tr>
							);
						}
					)}
				</tbody>
			</table>
		</TableStyled>
	);
}

export default Table;
