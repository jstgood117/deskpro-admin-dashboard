import React, { FC, SyntheticEvent, useState, useEffect } from 'react';
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table';
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
import {
  TableStyled,
  TableHeader,
  AllCheckStyle,
  StyledPagination
} from './TableStyles';
import Menu from '../Menu';
import { testDropdownItemsWithIcon } from '../../resources/constants/constants';
import ConfirmDialog from '../Dialog/ConfirmDialog';

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
  const [menuValue, setMenuValue] = useState();
  const [deleteModal, showDeleteModal] = useState(false);

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
      dropdownValue.link === 'All' && onSelectEverything(data, setChecked);
      dropdownValue.link === 'All on the page' &&
        onSelectAllChange(true, setChecked, pageIndex, pageSize, data);
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
          {Object.keys(checked).length > 0 && (
            <div style={{ paddingLeft: 16, display: 'flex' }}>
              <Menu
                value={menuValue}
                onSelect={val => setMenuValue(val)}
                label={menuValue ? menuValue['name'] : 'Action'}
                menuItems={testDropdownItemsWithIcon}
                iconName='menu'
              />
              {menuValue && (
                <div style={{ display: 'flex' }}>
                  <div style={{ paddingLeft: 16 }}>
                    <Button
                      styleType='primary'
                      onClick={() => {
                        showDeleteModal(true);
                      }}
                    >
                      Confirm
                    </Button>
                  </div>
                  <div style={{ paddingLeft: 16 }}>
                    <Button
                      styleType='tertiary'
                      onClick={() => {
                        setMenuValue(undefined);
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </div>
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
      <ConfirmDialog
        icon='trash'
        isOpen={deleteModal}
        variant='danger'
        title='Delete agent?'
        leftButtonText='Delete Agents'
        rightButtonText='Keep Agents'
        onLeftButtonClick={() => {
          showDeleteModal(false);
          setMenuValue(undefined);
          setIsAllChecked(false);
          setChecked({});
        }}
        onRightButtonClick={() => {
          showDeleteModal(false);
          setMenuValue(undefined);
          setIsAllChecked(false);
          setChecked({});
        }}
        text={`Deleting 304 agents will change their status to 'deleted'`}
      />
    </TableStyled>
  );
};

export default Table;
