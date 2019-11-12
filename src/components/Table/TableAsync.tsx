import React, { FC, useEffect, useState } from 'react';
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table';

import { TableStyled } from './Table';
import Pagination, { IPageChange } from '../Pagination/Pagination';

type TableAsyncProps = {
  data: any[];
  columns: any[];
  fetchData: any;
  loading: boolean;
  pageCount: number;
};

const TableAsync: FC<TableAsyncProps> = ({
  data,
  columns,
  fetchData,
  loading,
  pageCount: controlledPageCount
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      manualPagination: true,
      pageCount: controlledPageCount
    } as any,
    useSortBy,
    usePagination,
    useRowSelect
  ) as any;

  useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangeCurrentPage = (datas: IPageChange) => {
    setCurrentPage(datas.currentPage);
  };

  const handleChangRowsPerPage = (datas: number) => {
    setRowsPerPage(datas);
    setCurrentPage(1);
  };
  return (
    <TableStyled>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup: any, indexOuter: number) => (
            <tr key={indexOuter} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any, indexInner: number) => (
                <th
                  key={indexInner}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' v' : ' ^') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any, indexOuter: number) => {
            prepareRow(row);
            return (
              <tr key={indexOuter} {...row.getRowProps()}>
                {row.cells.map((cell: any, indexInner: number) => {
                  return (
                    <td key={indexInner} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          Showing {page.length} of ~{controlledPageCount * pageSize} results
        </div>
      )}
      {!loading && (
        <Pagination
          totalRecords={1734}
          rowsPerPage={rowsPerPage}
          currentPage={currentPage}
          onChangePage={handleChangeCurrentPage}
          onChangeRowsPerPage={handleChangRowsPerPage}
        />
      )}
    </TableStyled>
  );
};

export default TableAsync;
