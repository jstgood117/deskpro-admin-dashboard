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
import Icon from '../Icon';
import Header from './Header';
import { TableType, TableParams, SortType, HeaderGroup, ColumnMeta } from './types';
import {
  onCheckboxChange,
  generateTableParams,
  compareSorts,
  compareGroups
} from './helpers/tableFn';
import { TableStyled, StyledPagination, StyledTh } from './TableStyles';
import Tooltip from '../Tooltip';
import { API_ChatDepartment } from '../../codegen/types';
import { ActionFactory } from '../../services/actions/ActionFactory';
import TableTr from './TableTr';
import TableTrGroup from './TableTrGroup';
import { resizableTable } from './helpers/editColumnFn';

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
  const [groupColumn, setGroupColumn] = useState<ColumnMeta>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(100);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [firstGrouped, setFirstGrouped] = useState<boolean>(false);
  const [currentSort, setCurrentSort] = useState<SortType[]>([{ id: 'name', desc: false }]);
  const actions = ActionFactory(path);
  const hasActions = actions && actions.length > 0;

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
    groupedRows,
    rows,
    page,
    setPageSize,
    gotoPage,
    toggleRowExpanded,
    dispatch,
    state: { pageIndex, pageSize, sortBy: sortByInfo, groupBy: groupByInfo }
  } = useTable(
    tableParams,
    useGroupBy,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
  ) as any;

  useEffect(() => {
    if (sortBy.length > 0 && !compareSorts(sortBy, currentSort)) {
      toggleSortBy(sortBy[0].id, sortBy[0].desc, false);
      const currentPageFiltered = page
        .filter((r: any) => r.canExpand && r.isExpanded);
      currentPageFiltered.map((r: any) => r.toggleRowExpanded());
      currentPageFiltered.map((r: any) => r.toggleRowExpanded());
    }
  }, [page, currentSort, toggleSortBy, sortBy]);

  useEffect(() => {
    if (onSortChange && !compareSorts(currentSort, sortByInfo)) {
      setCurrentSort(sortByInfo);
      onSortChange(sortByInfo);
    }
  }, [sortByInfo, onSortChange, currentSort]);

  useEffect(() => {
    if (fetchData && tableType === 'async') {
      fetchData();
    }
  }, [fetchData, pageIndex, pageSize, tableType]);

  useEffect(() => {
    if (groupBy && groupBy.length) {
      let countExpanded = 0;
      if (firstGrouped) {
        countExpanded = page
          .filter((r: any) => r.canExpand && r.isExpanded === undefined)
          .map((r: any) => r.toggleRowExpanded()).length;
        if (countExpanded > 0) {
          setFirstGrouped(false);
        }
      }
    } else {
      page.map((row: { canExpand: any; id: any }) => {
        if (row.canExpand) toggleRowExpanded(row.id, true);
        return true;
      });
    }
  }, [firstGrouped, toggleRowExpanded, pageIndex, page, groupBy]);

  useEffect(() => {
    setChecked({});
    setCurrentPage(1);
    gotoPage(0);
  }, [groupBy, gotoPage]);

  useEffect(() => {
    let totalRecord = data.length;
    if (groupBy && groupBy.length) {
      setGroupColumn(columns.find((_col: ColumnMeta) => groupBy[0] === _col.id));
      let countSubRow = 0;
      const groups = _.sortBy(groupedRows.filter((r: any) => r.isGrouped), 'index');
      const groupsNoExpanded = page.filter((r: any) => r.canExpand && r.isExpanded === undefined);
      _.map(groupsNoExpanded, ({ subRows }) => countSubRow += subRows.length);

      totalRecord += groups.length || 0;
      totalRecord -= countSubRow;
    }
    setTotalRecords(totalRecord);
  }, [data, page, groupBy, toggleRowExpanded, groupedRows, columns]);

  // Handle incoming group by
  useEffect(() => {
    if (!compareGroups(groupBy, groupByInfo)) {
      setFirstGrouped(true);
      dispatch({ type: 'resetGroupBy' });
      if (groupBy[0]) {
        toggleGroupBy(groupBy[0], true);
      }
    }
  }, [groupByInfo, groupBy, dispatch, toggleGroupBy]);

  useEffect(() => {
    resizableTable();
  });

  const handleCheckboxChange = async (
    event: SyntheticEvent<HTMLInputElement>,
    subRows: API_ChatDepartment[]
  ) => {
    onCheckboxChange(event.currentTarget.value, checked, setChecked, subRows, {
      isGrouped: groupBy && groupBy.length > 0,
      groupedRows
    });
  };

  const handleChangeCurrentPage = (datas: IPageChange) => {
    setCurrentPage(datas.currentPage);
    gotoPage(datas.currentPage - 1);
  };

  const handleChangeRowsPerPage = (_rows: number) => {
    setPageSize(_rows);
    setRowsPerPage(_rows);
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
        <div style={{ overflow: 'auto' }}>
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
                            {...column.getHeaderProps()}
                            style={{
                              border: column.isSorted && '1px solid #D3D6D7',
                              width: isIdColumn ? 1 : column.width || 'auto'
                            }}
                            data-colindex={indexInner}
                          >
                            <StyledTh
                              {...column.getSortByToggleProps({
                                onClick: () => {
                                  onSortChange([{ id: column.id, desc: !column.isSortedDesc }]);
                                }
                              })}
                              alignRight={isIdColumn}
                            >
                              {column.render('Header')}
                              {column.isSorted && (
                                <>
                                  <span className='sort-icon'>
                                    <Icon
                                      name={
                                        column.isSortedDesc
                                          ? 'ic-sort-up-active'
                                          : 'ic-sort-down-active'
                                      }
                                    />
                                  </span>
                                  <Tooltip
                                    content='Filter'
                                    styleType='dark'
                                    placement='bottom'
                                  >
                                    <span className='filter-icon'>
                                      <Icon name='filter' />
                                    </span>
                                  </Tooltip>
                                </>
                              )}
                            </StyledTh>
                            <div className='resizer' />
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
                  <TableTrGroup
                    indexOuter={indexOuter}
                    page={page}
                    key={indexOuter}
                    row={row}
                    groupColumn={groupColumn}
                    checked={checked}
                    hasActions={hasActions}
                    prepareRow={prepareRow}
                    handleCheckboxChange={handleCheckboxChange}
                  />
                ) : (
                    <TableTr
                      indexOuter={indexOuter}
                      page={page}
                      key={indexOuter}
                      row={row}
                      checked={checked}
                      hasActions={hasActions}
                      handleCheckboxChange={handleCheckboxChange}
                    />
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
