import React, { FC, useState, useEffect } from 'react';

import Button from '../Button';
import Menu from '../Menu';
import MultiSelect from '../SelectComponents/MultiSelect';

import { ActionFactory } from '../../services/actions/ActionFactory';
import { ActionsType } from '../../services/actions/types';
import { IMenuItemProps } from '../../resources/interfaces';
import { IOptions } from '../../types';

import {
  convertActionsToMenuFormat,
  getActionFromMenuItem
} from './helpers/functions';

export type Props = {
  path: string;
  menuValue: IMenuItemProps;
  onChange: (
    menuItem?: IMenuItemProps,
    action?: ActionsType,
    variables?: object
  ) => void;
  selectOptions: (val: IOptions[]) => void;
  selectedOptions: IOptions[];
  handlePreAction: (action: ActionsType) => void;
  ids: string[];
};

const Actions: FC<Props> = ({
  ids,
  path,
  menuValue,
  onChange,
  selectOptions,
  selectedOptions,
  handlePreAction
}) => {
  const [menuItems, setMenuItems] = useState<IMenuItemProps[]>([]);
  const [actions, setActions] = useState<ActionsType[]>([]);
  const [currentAction, setCurrentAction] = useState<ActionsType>();

  useEffect(() => {
    const _actions = ActionFactory(path);
    setActions(_actions);
    const _menuItems = convertActionsToMenuFormat(_actions);
    setMenuItems(_menuItems);
  }, [path]);

  const onSelect = (val: IMenuItemProps) => {
    const action = getActionFromMenuItem(val, actions);
    setCurrentAction(action);
    onChange(val, action, { ids });
  };

  return (
    <>
      {!menuValue && (
        <Menu
          value={menuValue}
          onSelect={onSelect}
          label={menuValue ? menuValue['name'] : 'admin_common.table.action'}
          menuItems={menuItems}
          iconName='menu'
        />
      )}
      {currentAction && currentAction.selectOptions && (
        <div style={{ display: 'flex', paddingLeft: 15 }}>
          <MultiSelect
            options={currentAction.selectOptions}
            type='fixed'
            selectOptions={selectOptions}
          />
        </div>
      )}
      {((currentAction && currentAction.preAction) ||
        selectedOptions.length > 0) && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ paddingLeft: 16 }}>
            <Button
              styleType='primary'
              onClick={() => {
                if (currentAction.preAction) {
                  handlePreAction(currentAction);
                  setCurrentAction(undefined);
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
                onChange(undefined, undefined, undefined);
                selectOptions([]);
                setCurrentAction(undefined);
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
