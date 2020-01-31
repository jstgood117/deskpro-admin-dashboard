import React, { FC, SyntheticEvent, useState, useEffect } from 'react';
import {
  useTable,
  useSortBy,
  usePagination,
  useRowSelect,
  useExpanded,
  useGroupBy
} from 'react-table';
import _ from 'lodash';

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

const compareGroups = (group1: string[], group2: string[]) => {
  return (
    group1.length === group2.length && _.difference(group1, group2).length === 0
  );
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
  groupBy?: string[];
  onGroupByChange?: (columnNames: string[]) => void;
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
  groupBy
}) => {
  const [checked, setChecked] = useState<object>({});
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(100);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [firstGrouped, setFirstGrouped] = useState<boolean>(false);
  const actions = ActionFactory(path);
  // always show checkboxes
  const hasActions = true; // actions && actions.length > 0;

  const tableParams: TableParams = generateTableParams(
    tableType,
    columns,
    data,
    controlledPageCount
  );

  const {
    toggleSortBy,
    toggleGroupBy,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    setPageSize,
    gotoPage,
    dispatch,
    state: { pageIndex, pageSize, sortBy: sortByInfo, groupBy: groupByInfo } // expanded
  } = useTable(
    tableParams,
    useGroupBy,
    useExpanded,
    useSortBy,
    usePagination,
    useRowSelect
  ) as any;

  // Process internal sort change
  useEffect(() => {
    if (onSortChange && !compareSorts(sortBy, sortByInfo)) {
      onSortChange(sortByInfo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortByInfo]);

  // Handle incoming sort rules
  useEffect(() => {
    if (sortBy.length && !compareSorts(sortBy, sortByInfo)) {
      toggleSortBy(sortBy[0].id, sortBy[0].desc, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy]);

  // Handle incoming group by
  useEffect(() => {
    if (!compareGroups(groupBy, groupByInfo)) {
      setFirstGrouped(true);
      dispatch({ type: 'resetGroupBy' });
      toggleGroupBy(groupBy[0], true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupBy]);

  useEffect(() => {
    if (fetchData && tableType === 'async') {
      fetchData();
    }
  }, [fetchData, pageIndex, pageSize, tableType]);

  useEffect(() => {
    let countExpanded = 0;
    if (firstGrouped) {
      countExpanded = page
        .filter((r: any) => r.canExpand && r.isExpanded === undefined)
        .map((r: any) => r.toggleExpanded()).length;
      if (countExpanded > 0) {
        setFirstGrouped(false);
      }
    }
    // setChecked({});
    setTotalRecords(data.length);
    // eslint-disable-next-line
  }, [pageIndex, data, page]);

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
          rows={rows}
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
              {headerGroups.map(
                (headerGroup: HeaderGroup, indexOuter: number) => (
                  <tr
                    key={indexOuter}
                    {...(headerGroup.getHeaderGroupProps &&
                      headerGroup.getHeaderGroupProps())}
                  >
                    {hasActions && <th />}
                    {_.sortBy(headerGroup.headers, 'index').map(
                      (column: KeyValue, indexInner: number) => {
                        const isIdColumn =
                          column.type.__typename === 'TableColumnId';

                        return (
                          <th
                            key={indexInner}
                            {...column.getHeaderProps(
                              column.getSortByToggleProps()
                            )}
                            style={{
                              border: column.isSorted && '1px solid #D3D6D7',
                              width: isIdColumn ? 1 : column.width || 'auto'
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
                                <Tooltip
                                  content='Filter'
                                  styleType='dark'
                                  placement='bottom'
                                >
                                  <span className='filter-icon'>
                                    <Icon name='filter' />
                                  </span>
                                </Tooltip>
                              )}
                              {/*column.canGroupBy ? (
                                // If the column can be grouped, let's add a toggle
                                <span
                                  {...column.getGroupByToggleProps()}
                                  style={{ display: 'flex', marginLeft: 5 }}
                                >
                                  {column.isGrouped ? (
                                    <Icon name='group' />
                                  ) : (
                                    <Icon name='group' />
                                  )}
                                </span>
                                  ) : null*/}
                            </StyledTh>
                          </th>
                        );
                      }
                    )}
                    <th className='th-action-buttons' />
                  </tr>
                )
              )}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row: KeyValue, indexOuter: number) => {
                prepareRow(row);
                return row.isGrouped ? (
                  <tr
                    {...row.getRowProps()}
                    style={{
                      borderBottom: '1px solid #b0bbc3'
                    }}
                  >
                    {hasActions && (
                      <td
                        className='checkBox'
                        style={{ backgroundImage: 'none' }}
                      >
                        <Checkbox
                          value={row.id}
                          checked={checked.hasOwnProperty(row.id)}
                          onChange={(e: SyntheticEvent<HTMLInputElement>) => {
                            handleCheckboxChange(e, row.subRows);
                          }}
                        />
                      </td>
                    )}
                    <td
                      colSpan={1}
                      style={{
                        backgroundImage: 'none',
                        padding: '4px 0px 4px 10px'
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          maxWidth: 310
                        }}
                      >
                        <span
                          {...row.getExpandedToggleProps()}
                          style={{
                            marginRight: 'auto',
                            marginLeft: 0, // hasActions ? 16 : 0,
                            color: '#1C3E55',
                            fontFamily: 'Rubik',
                            fontWeight: 500,
                            fontSize: 15,
                            lineHeight: '150%',
                            cursor: 'pointer'
                          }}
                        >
                          {row.groupByVal} ({row.subRows.length})
                        </span>
                        <span style={{ marginLeft: 10 }}>
                          {row.isExpanded ? (
                            <Icon name='up' />
                          ) : (
                            <Icon name='down' />
                          )}
                        </span>
                      </div>
                    </td>
                    <td
                      colSpan={row.cells.length}
                      style={{ backgroundImage: 'none' }}
                    />
                  </tr>
                ) : (
                  <tr
                    key={indexOuter}
                    {...row.getRowProps()}
                    className={
                      (checked.hasOwnProperty(
                        (row.original as KeyValue).id.toString()
                      )
                        ? 'row--selected '
                        : ' ') +
                      (row.depth === 1 || row.subRows.length > 0
                        ? hasActions
                          ? 'has-checkboxes'
                          : 'non-checkboxes'
                        : '')
                    }
                  >
                    {hasActions && (
                      <td
                        style={{
                          paddingLeft: `${row.depth === 1 && row.depth * 2}rem`
                        }}
                        className='checkBox'
                      >
                        <Checkbox
                          value={(row.original as KeyValue).id}
                          checked={
                            checked.hasOwnProperty(
                              (row.original as KeyValue).id.toString()
                            )
                              ? true
                              : false
                          }
                          onChange={(e: SyntheticEvent<HTMLInputElement>) => {
                            handleCheckboxChange(e, row.original.subRows);
                          }}
                        />
                      </td>
                    )}
                    {_.sortBy(row.cells, 'column.index').map(
                      (cell: any, indexInner: number) => {
                        const isIdColumn =
                          cell.column.type.__typename === 'TableColumnId';
                        return (
                          <td
                            className={
                              (!actions || actions.length === 0) &&
                              indexInner === 0
                                ? 'firstColumn'
                                : ''
                            }
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
                                cursor: 'default'
                              }
                            })}
                          >
                            {cell.column.id === 'admin_common.col.teams' ? (
                              <TableData
                                {...generateComponentProps({
                                  ...cell,
                                  column: {
                                    ...cell.column,
                                    type: {
                                      __typename:
                                        'TableColumnTicketDepartmentList',
                                      valuesArray: {
                                        dataPath: 'agent_teams'
                                      }
                                    }
                                  },
                                  row: {
                                    ...cell.row,
                                    original: {
                                      ...cell.row.original,
                                      agent_teams: [
                                        { id: cell.value, title: cell.value }
                                      ]
                                    }
                                  },
                                  value: [{ id: cell.value, title: cell.value }]
                                })}
                              />
                            ) : (
                              <TableData {...generateComponentProps(cell)} />
                            )}
                          </td>
                        );
                      }
                    )}
                    <td className='td-action-buttons'>
                      <span className='action-buttons'>
                        {!checked.hasOwnProperty(
                          (row.original as KeyValue).id.toString()
                        ) && (
                          <TableData
                            type='action_buttons'
                            props={{
                              onPencilClick: () => {},
                              onDuplicateClick: () => {},
                              onTrashClick: () => {}
                            }}
                          />
                        )}
                      </span>
                    </td>
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

/*
  useEffect(() => {
    if (onGroupByChange && !compareGroups(groupBy, groupByInfo)) {
      onGroupByChange(groupByInfo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupByInfo]);
  */
