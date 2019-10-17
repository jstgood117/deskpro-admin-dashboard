import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table';

import Pagination from './Pagination';

const TableStyled = styled.div`
	& table {
		width: 100%;
		border-collapse: collapse;

		& thead {
			& tr {
				border-top: 1px solid ${props => props.theme.greyLight};
				border-bottom: 1px solid ${props => props.theme.greyLight};

				& th {
					padding: 0;
					line-height: 26px;
					color: ${props => props.theme.greyDark};
					text-align: left;
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

/* const formattedNameAvatar = (props: any) => {
	const checkArr = Object.keys(props);
	if (!checkArr.includes('avatar') || !checkArr.includes('name')) {
		throw new Error(`formattedNameAvatar did not receive required props: ${JSON.stringify(props)}`);
	}
	return (rowData: any) => <div><img src={rowData[props.avatar]} alt={rowData[props.name]} />{rowData[props.name]}</div>;
}
const sortNameAvatar = (a: any, b: any) => a.name - b.name; */


const transformColumnData = (columns) => {
	columns.map((column) => {
		switch (column.id) {
			case 'selection':
				column.Header = ({ getToggleAllRowsSelectedProps }) => (
					<div>
						<input type="checkbox" {...getToggleAllRowsSelectedProps()} />
					</div>
				);
				column.Cell = ({ row }) => (
					<div>
						<input type="checkbox" {...row.getToggleRowSelectedProps()} />
					</div>
				);
				break;
	/*			case 'formattedNameAvatar':
				column.render = formattedNameAvatar(column.props);
				column.customSort = sortNameAvatar; */
				default:
		}
		return column;
	});

	return columns;
}

const Table = ({data,columns,fetchData,loading,pageCount:controlledPageCount,options}) => {
//	const memoizedDataCols: Array<Column> = useMemo(() => columns, [columns]);
//	const memoizedDataRows: Array<any> = useMemo(() => data, [data]);
	transformColumnData([...columns]);

	const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
		prepareRow,
		page,
		canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
		setPageSize,
		state: { pageIndex, pageSize }	
  } = useTable(
		{
    	columns,
			data,
			initialState: { pageIndex: 0 },
			manualPagination: true,
			pageCount: controlledPageCount,
		},
		useSortBy,
		usePagination,
		useRowSelect,
	)

	useEffect(() => {
    console.log(`>>> page: ${pageIndex}`);
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);

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
					{page.map(
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
					<tr>
						{loading ? ( <td>Loading...</td> ) : (
							<td>
								Showing {page.length} of ~{controlledPageCount * pageSize}{" "}
								results
							</td>
						)}
					</tr>
				</tbody>
			</table>
			{!loading && <Pagination pageIndex={pageIndex} pageCount={pageCount} pageSize={pageSize} pageOptions={pageOptions} canPreviousPage={canPreviousPage} canNextPage={canNextPage} gotoPage={gotoPage} previousPage={previousPage} nextPage={nextPage} setPageSize={setPageSize} />}
		</TableStyled>
	);
}

export default Table;
