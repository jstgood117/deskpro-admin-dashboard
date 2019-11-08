import React, { useState, SFC, SyntheticEvent, useEffect } from 'react';
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table';

import { TableStyled } from './Table';
import Pagination from './Pagination';
import Checkbox from './Checkbox';
import * as Cell from './Cell';

type onCheckboxChangeType = (event:SyntheticEvent<HTMLInputElement>) => void;

type TableAsyncProps = {
  data: any[];
  columns:any[];
  checked:object;
  options:any;
  onSelectAllChange:onCheckboxChangeType;
  onSelectChange:onCheckboxChangeType;
};

const Table: SFC<TableAsyncProps> = ({
  data,
  columns,
  onSelectChange,
  onSelectAllChange,
  checked
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
  } = useTable<any>(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination,
    useRowSelect,
  ) as any;

  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);

  useEffect(() => {
    setIsAllChecked(Object.keys(checked).length === data.length);
  }, [checked, data]);

  return (
    <TableStyled>
      <div>
        <Checkbox
          value={0}
          checked={isAllChecked}
          onChange={onSelectAllChange}
        />
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup: any, indexOuter:number) => (
            <tr key={indexOuter} {...headerGroup.getHeaderGroupProps()}>
              <th>&nbsp;</th>
              {headerGroup.headers.map((column: any, indexInner: number) => (
                <th key={indexInner} {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>{column.isSorted ? column.isSortedDesc ? ' v' : ' ^' : ''}</span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(
            (row: any, indexOuter: number) => {
              prepareRow(row);
              return (
                <tr key={indexOuter} {...row.getRowProps()}>
                  <td>
                    <Checkbox
                      value={row.getRowProps().key}
                      checked={checked.hasOwnProperty(row.getRowProps().key.toString())  ? true : false}
                      onChange={onSelectChange}
                    />
                  </td>
                  {row.cells.map((cell: any, indexInner: number) => (
                    <td key={indexInner} {...cell.getCellProps()}>{Cell.create(cell)}</td>
                  ))}
                </tr>
              );
            }
          )}
        </tbody>
      </table>
      <div>Showing {page.length} of ~{pageCount * pageSize}{' '} results</div>
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
    </TableStyled>
  );
};

export default Table;
