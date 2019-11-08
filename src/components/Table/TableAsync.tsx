import React, { FC, useEffect } from 'react';
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table';

import { TableStyled } from './Table';
import Pagination from './Pagination';

type TableAsyncProps = {
  data: any[];
  columns:any[],
  fetchData:any;
  loading:boolean;
  pageCount:number;
};

const TableAsync: FC<TableAsyncProps> = ({
  data,
  columns,
  fetchData,
  loading,
  pageCount:controlledPageCount,
}) => {
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
    } as any,
    useSortBy,
    usePagination,
    useRowSelect,
  ) as any;

  useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);

  return (
    <TableStyled>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup:any, indexOuter: number) => (
            <tr key={indexOuter} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column:any, indexInner: number) => (
                <th key={indexInner} {...column.getHeaderProps(column.getSortByToggleProps())}>
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
            (row:any, indexOuter:number) => {
              prepareRow(row);
              return (
                <tr key={indexOuter} {...row.getRowProps()}>
                  {row.cells.map((cell:any, indexInner:number) => {
                    return <td key={indexInner} {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                  })}
                </tr>
              );
            }
          )}
        </tbody>
      </table>
      {loading
        ? ( <div>Loading...</div> )
        : ( <div>Showing {page.length} of ~{controlledPageCount * pageSize}{' '}results</div> )
      }
      {!loading && (
        <Pagination
          pageIndex={pageIndex}
          pageCount={pageCount}
          pageSize={pageSize}
          pageOptions={pageOptions}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          gotoPage={gotoPage}
          previousPage={previousPage}
          nextPage={nextPage}
          setPageSize={setPageSize}
        />
      )}
    </TableStyled>
  );
};

export default TableAsync;
