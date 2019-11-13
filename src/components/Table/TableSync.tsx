import React, { FC, SyntheticEvent, useState, useEffect } from 'react';
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table';
import { onCheckboxChange, onSelectAllChange } from './helpers/functions';

import { TableStyled } from './Table';
import Checkbox from '../Checkbox';
import * as Cell from './Cell';
import Button from '../Button';
import Icon from '../Icon';
import styled from 'styled-components';
import Pagination, { IPageChange } from '../Pagination/Pagination';

type TableAsyncProps = {
  data: any[];
  columns: any[];
};

const Table: FC<TableAsyncProps> = ({ data, columns }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state: { pageIndex, pageSize }
  } = useTable<any>(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }
    },
    useSortBy,
    usePagination,
    useRowSelect
  ) as any;

  const [checked, setChecked] = useState<object>({});
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isAllIndeterminate, setIsAllIndeterminate] = useState(false);

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

  useEffect(() => {
    const checkedLength = Object.keys(checked).length;
    const indeterminate = (checkedLength !== 0 && checkedLength !== page.length) ? true : false;
    setIsAllIndeterminate(indeterminate);
    setIsAllChecked((indeterminate || checkedLength === page.length) ? true : false);

  }, [checked, page]);


  useEffect(() => {
    setChecked({});
  }, [pageIndex, data]);

  const [opened, clickButton] = useState(false);
  const [dropdownValue, setDropdownValue] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangeCurrentPage = (datas: IPageChange) => {
    setCurrentPage(datas.currentPage);
  };

  useEffect(() => {

    const deleteChecked = () => {
      // console.log(checked);
    };

    if(dropdownValue) {
      const { link } = dropdownValue;
      switch(true) {
        case link === 'Delete':
          deleteChecked();
          break;
      }
    }

    setDropdownValue(undefined);

  }, [dropdownValue, checked]);

  const handleChangRowsPerPage = (datas: number) => {
    setRowsPerPage(datas);
    setCurrentPage(1);
  };
  const items = [{ link: 'Delete' }];
  const AllCheckStyle = styled.div`
    flex: 1;
    button {
      display: contents;
      svg {
        padding-left: 10px;
      }
    }
  `;

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
            value={0}
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
        </AllCheckStyle>
        <div style={{ paddingRight: 24 }}>
          <Button styleType='tertiary' size='small' iconOnly={true}>
            <Icon name='export' />
          </Button>
        </div>
        <Pagination
          totalRecords={1734}
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
              <th>&nbsp;</th>
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
              <tr key={indexOuter} {...row.getRowProps()}>
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
      <Pagination
        totalRecords={1734}
        rowsPerPage={rowsPerPage}
        currentPage={currentPage}
        onChangePage={handleChangeCurrentPage}
        onChangeRowsPerPage={handleChangRowsPerPage}
      />
    </TableStyled>
  );
};

export default Table;
