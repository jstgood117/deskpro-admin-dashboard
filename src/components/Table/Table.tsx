import React, { FC, SyntheticEvent, useState, useEffect } from 'react';
import {
  useTable,
  useSortBy,
  usePagination,
  useRowSelect,
  useExpanded
} from 'react-table';

import { KeyValue } from '../../types';

import Pagination, { IPageChange } from '../Pagination/Pagination';
import Checkbox from '../Checkbox';
import Icon from '../Icon';
import TableData from '../TableData';
import { generateComponentProps } from '../TableData/apiToComponentAdapter';
import Header from './Header';
import { TableType, TableParams, SortType, HeaderGroup } from './types';
import {
  onCheckboxChange,
  generateTableParams,
} from './helpers/functions';
import {
  TableStyled,
  StyledPagination,
  StyledTh
} from './TableStyles';

export type Props = {
  path: string;
  data: KeyValue[];
  columns: any[];
  fetchData?: () => void;
  loading?: boolean;
  pageCount?: number;
  tableType: TableType;
  sortBy: SortType[];
};

const Table: FC<Props> = ({
  path,
  data,
  columns,
  fetchData,
  loading,
  pageCount: controlledPageCount,
  tableType,
  sortBy
}) => {

  const tableParams: TableParams = generateTableParams(
    tableType,
    columns,
    data,
    controlledPageCount
  );

  const {
    toggleSortBy,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    setPageSize,
    gotoPage,
    state: { pageIndex, pageSize }
  } = useTable(
    tableParams,
    useExpanded,
    useSortBy,
    usePagination,
    useRowSelect
  ) as any;

  useEffect(() => {
    if (fetchData) {
      fetchData();
    }
  }, [fetchData, pageIndex, pageSize]);

  useEffect(() => {
    if (sortBy.length) {
      toggleSortBy(sortBy[0].id, sortBy[0].desc, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy]);

  const [checked, setChecked] = useState<object>({});
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(100);
  const [totalRecords, setTotalRecords] = useState<number>(0);

  const handleCheckboxChange = (event: SyntheticEvent<HTMLInputElement>) => {
    onCheckboxChange(event.currentTarget.value, checked, setChecked);
  };

  const handleChangeCurrentPage = (datas: IPageChange) => {
    setCurrentPage(datas.currentPage);
    gotoPage(datas.currentPage - 1);
  };

  const handleChangeRowsPerPage = (rows: number) => {
    setPageSize(rows);
    setRowsPerPage(rows);
    setCurrentPage(1);
    gotoPage(0);
  };

  useEffect(() => {
    setChecked({});
    setTotalRecords(data.length);
  }, [pageIndex, data]);

  return (
    <>
      <TableStyled>
        <Header
          setChecked={setChecked}
          pageSize={pageSize}
          pageIndex={pageIndex}
          data={data}
          checked={checked}
          path={path}
          page={page}
          columns={columns}
          totalRecords={totalRecords}
          rowsPerPage={rowsPerPage}
          currentPage={currentPage}
          handleChangeCurrentPage={handleChangeCurrentPage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
        <div className='overflow'>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup: HeaderGroup, indexOuter: number) => (
                <tr
                  key={indexOuter}
                  {...(headerGroup.getHeaderGroupProps &&
                    headerGroup.getHeaderGroupProps())}
                >
                  <th />
                  {headerGroup.headers.map(
                    (column: KeyValue, indexInner: number) => {
                      const isIdColumn = column.Header.toUpperCase() === 'ID' ? true : false;
                      const isLastColumn = !(headerGroup.headers.length - indexInner - 1);

                      return <th
                        key={indexInner}
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        style={{
                          border: column.isSorted && '1px solid #D3D6D7',
                          width: isIdColumn && '1px',
                        }}
                      >
                        <StyledTh align={isIdColumn && isLastColumn ? 'right' : 'left'}>
                          {column.render('Header')}

                          {column.isSorted &&
                            (column.isSortedDesc ? (
                              <span className='sort-icon'>
                                <Icon name='ic-sort-up-active' />
                              </span>
                            ) : (
                                <span className='sort-icon'>
                                  <Icon name='ic-sort-down-active' />
                                </span>
                              ))}
                          {column.isSorted && (
                            <span className='filter-icon'>
                              <Icon name='filter' />
                            </span>
                          )}
                        </StyledTh>
                      </th>
                    }
                  )}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row: KeyValue, indexOuter: number) => {
                prepareRow(row);
                return (
                  <tr
                    key={indexOuter}
                    {...row.getRowProps()}
                    className={
                      checked.hasOwnProperty(
                        (row.original as KeyValue).id.toString()
                      )
                        ? 'row--selected'
                        : ''
                    }
                  >
                    <td>
                      <Checkbox
                        value={(row.original as KeyValue).id}
                        checked={
                          checked.hasOwnProperty(
                            (row.original as KeyValue).id.toString()
                          )
                            ? true
                            : false
                        }
                        onChange={handleCheckboxChange}
                      />
                    </td>
                    {row.cells.map((cell: any, indexInner: number) => {
                      const isIdColumn = cell.column.Header.toUpperCase() === 'ID' ? true : false;
                      const isLastCell = !(row.cells.length - indexInner - 1);

                      return <td key={indexInner} {...cell.getCellProps()}>
                        <span
                          style={{ display: 'flex' }}
                          {...cell.row.getExpandedToggleProps({
                            style: {
                              paddingLeft: `${row.depth * 2}rem`,
                              float: isIdColumn && isLastCell && 'right'
                            }
                          })}
                        >
                          <TableData {...generateComponentProps(cell)} />
                        </span>
                      </td>
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {!loading && (
          <StyledPagination>
            <Pagination
              totalRecords={totalRecords}
              rowsPerPage={rowsPerPage}
              currentPage={currentPage}
              onChangePage={handleChangeCurrentPage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </StyledPagination>
        )}
      </TableStyled>
    </>
  );
};

export default Table;
