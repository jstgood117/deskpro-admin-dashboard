import React, { FC, SyntheticEvent, useState, useEffect } from 'react';
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table';
import { onCheckboxChange, onSelectAllChange, onSelectEverything } from './helpers/functions';

import { TableStyled } from './Table';
import Checkbox from '../Checkbox';
import * as Cell from './Cell';
import styled from 'styled-components';
import Button from '../Button';
import Icon from '../Icon';
import Pagination, { IPageChange } from '../Pagination/Pagination';

type TableAsyncProps = {
  data: any[];
  columns: any[];
  fetchData: any;
  loading: boolean;
  pageCount: number;
};

const AllCheckStyle = styled.div`
flex: 1;
button {
  display: contents;
  svg {
    padding-left: 10px;
  }
}
.selected-text {
  padding-left:17px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  color:${props => props.theme.activeColour};
}
`;


const TableAsync: FC<TableAsyncProps> = ({
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
    gotoPage(datas.currentPage-1);
  };

  const handleChangRowsPerPage = (rows: number) => {
    setPageSize(rows);
    setRowsPerPage(rows);
    setCurrentPage(1);
    gotoPage(0);
  };

  useEffect(() => {
    const checkedLength = Object.keys(checked).length;
    const indeterminate = (checkedLength !== 0 && checkedLength < page.length) ? true : false;
    setIsAllIndeterminate(indeterminate);
    setIsAllChecked((indeterminate || checkedLength >= page.length) ? true : false);

  }, [checked, page]);


  useEffect(() => {
    setChecked({});
    setTotalRecords(data.length);
  }, [pageIndex, data]);

  useEffect(() => {

    if(dropdownValue) {
      const { link } = dropdownValue;
      switch(link) {
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

  const items = [{ link: 'All on the page'}, { link: 'All' }];

  return (
    <TableStyled>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingTop: 9,
          paddingBottom: 10
        }}
      >
        <AllCheckStyle>
          <Checkbox
            value={String(0)}
            indeterminate={isAllIndeterminate}
            checked={isAllChecked}
            onChange={(event: SyntheticEvent<HTMLInputElement>) =>
              handleSelectAllClick(event, pageIndex)
            }
          />
          <Button
            items={items}
            size='medium'
            styleType='secondary'
            iconOnly={true}
            onClick={() => {
              clickButton(!opened);
            }}
            dropdownValue={dropdownValue}
            opened={opened}
            onSelect={(val: any) => setDropdownValue(val)}
          >
            <Icon name='downVector' />
          </Button>
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
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup: any, indexOuter: number) => (
            <tr key={indexOuter} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any, indexInner: number) => (
                <th
                  key={indexInner}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' v' : ' ^') : ''}
                  </span>
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
                className={checked.hasOwnProperty(row.original.id.toString())
                  ? 'row--selected'
                  : ''}
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
                {row.cells.map((cell: any, indexInner: number) => {
                  return (
                    <td key={indexInner} {...cell.getCellProps()}>
                      {Cell.create(cell)}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          Showing {page.length} of ~{controlledPageCount * pageSize} results
        </div>
      )}
      {!loading && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingTop: 9,
            paddingBottom: 10
          }}
        >
          <Pagination
            totalRecords={totalRecords}
            rowsPerPage={rowsPerPage}
            currentPage={currentPage}
            onChangePage={handleChangeCurrentPage}
            onChangeRowsPerPage={handleChangRowsPerPage}
          />
        </div>
      )}
    </TableStyled>
  );
};

export default TableAsync;
