import {
  generateDrawerItemPaths,
} from './generateDrawerItemPaths';

import { ISidebarItem } from '../../../resources/interfaces';

describe('App helper functions', () => {

  const drawerItem: ISidebarItem = {
    'itemName':'admin_sidebar.item.edit',
    'path':'/edit',
    'pageType':'EditAgentForm',
    'metadataQuery':''
  };

  const navItem: ISidebarItem = {
    'itemName':'admin_nav.item.dashboard',
    'path':'/',
    'pageType':'',
    'metadataQuery':'',
    'drawerItems': [drawerItem]
  };


  describe('generateDrawerItemPaths', () => {
    test('returns drawerPath array of objects as an array string paths', () => {
      const result = generateDrawerItemPaths(navItem);

      expect(result).toEqual(['/edit']);
    });

    test('returns empty array if no drawerItems', () => {

      const clonedNavItem = {
        ...navItem,
        drawerItems:[] as ISidebarItem[]
      } as ISidebarItem;

      const result = generateDrawerItemPaths(clonedNavItem);

      expect(result).toEqual([]);
    });
  });
});