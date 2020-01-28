import React, { FC, SyntheticEvent, useState, useEffect } from 'react';
import {
  useTable,
  useSortBy,
  usePagination,
  useRowSelect,
  useExpanded,
  useGroupBy,
} from 'react-table';

import { KeyValue } from '../../types';

import Pagination, { IPageChange } from '../Pagination/Pagination';
import Checkbox from '../Checkbox';
import Icon from '../Icon';
import TableData from '../TableData';
import { generateComponentProps } from '../TableData/apiToComponentAdapter';
import Header from './Header';
import { TableType, TableParams, SortType, HeaderGroup } from './types';
import { onCheckboxChange, generateTableParams } from './helpers/functions';
import { TableStyled, StyledPagination, StyledTh } from './TableStyles';
import Tooltip from '../Tooltip';
import { API_ChatDepartment } from '../../codegen/types';
import { ActionFactory } from '../../services/actions/ActionFactory';

// Returns `true` on equal sorts
const compareSorts = (sort1: SortType[], sort2: SortType[]) => {
  let result = sort1.length === sort2.length;

  if (result) {
    sort1.forEach((item1, index) => {
      const item2 = sort2[index];
      result = result && item1.id === item2.id && !!item1.desc === !!item2.desc;
      return result;
    });
  }
  return result;
};

export type Props = {
  path: string;
  data: KeyValue[];
  columns: any[];
  fetchData?: () => void;
  loading?: boolean;
  pageCount?: number;
  tableType: TableType;
  sortBy: SortType[];
  onSortChange?: (sortBy: SortType[]) => void;
};

const Table: FC<Props> = ({
  path,
  data,
  columns,
  fetchData,
  loading,
  onSortChange,
  pageCount: controlledPageCount,
  tableType,
  sortBy,
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
    toggleExpanded,
    state: { pageIndex, pageSize, sortBy: sortByInfo }, // groupBy, expanded
  } = useTable(tableParams, useGroupBy, useExpanded, useSortBy, usePagination, useRowSelect) as any;

  // Process internal sort change
  useEffect(() => {
    if (onSortChange && !compareSorts(sortBy, sortByInfo)) {
      onSortChange(sortByInfo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortByInfo]);

  useEffect(() => {
    if (fetchData && tableType === 'async') {
      fetchData();
    }
  }, [fetchData, pageIndex, pageSize, tableType]);

  // Handle incoming sort rules
  useEffect(() => {
    if (sortBy.length && !compareSorts(sortBy, sortByInfo)) {
      toggleSortBy(sortBy[0].id, sortBy[0].desc, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy]);

  useEffect(() => {
    if (fetchData) {
      fetchData();
    }
  }, [fetchData, pageIndex, pageSize]);

  const [checked, setChecked] = useState<object>({});
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(100);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const actions = ActionFactory(path);

  const handleCheckboxChange = async (
    event: SyntheticEvent<HTMLInputElement>,
    subRows: API_ChatDepartment[]
  ) => {
    onCheckboxChange(event.currentTarget.value, checked, setChecked, subRows);
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
    page.map((row: { canExpand: any; id: any }) => {
      if (row.canExpand) toggleExpanded(row.id, true);
      return true;
    });
    setChecked({});
    setTotalRecords(data.length);
    // eslint-disable-next-line
  }, [pageIndex, data, page]);

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
          refreshData={fetchData}
        />
        <div className='overflow'>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup: HeaderGroup, indexOuter: number) => (
                <tr
                  key={indexOuter}
                  {...(headerGroup.getHeaderGroupProps && headerGroup.getHeaderGroupProps())}
                >
                  {actions && actions.length > 0 && <th style={{ width: '30px' }} />}
                  {headerGroup.headers.map((column: KeyValue, indexInner: number) => {
                    const isIdColumn = column.type.__typename === 'TableColumnId';

                    return (
                      <th
                        key={indexInner}
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                        style={{
                          border: column.isSorted && '1px solid #D3D6D7',
                          width: isIdColumn && '1px',
                        }}
                      >
                        <StyledTh alignRight={isIdColumn}>
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
                            <Tooltip content='Filter' styleType='dark' placement='bottom'>
                              <span className='filter-icon'>
                                <Icon name='filter' />
                              </span>
                            </Tooltip>
                          )}
                          {column.isSorted && column.canGroupBy ? (
                            // If the column can be grouped, let's add a toggle
                            <span {...column.getGroupByToggleProps()}>
                              {column.isGrouped ? <Icon name='close' /> : <Icon name='group' />}
                            </span>
                          ) : null}
                        </StyledTh>
                      </th>
                    );
                  })}
                  <th style={{ width: '1px' }} />
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
                      (row.depth === 1
                        ? (page[indexOuter + 1] && page[indexOuter + 1].depth === 0) ||
                          indexOuter === page.length - 1
                          ? 'isLastSubRow '
                          : 'subrow '
                        : row.subRows.length > 0 && row.isExpanded
                        ? 'hasSubRows '
                        : ' ') +
                      (row.original &&
                      checked.hasOwnProperty((row.original as KeyValue).id.toString())
                        ? 'row--selected'
                        : '')
                    }
                  >
                    {actions && actions.length > 0 && row.original && (
                      <td
                        style={{
                          width: '30px',
                          paddingLeft: `${row.depth === 1 && row.depth * 2}rem`,
                        }}
                        className='checkBox'
                      >
                        <Checkbox
                          value={(row.original as KeyValue).id}
                          checked={
                            checked.hasOwnProperty((row.original as KeyValue).id.toString())
                              ? true
                              : false
                          }
                          onChange={(e: SyntheticEvent<HTMLInputElement>) => {
                            handleCheckboxChange(e, row.original.subRows);
                          }}
                        />
                      </td>
                    )}
                    {row.cells.map((cell: any, indexInner: number) => {
                      const isIdColumn = cell.column.type.__typename === 'TableColumnId';
                      return (
                        <td
                          key={indexInner}
                          {...cell.getCellProps()}
                          {...cell.row.getExpandedToggleProps({
                            onClick: () => {},
                            style: {
                              textAlign: isIdColumn && 'right',
                              verticalAlign: isIdColumn && 'bottom',
                              paddingBottom: isIdColumn && '5px',
                              paddingLeft: `${indexInner === 0 &&
                                row.depth === 1 &&
                                row.depth * 2}rem`,
                              cursor: 'default',
                            },
                          })}
                        >
                          {cell.isGrouped ? (
                            // If it's a grouped cell, add an expander and row count
                            <>
                              <span {...row.getExpandedToggleProps()}>
                                {row.isExpanded ? (
                                  <Icon name='downVector' />
                                ) : (
                                  <Icon name='rightVector' />
                                )}
                              </span>{' '}
                              {cell.render('Cell')} ({row.subRows.length})
                            </>
                          ) : cell.isAggregated ? (
                            // If the cell is aggregated, use the Aggregated
                            // renderer for cell
                            cell.render('Aggregated')
                          ) : cell.isRepeatedValue ? null : ( // For cells with repeated values, render null
                            // Otherwise, just render the regular cell
                            <TableData {...generateComponentProps(cell)} />
                          )}
                        </td>
                      );
                    })}
                    {row.original && (
                      <td>
                        <span className='action-buttons'>
                          {!checked.hasOwnProperty((row.original as KeyValue).id.toString()) && (
                            <TableData
                              type='action_buttons'
                              props={{
                                onPencilClick: () => {},
                                onDuplicateClick: () => {},
                                onTrashClick: () => {},
                              }}
                            />
                          )}
                        </span>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {!loading && page.length > 0 && (
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
