import React, { FC, SyntheticEvent, useState, useEffect } from 'react';
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table';

import Pagination, { IPageChange } from '../Pagination/Pagination';
import {
  onCheckboxChange,
  onSelectAllChange,
  onSelectEverything
} from './helpers/functions';
import {
  TableStyled,
  TableProps,
  TableHeader,
  AllCheckStyle,
  getTable,
  StyledPagination,
  StyledExportButton
} from './Table';

import Checkbox from '../Checkbox';
import Button from '../Button';
import Icon from '../Icon';

const TableAsync: FC<TableProps> = ({
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
    setPageSize,
    gotoPage,
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
  const [checked, setChecked] = useState<object>({});
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [isAllIndeterminate, setIsAllIndeterminate] = useState<boolean>(false);
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
    setIsAllIndeterminate(indeterminate);
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
            indeterminate={isAllIndeterminate}
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
        <StyledExportButton>
          <Button styleType='tertiary' size='small' iconOnly={true}>
            <Icon name='export' />
          </Button>
        </StyledExportButton>
        <Pagination
          totalRecords={totalRecords}
          rowsPerPage={rowsPerPage}
          currentPage={currentPage}
          onChangePage={handleChangeCurrentPage}
          onChangeRowsPerPage={handleChangRowsPerPage}
        />
      </TableHeader>
      {getTable(
        headerGroups,
        getTableBodyProps,
        page,
        prepareRow,
        checked,
        getTableProps,
        handleCheckboxChange
      )}
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

export default TableAsync;
