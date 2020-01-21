import React, { FC, SyntheticEvent, useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import { injectIntl, WrappedComponentProps } from 'react-intl';

import Pagination from '../Pagination/Pagination';
import { KeyValue } from '../../types';
import { IMenuItemProps } from '../../resources/interfaces';
import { testHandlingTeamList } from '../../resources/constants/constants';
import { ActionFactory } from '../../services/actions/ActionFactory';

import Checkbox from '../Checkbox';
import Button from '../Button';
import Icon from '../Icon';
import Menu from '../Menu';
import MultiSelect from '../SelectComponents/MultiSelect';
import ConfirmDialog from '../Dialog/ConfirmDialog';

import { IPageChange, objectUseState } from './types';

import { TableStyled, TableHeader, AllCheckStyle, StyledPagination } from './TableStyles';

import {
  onSelectEverything,
  onSelectAllChange,
  convertActionsToMenuFormat,
  generateCSVData
} from './helpers/functions';

export type Props = {
  setChecked: objectUseState;
  pageSize: number;
  pageIndex: number;
  data: KeyValue[];
  checked: object;
  path: string;
  page: any;
  columns: any[];
  totalRecords: number;
  rowsPerPage: number;
  currentPage: number;
  handleChangeCurrentPage: (data: IPageChange) => void;
  handleChangeRowsPerPage: (data: number) => void;
};

const Header: FC<Props & WrappedComponentProps> = ({
  intl,
  setChecked,
  pageSize,
  pageIndex,
  data,
  checked,
  path,
  page,
  columns,
  totalRecords,
  rowsPerPage,
  currentPage,
  handleChangeCurrentPage,
  handleChangeRowsPerPage
}) => {
  const headers = columns.map(column => {
    return { label: intl.formatMessage({ id: column.id }), key: column.id };
  });

  const [opened, clickButton] = useState(false);
  const [menuValue, setMenuValue] = useState();
  const [deleteModal, showDeleteModal] = useState(false);
  const [selectedOptions, selectOptions] = React.useState([]);
  const [menuItems, setMenuItems] = useState<IMenuItemProps[]>([]);
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [isIndeterminate, setIsIndeterminate] = useState<boolean>(false);
  const [dropdownValue, setDropdownValue] = useState();

  useEffect(() => {
    const _actions = ActionFactory(path);
    const _menuItems = convertActionsToMenuFormat(_actions);
    setMenuItems(_menuItems);
  }, [path]);

  useEffect(() => {
    const checkedLength = Object.keys(checked).length;
    const indeterminate =
      checkedLength !== 0 && checkedLength < page.length ? true : false;
    setIsIndeterminate(indeterminate);
    setIsAllChecked(
      indeterminate || checkedLength >= page.length ? true : false
    );
  }, [checked, page]);

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

  const csvData = generateCSVData(page, columns);
  const items = [{ link: 'All on the page' }, { link: 'All' }];
  return (
    <>
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
              indeterminate={isIndeterminate}
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
                          if (
                            menuValue.name === 'actions.agents.delete_agent'
                          ) {
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
          {page.length > 0 && (
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
          )}
          {page.length > 0 && (
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
        </TableHeader>
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
    </>
  );
};

export default injectIntl(Header);
