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
  return actions.find(action => {
    if(action.title === menuItem.name) {
      return action;
    }

    return (action.actions && action.actions.length > 0)
      ? getActionFromMenuItem(menuItem, action.actions)
      : undefined;
  });
};
