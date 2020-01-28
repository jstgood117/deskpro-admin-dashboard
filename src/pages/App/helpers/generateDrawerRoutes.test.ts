import {
  generateDrawerRoutes,
} from './generateDrawerRoutes';

import { ISidebarSection, ISidebarItem } from '../../../resources/interfaces';

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

  const siderbarLinks: ISidebarSection[] = [
    {
      'sectionName':'admin_nav.section.setup',
      'icon':'setup',
      'navItems':[
        navItem
      ]
  }];

  describe('generateDrawerRoutes', () => {

    test('calls IoC param function with array of drawerItem paths ', () => {
      const mockGenerateFunc = jest.fn();

      generateDrawerRoutes(siderbarLinks, mockGenerateFunc);

      expect(mockGenerateFunc).toHaveBeenCalledTimes(1);
      expect(mockGenerateFunc).toHaveBeenCalledWith(drawerItem);
    });

    test('returns empty array if no drawer items', () => {
      const mockGenerateFunc = jest.fn();
      const clonedSiderbarLinks: ISidebarSection[] = [{
        ...siderbarLinks[0],
        navItems: [{
          ...navItem,
          drawerItems:[] as ISidebarItem[]
        }]
      }];
      const routes = generateDrawerRoutes(clonedSiderbarLinks, mockGenerateFunc);

      expect(routes.length).toEqual(0);
      expect(mockGenerateFunc).toHaveBeenCalledTimes(0);
    });
  });
});