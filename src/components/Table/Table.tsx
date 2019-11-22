import React, { FC, SyntheticEvent, useState, useEffect } from 'react';
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table';
import styled from 'styled-components';

import { dpstyle } from '../Styled';
import Pagination, { IPageChange } from '../Pagination/Pagination';
import {
  onCheckboxChange,
  onSelectAllChange,
  onSelectEverything
} from './helpers/functions';

import Checkbox from '../Checkbox';
import Button from '../Button';
import * as Cell from './Cell';
import Icon from '../Icon';

const TableStyled = styled(dpstyle.div)`
  & table {
    width: 100%;
    border-collapse: collapse;
    & thead {
      & tr {
        height: 28px;
        border-top: 1px solid ${props => props.theme.greyLight};
        border-bottom: 1px solid ${props => props.theme.greyLight};
        & th {
          white-space: nowrap;
          padding: 0 16px 0 0;
          font-weight: 600;
          font-size: 14px;
          line-height: 150%;
          color: ${props => props.theme.greyDark};
          text-align: left;
        }
      }
    }
    & tbody {
      & tr {
        &.row--selected {
          background-color: ${props => props.theme.greyLight};
          td {
            .text {
              color: ${props => props.theme.activeColour} !important;
            }
          }
        }
        border-bottom: 1px solid ${props => props.theme.greyLighter};
        & td {
          padding: 0 16px 0 0;
          text-align: left;
          line-height: 44px;
          color: ${props => props.theme.staticColour};
          > * {
            white-space: nowrap;
            flex-wrap: nowrap;
          }
          & img {
            width: 25px;
            height: 25px;
            border-radius: 12px;
            vertical-align: middle;
            margin-right: 15px;
          }
        }
      }
    }
  }
`;

const TableHeader = styled(dpstyle.div)`
  display: flex;
  align-items: center;
  padding-top: 9px;
  padding-bottom: 11px;
`;

const AllCheckStyle = styled(dpstyle.div)`
  display: flex;
  align-items: center;
  flex: 1;
  .selected-text {
    padding-left: 15px;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 150%;
    color: ${props => props.theme.activeColour};
  }
`;

const StyledPagination = styled(dpstyle.div)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 24px;
  padding-bottom: 10px;
`;

export type IProps = {
  data: any[];
  columns: any[];
  fetchData?: any;
  loading?: boolean;
  pageCount?: number;
  tableType: 'sync' | 'async';
};

const Table: FC<IProps> = ({
  data,
  columns,
  fetchData,
  loading,
  pageCount: controlledPageCount,
  tableType
}) => {
  const useTableParam =
    tableType === 'async'
      ? {
          columns,
          data,
          initialState: { pageIndex: 0 },
          manualPagination: true,
          pageCount: controlledPageCount
        }
      : {
          columns,
          data,
          initialState: { pageIndex: 0 }
        };
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    setPageSize,
    gotoPage,
    state: { pageIndex, pageSize }
  } = useTable(
    useTableParam as any,
    useSortBy,
    usePagination,
    useRowSelect
  ) as any;

  useEffect(() => {
    fetchData && fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);

  const [checked, setChecked] = useState<object>({});
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [dropdownValue, setDropdownValue] = useState();
  const [opened, clickButton] = useState(false);
  const [totalRecords, setTotalRecords] = useState<number>(0);

  const handleSelectAllClick = (
    event: SyntheticEvent<HTMLInputElement>,
    _pageIndex: number
  ) => {
    onSelectAllChange(
      event.currentTarget.checked,
      setChecked,
      _pageIndex,
      pageSize,
      data
    );
  };

  const handleCheckboxChange = (event: SyntheticEvent<HTMLInputElement>) => {
    onCheckboxChange(event.currentTarget.value, checked, setChecked);
  };

  const handleChangeCurrentPage = (datas: IPageChange) => {
    setCurrentPage(datas.currentPage);
    gotoPage(datas.currentPage - 1);
  };

  const handleChangRowsPerPage = (rows: number) => {
    setPageSize(rows);
    setRowsPerPage(rows);
    setCurrentPage(1);
    gotoPage(0);
  };

  useEffect(() => {
    const checkedLength = Object.keys(checked).length;
    const indeterminate =
      checkedLength !== 0 && checkedLength < page.length ? true : false;
    setIsAllChecked(
      indeterminate || checkedLength >= page.length ? true : false
    );
  }, [checked, page]);

  useEffect(() => {
    setChecked({});
    setTotalRecords(data.length);
  }, [pageIndex, data]);

  useEffect(() => {
    if (dropdownValue) {
      const { link } = dropdownValue;
      switch (link) {
        case 'All':
          onSelectEverything(data, setChecked);
          break;

        case 'All on the page':
          onSelectAllChange(true, setChecked, pageIndex, pageSize, data);
          break;
        default:
          break;
      }
    }

    setDropdownValue(undefined);
  }, [dropdownValue, data, setChecked, pageIndex, pageSize]);

  const items = [{ link: 'All on the page' }, { link: 'All' }];

  return (
    <TableStyled>
      <TableHeader>
        <AllCheckStyle>
          <Checkbox
            checked={isAllChecked}
            opened={opened}
            clickButton={clickButton}
            setDropdownValue={setDropdownValue}
            dropdownValue={dropdownValue}
            items={items}
            value='checked'
            indeterminate={true}
            showArrow={true}
            onChange={(event: SyntheticEvent<HTMLInputElement>) =>
              handleSelectAllClick(event, pageIndex)
            }
          />
          {Object.keys(checked).length > 0 && (
            <span className='selected-text'>
              {Object.keys(checked).length} Selected
            </span>
          )}
        </AllCheckStyle>
        <div style={{ paddingRight: 24 }}>
          <Button styleType='tertiary' size='small' iconOnly={true}>
            <Icon name='export' />
          </Button>
        </div>
        <Pagination
          totalRecords={totalRecords}
          rowsPerPage={rowsPerPage}
          currentPage={currentPage}
          onChangePage={handleChangeCurrentPage}
          onChangeRowsPerPage={handleChangRowsPerPage}
        />
      </TableHeader>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup: any, indexOuter: number) => (
            <tr key={indexOuter} {...headerGroup.getHeaderGroupProps()}>
              <th />
              {headerGroup.headers.map((column: any, indexInner: number) => (
                <th
                  key={indexInner}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any, indexOuter: number) => {
            prepareRow(row);
            return (
              <tr
                key={indexOuter}
                {...row.getRowProps()}
                className={
                  checked.hasOwnProperty(row.original.id.toString())
                    ? 'row--selected'
                    : ''
                }
              >
                <td>
                  <Checkbox
                    value={row.original.id}
                    checked={
                      checked.hasOwnProperty(row.original.id.toString())
                        ? true
                        : false
                    }
                    onChange={handleCheckboxChange}
                  />
                </td>
                {row.cells.map((cell: any, indexInner: number) => (
                  <td key={indexInner} {...cell.getCellProps()}>
                    {Cell.create(cell)}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {!loading && (
        <StyledPagination>
          <Pagination
            totalRecords={totalRecords}
            rowsPerPage={rowsPerPage}
            currentPage={currentPage}
            onChangePage={handleChangeCurrentPage}
            onChangeRowsPerPage={handleChangRowsPerPage}
          />
        </StyledPagination>
      )}
    </TableStyled>
  );
};

export default Table;
