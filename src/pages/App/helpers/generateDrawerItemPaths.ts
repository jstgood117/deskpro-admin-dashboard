import { ISidebarItem } from '../../../resources/interfaces';

export const generateDrawerItemPaths = (_section: ISidebarItem): string[] => {

  if(_section.drawerItems && _section.drawerItems.length > 0) {
    return _section.drawerItems.map(_item => {
      if(Array.isArray(_item.paths)) {
        return _item.paths[0];
      } else {
        return _item.path;
      }
    });
  }

  return [] as string[];
};