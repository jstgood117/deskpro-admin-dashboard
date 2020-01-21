import { IMenuItemProps } from '../../../resources/interfaces';
import { ActionsType } from '../../../services/actions/types';

const generateMenuItem = (item: ActionsType) => {
  switch (item.type) {
    case 'mutate':
      return {
        name: item.title,
        ...(item.icon && { icon: item.icon })
      };
    case 'separator':
      return {};
    case 'folder':
      return {
        name: item.title,
        icon: item.icon,
        subItems: convertActionsToMenuFormat(item.actions)
      };
  }
};

export const convertActionsToMenuFormat = (
  actions: ActionsType[]
): IMenuItemProps[] => {
  if (!actions) {
    return [];
  }

  return actions.map(_item => generateMenuItem(_item));
};

export const getActionFromMenuItem = (menuItem: IMenuItemProps, actions: ActionsType[]): ActionsType => {

  let action: ActionsType;
  actions.forEach(_action => {
    if(_action.title === menuItem.name) {
      action = _action;
    }

    if(!action) {
      action = (_action.actions && _action.actions.length > 0)
        ? getActionFromMenuItem(menuItem, _action.actions)
        : undefined;
    }
  });

  return action;
};
