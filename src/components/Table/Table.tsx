import React, { FC, SyntheticEvent, useState, useEffect } from 'react';
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table';
import { CSVLink } from 'react-csv';
import { injectIntl, WrappedComponentProps } from 'react-intl';

import { IMenuItemProps } from '../../resources/interfaces';

import { testHandlingTeamList } from '../../resources/constants/constants';
import { ActionFactory } from '../../services/actions/ActionFactory';

import Pagination, { IPageChange } from '../Pagination/Pagination';
import Checkbox from '../Checkbox';
import Button from '../Button';
import Icon from '../Icon';
import Menu from '../Menu';
import TableData from '../TableData';
import { generateComponentProps } from '../TableData/apiToComponentAdapter';
import ConfirmDialog from '../Dialog/ConfirmDialog';

import { TableType, TableParams } from './types';
import {
  onCheckboxChange,
  onSelectAllChange,
  onSelectEverything,
  generateTableParams,
  convertActionsToMenuFormat,
  generateCSVData
} from './helpers/functions';
import {
  TableStyled,
  TableHeader,
  AllCheckStyle,
  StyledPagination,
  StyledTh
} from './TableStyles';
import MultiSelect from '../SelectComponents/MultiSelect';

export type IProps = {
  path: string;
  data: any[];
  columns: any[];
  fetchData?: any;
  loading?: boolean;
  pageCount?: number;
  tableType: TableType;
};

const Table: FC<IProps & WrappedComponentProps> = ({
  intl,
  path,
  data,
  columns,
  fetchData,
  loading,
  pageCount: controlledPageCount,
  tableType
}) => {
  let headers = [];
  headers = columns.map(column => {
    return { label: intl.formatMessage({ id: column.id }), key: column.id };
  });

  const tableParams: TableParams = generateTableParams(
    tableType,
    columns,
    data,
    controlledPageCount
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    setPageSize,
    gotoPage,
    state: { pageIndex, pageSize }
  } = useTable(tableParams, useSortBy, usePagination, useRowSelect) as any;

  const csvData = generateCSVData(page, columns);

  useEffect(() => {
    if (fetchData) {
      fetchData({ pageIndex, pageSize });
    }
  }, [fetchData, pageIndex, pageSize]);

  const [checked, setChecked] = useState<object>({});
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [rowsPerPage, setRowsPerPage] = useState<number>(100);
  const [dropdownValue, setDropdownValue] = useState();
  const [opened, clickButton] = useState(false);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [menuValue, setMenuValue] = useState();
  const [deleteModal, showDeleteModal] = useState(false);
  const [selectedOptions, selectOptions] = React.useState([]);
  const [menuItems, setMenuItems] = useState<IMenuItemProps[]>([]);

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
      if (dropdownValue.link === 'All') {
        onSelectEverything(data, setChecked);
      }
      if (dropdownValue.link === 'All on the page') {
        onSelectAllChange(true, setChecked, pageIndex, pageSize, data);
      }
    }

    setDropdownValue(undefined);
  }, [dropdownValue, data, setChecked, pageIndex, pageSize]);

  useEffect(() => {
    const _actions = ActionFactory(path);
    const _menuItems = convertActionsToMenuFormat(_actions);
    setMenuItems(_menuItems);
  }, [path]);

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
                label={
                  menuValue ? menuValue['name'] : 'admin_common.table.action'
                }
                menuItems={menuItems}
                iconName='menu'
              />
              {menuValue && menuValue.name === 'Add Team' && (
                <div style={{ display: 'flex', paddingLeft: 15 }}>
                  <MultiSelect
                    options={testHandlingTeamList}
                    type='fixed'
                    selectOptions={selectOptions}
                  />
                </div>
              )}
              {((menuValue &&
                menuValue.name === 'actions.agents.delete_agent') ||
                selectedOptions.length > 0) && (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ paddingLeft: 16 }}>
                    <Button
                      styleType='primary'
                      onClick={() => {
                        if (menuValue.name === 'actions.agents.delete_agent') {
                          showDeleteModal(true);
                        }
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
                        setMenuValue(undefined);
                        selectOptions([]);
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
          <CSVLink
            data={csvData}
            filename={'export.csv'}
            headers={headers}
            target='_blank'
          >
            <Button styleType='tertiary' size='small' iconOnly={true}>
              <Icon name='export' />
            </Button>
          </CSVLink>
        </div>
        <Pagination
          totalRecords={totalRecords}
          rowsPerPage={rowsPerPage}
          currentPage={currentPage}
          onChangePage={handleChangeCurrentPage}
          onChangeRowsPerPage={handleChangRowsPerPage}
        />
      </TableHeader>
      <div className='overflow'>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup: any, indexOuter: number) => (
              <tr
                key={indexOuter}
                {...(headerGroup.getHeaderGroupProps &&
                  headerGroup.getHeaderGroupProps())}
              >
                <th />
                {headerGroup.headers.map((column: any, indexInner: number) => (
                  <th
                    key={indexInner}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    style={{
                      border: column.isSorted && '1px solid #D3D6D7'
                    }}
                  >
                    <StyledTh>
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
                    checked.hasOwnProperty((row.original as any).id.toString())
                      ? 'row--selected'
                      : ''
                  }
                >
                  <td>
                    <Checkbox
                      value={(row.original as any).id}
                      checked={
                        checked.hasOwnProperty(
                          (row.original as any).id.toString()
                        )
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                    />
                  </td>
                  {row.cells.map((cell: any, indexInner: number) => (
                    <td key={indexInner} {...cell.getCellProps()}>
                      <TableData {...generateComponentProps(cell)} />
                    </td>
                  ))}
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

export default injectIntl(Table);
