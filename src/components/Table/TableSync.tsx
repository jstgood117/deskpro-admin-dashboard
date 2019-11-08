import React, { FC, SyntheticEvent, useState, useEffect } from 'react';
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table';
import { onCheckboxChange, onSelectAllChange } from './helpers/functions';

import { TableStyled } from './Table';
import Pagination from './Pagination';
import Checkbox from './Checkbox';
import * as Cell from './Cell';

type TableAsyncProps = {
  data: any[];
  columns:any[];
};

const Table: FC<TableAsyncProps> = ({
  data,
  columns
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

  const [checked, setChecked] = useState<object>({});
  const [isAllChecked, setIsAllChecked] = useState(false);

  const handleSelectAllClick = (
    event: SyntheticEvent<HTMLInputElement>,
    _pageIndex: number
  ) => {
    onSelectAllChange(event.currentTarget.checked, setChecked, _pageIndex, pageSize, data);
  };

  const handleCheckboxChange = (
    event: SyntheticEvent<HTMLInputElement>
  ) => {
    onCheckboxChange(event.currentTarget.value, checked, setChecked);
  };

  useEffect(() => {
    setIsAllChecked(Object.keys(checked).length === page.length ? true : false);
  }, [checked, page]);

  useEffect(() => {
    setChecked({});
  }, [pageIndex, data]);

  return (
    <TableStyled>
      <div>
        <Checkbox
          value={0}
          checked={isAllChecked}
          onChange={(event: SyntheticEvent<HTMLInputElement> ) =>
            handleSelectAllClick(event, pageIndex)
          }
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
                      value={row.original.id}
                      checked={checked.hasOwnProperty(row.original.id.toString())  ? true : false}
                      onChange={handleCheckboxChange}
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
