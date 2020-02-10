import { IMenuItemProps } from '../../../../resources/interfaces';
import { ActionsType } from '../../../../services/actions/types';

import { getActionFromMenuItem } from '../functions';

describe('getActionFromMenuItem', () => {
  test('returns correct action based on menu item type', () => {
    const action = {
      type: 'action',
      title: 'title',
    };

    const actions: ActionsType[] = [action];

    const menuItem: IMenuItemProps = {
      name:'title',
    };

    const result: ActionsType = getActionFromMenuItem(menuItem, actions);

    expect(result).toEqual(action);
  });

  test('returns correct child action based on menu item type', () => {
    const subAction = {
      type: 'action',
      title: 'subtitle',
    };

    const action = {
      type: 'action',
      title: 'title',
      actions: [subAction]
    };

    const actions: ActionsType[] = [action];

    const menuItem: IMenuItemProps = {
      name:'subtitle',
    };

    const result: ActionsType = getActionFromMenuItem(menuItem, actions);

    expect(result).toEqual(subAction);
  });

  test('returns undefined if not found', () => {
    const subAction = {
      type: 'action',
      title: 'subtitle',
    };

    const action = {
      type: 'action',
      title: 'title',
      actions: [subAction]
    };

    const actions: ActionsType[] = [action];

    const menuItem: IMenuItemProps = {
      name:'unknown',
    };

    const result: ActionsType = getActionFromMenuItem(menuItem, actions);

    expect(result).toEqual(undefined);
  });
});
