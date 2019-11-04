import React, { useEffect } from 'react';
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table';

import { TableStyled } from './Table'
import Pagination from './Pagination';

const Table = ({data,columns,fetchData,loading,pageCount:controlledPageCount,options}) => {
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
