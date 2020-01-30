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

  const sidebarLink: ISidebarSection = {
    'sectionName':'admin_nav.section.setup',
    'icon':'setup',
    'navItems':[
      navItem
    ]
  };

  const sidebarLinks: ISidebarSection[] = [
    sidebarLink
  ];

  describe('generateDrawerRoutes', () => {

    test('calls IoC param function with array of drawerItem paths ', () => {
      const mockGenerateFunc = jest.fn();

      generateDrawerRoutes(sidebarLinks, mockGenerateFunc);

      expect(mockGenerateFunc).toHaveBeenCalledTimes(1);
      expect(mockGenerateFunc).toHaveBeenCalledWith(drawerItem);
    });

    test('works with navItem paths being set', () => {
      const mockGenerateFunc = jest.fn();

      generateDrawerRoutes([{
        ...sidebarLink,
        navItems:[{
          ...navItem,
          path: null,
          paths:['/agents', '/agents/new']
        }]
      }], mockGenerateFunc);

      expect(mockGenerateFunc).toHaveBeenCalledTimes(1);
      expect(mockGenerateFunc).toHaveBeenCalledWith(drawerItem);
    });

    test('doesn`t run if no `path` or `paths`', () => {
      const mockGenerateFunc = jest.fn();

      generateDrawerRoutes([{
        ...sidebarLink,
        navItems:[{
          ...navItem,
          path: null,
          paths:null
        }]
      }], mockGenerateFunc);

      expect(mockGenerateFunc).toHaveBeenCalledTimes(0);
    });

    test('returns empty array if no drawer items', () => {
      const mockGenerateFunc = jest.fn();
      const clondSiderbarLinks: ISidebarSection[] = [{
        ...sidebarLinks[0],
        navItems: [{
          ...navItem,
          drawerItems:[] as ISidebarItem[]
        }]
      }];

      const routes = generateDrawerRoutes(clondSiderbarLinks, mockGenerateFunc);

      expect(routes.length).toEqual(0);
      expect(mockGenerateFunc).toHaveBeenCalledTimes(0);
    });

  });
});