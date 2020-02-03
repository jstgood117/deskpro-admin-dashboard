import React, { FC, SyntheticEvent, useState, useEffect } from 'react';
import { withApollo } from '@apollo/react-hoc';
import { WithApolloClient } from 'react-apollo';
import { CSVLink } from 'react-csv';
import { without } from 'lodash';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { runAction, querySelectOptions } from '../../services/actions/run';
import { ActionFactory } from '../../services/actions/ActionFactory';
import { ActionsType } from '../../services/actions/types';
import { KeyValue, IOptions } from '../../types';
import { IMenuItemProps } from '../../resources/interfaces';

import Actions from '../Actions';
import ActionComponentFactory from '../Actions/helpers/ComponentFactory';
import Checkbox from '../Checkbox';
import Button from '../Button';
import Icon from '../Icon';

import Pagination from '../Pagination/Pagination';

import { IPageChange, objectUseState } from './types';

import {
  TableStyled,
  TableHeader,
  AllCheckStyle,
  StyledHeaderPagination
} from './TableStyles';

import {
  onSelectEverything,
  onSelectAllChange,
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
  rows: any;
  columns: any[];
  totalRecords: number;
  rowsPerPage: number;
  currentPage: number;
  handleChangeCurrentPage: (data: IPageChange) => void;
  handleChangeRowsPerPage: (data: number) => void;
  refreshData: () => void;
};

export type PropsWithApollo = WithApolloClient<Props>;

const Header: FC<PropsWithApollo & WrappedComponentProps> = ({
  client,
  intl,
  setChecked,
  pageSize,
  pageIndex,
  data,
  checked,
  path,
  page,
  rows,
  columns,
  totalRecords,
  rowsPerPage,
  currentPage,
  handleChangeCurrentPage,
  handleChangeRowsPerPage,
  refreshData
}) => {
  const headers = columns.map(column => {
    return { label: intl.formatMessage({ id: column.id }), key: column.id };
  });
  const [opened, clickButton] = useState(false);
  const [menuValue, setMenuValue] = useState();
  const [currentAction, setCurrentAction] = useState<ActionsType>();
  const [selectedOptions, selectOptions] = useState<IOptions[]>([]);

  // Options to use once `action.selectOptions` is DocumentNode
  const [fetchedOptions, setFetchedOptions] = useState<IOptions[]>();
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [isIndeterminate, setIsIndeterminate] = useState<boolean>(false);
  const [dropdownValue, setDropdownValue] = useState();
  const [showActionComponent, setShowActionComponent] = useState(false);

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
        onSelectEverything(rows, setChecked);
      }
      if (dropdownValue.link === 'All on the page') {
        onSelectAllChange(true, setChecked, pageIndex, pageSize, page);
      }
    }

    setDropdownValue(undefined);
  }, [dropdownValue, rows, setChecked, page, pageIndex, pageSize]);

  const handleSelectAllClick = (
    event: SyntheticEvent<HTMLInputElement>,
    _pageIndex: number
  ) => {
    // const finalData = data.concat(page.filter((row: any) => row.isGrouped));
    onSelectAllChange(
      event.currentTarget.checked,
      setChecked,
      _pageIndex,
      pageSize,
      page
    );
  };

  const handleActionClick = async (
    menuItem?: IMenuItemProps,
    action?: ActionsType,
    variables?: object
  ) => {
    setMenuValue(menuItem);

    setCurrentAction(action);

    // If action canceled then stop it
    if (!action) {
      return;
    }

    // If action.selectOptions is DocumentNode then fetch values
    if (action.selectOptions && !Array.isArray(action.selectOptions)) {
      setFetchedOptions([]);
      const options = await querySelectOptions(client, action.selectOptions);
      setFetchedOptions(options || []);
    }

    // If there is no pre-action or dropdown options, run the action
    if (!(action.preAction || action.selectOptions)) {
      handleRunAction(variables);
    }
  };

  const handlePreAction = (action: ActionsType) => {
    setCurrentAction(action);
    setShowActionComponent(true);
  };

  const handleRunAction = async (variables?: object) => {
    if (!currentAction) {
      return false;
    }

    await runAction(client, currentAction, variables);

    refreshData();

    setCurrentAction(undefined);
    setShowActionComponent(false);
  };

  const handleCancelAction = () => {
    setCurrentAction(undefined);
    setShowActionComponent(false);
    selectOptions([]);
    handleActionClick(undefined, undefined, undefined);
  };

  const csvData = generateCSVData(page, columns);
  const items = [{ link: 'All on the page' }, { link: 'All' }];
  const checkedIds = Object.keys(checked);
  const groupIds = rows
    .filter((row: any) => row.isGrouped)
    .map((row: any) => row.id);
  const actions = ActionFactory(path);
  const hasActions = actions && actions.length > 0;

  return (
    <>
      <TableStyled>
        <TableHeader>
          <AllCheckStyle>
            {hasActions && data.length > 0 && (
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
            )}
            {Object.keys(checked).length > 0 && (
              <span className='selected-text'>
                {without(Object.keys(checked), ...groupIds).length} Selected
              </span>
            )}
            {Object.keys(checked).length > 0 && (
              <div style={{ paddingLeft: 16, display: 'flex' }}>
                <Actions
                  path={path}
                  menuValue={menuValue}
                  ids={Object.keys(checked)}
                  onChange={handleActionClick}
                  handlePreAction={handlePreAction}
                  selectOptions={selectOptions}
                  selectedOptions={selectedOptions}
                  fetchedOptions={fetchedOptions}
                />
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
            <StyledHeaderPagination>
              <Pagination
                totalRecords={totalRecords}
                rowsPerPage={rowsPerPage}
                currentPage={currentPage}
                onChangePage={handleChangeCurrentPage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </StyledHeaderPagination>
          )}
        </TableHeader>
      </TableStyled>
      {showActionComponent && currentAction && (
        <ActionComponentFactory
          {...currentAction.preAction}
          ids={checkedIds}
          confirm={handleRunAction}
          cancel={handleCancelAction}
          messageParams={[String(checkedIds.length)]}
        />
      )}
    </>
  );
};

const WithApollo = withApollo<PropsWithApollo & WrappedComponentProps>(Header);
const WithInit = injectIntl(WithApollo);

export default WithInit;
