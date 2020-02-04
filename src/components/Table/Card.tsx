import React, { FC, useState, useEffect } from 'react';
import {
  useTable,
  useSortBy,
  usePagination,
  useRowSelect,
  useExpanded
} from 'react-table';

import { KeyValue } from '../../types';

import Pagination, { IPageChange } from '../Pagination/Pagination';
import KanbanViewCard from '../Card/KanbanViewCard';
import Header from './Header';
import { TableType, TableParams, SortType } from './types';
import { generateTableParams, generateCardProps } from './helpers/functions';
import { TableStyled, StyledPagination, CardGrid } from './TableStyles';

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

const Card: FC<Props> = ({
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
    prepareRow,
    page,
    rows,
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
    if (fetchData && tableType === 'async') {
      fetchData();
    }
  }, [fetchData, pageIndex, pageSize, tableType]);

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
          rows={rows}
          columns={columns}
          totalRecords={totalRecords}
          rowsPerPage={rowsPerPage}
          currentPage={currentPage}
          handleChangeCurrentPage={handleChangeCurrentPage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          refreshData={fetchData}
        />

        <CardGrid>
          {page.map((row: KeyValue, indexOuter: number) => {
            prepareRow(row);
            return (
              <div key={indexOuter}>
                <KanbanViewCard
                  checkbox={true}
                  styleType='view4'
                  cardDetails={generateCardProps(row)}
                />
              </div>
            );
          })}
        </CardGrid>
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

export default Card;
