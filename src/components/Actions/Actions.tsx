import React, { SFC } from 'react';

import Button from '../Button';
import Menu from '../Menu';
import MultiSelect from '../SelectComponents/MultiSelect';

import { testHandlingTeamList } from '../../resources/constants/constants';
import { IMenuItemProps } from '../../resources/interfaces';
import { IOptions } from '../../types';

type Props = {
  menuItems: IMenuItemProps[];
  menuValue: IMenuItemProps;
  setMenuValue: (val: IMenuItemProps) => void;
  selectOptions: (val: IOptions[]) => void;
  selectedOptions: IOptions[];
};

const Actions: SFC<Props> = ({
  menuItems,
  menuValue,
  setMenuValue,
  selectOptions,
  selectedOptions
}) => {

  const showDeleteModal = (val: boolean) => {};

  return (
    <>
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
    </>
  );
};

export default Actions;