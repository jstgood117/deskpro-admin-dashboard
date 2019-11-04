import React from 'react';
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table';

import { TableStyled } from './Table'
import Pagination from './Pagination';

const Table = ({data,columns,options}) => {
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
		},
		useSortBy,
		usePagination,
		useRowSelect,
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
									<span>{column.isSorted ? column.isSortedDesc ? ' v' : ' ^' : ''}</span>
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
						<td>
							Showing {page.length} of ~{pageCount * pageSize}{" "}
							results
						</td>
					</tr>
				</tbody>
			</table>
			<Pagination pageIndex={pageIndex} pageCount={pageCount} pageSize={pageSize} pageOptions={pageOptions} canPreviousPage={canPreviousPage} canNextPage={canNextPage} gotoPage={gotoPage} previousPage={previousPage} nextPage={nextPage} setPageSize={setPageSize} />
		</TableStyled>
	);
}

export default Table;
