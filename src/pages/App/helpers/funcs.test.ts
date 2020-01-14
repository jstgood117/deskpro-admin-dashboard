import {
  generatePageRoute,
  generateDrawerRoute,
  generatePageRoutes,
  generateDrawerRoutes,
  generateDrawerItemPaths,
} from './funcs';

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


  describe('generatePageRoutes', () => {

    test('calls IoC param function with array of drawerItem paths ', () => {
      const mockGenerateFunc = jest.fn();
      generatePageRoutes(siderbarLinks, mockGenerateFunc);

      expect(mockGenerateFunc).toHaveBeenCalledTimes(1);
      expect(mockGenerateFunc).toHaveBeenCalledWith(navItem, ['/edit']);
    });
  });

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

  describe('generatePageRoute', () => {

    test('given an array of sidebar links, generates page routes', () => {
      const route = generatePageRoute(navItem);
      expect(route.props.path).toEqual(['/']);
    });

    test('given an array of sidebar links, generates page routes and extends path with drawerItem paths', () => {

      const postFixPaths = ['/edit', '/test'];
      const routeWithPostFixPaths = generatePageRoute(navItem, postFixPaths);
      expect(routeWithPostFixPaths.props.path).toEqual(['/', '/edit', '/test']);
    });

  });

  describe('generateDrawerRoute', () => {

    test('given an array of sidebar links, generates drawer routes', () => {
      const route = generateDrawerRoute(navItem);
      expect(route.props.path).toEqual(['/']);
    });
  });

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