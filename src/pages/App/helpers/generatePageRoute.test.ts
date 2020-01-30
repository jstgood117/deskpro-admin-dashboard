import {
  generatePageRoute,
} from './generatePageRoute';

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

  describe('generatePageRoute', () => {

    test('given an array of sidebar links, generates page routes', () => {
      const routes = generatePageRoute(navItem);
      expect(routes.props.path).toEqual(['/']);
    });

    test('given an array of sidebar links, generates page routes and extends path with drawerItem paths', () => {

      const postFixPaths = ['/edit', '/test'];
      const routesWithPostFixPaths = generatePageRoute(navItem, postFixPaths);
      expect(routesWithPostFixPaths.props.path).toEqual(['/', '/edit', '/test']);
    });

    test('Generates page routes and extends paths array with drawerItem paths using first in array as primaryPath', () => {

      const cloneNavItem: ISidebarItem = {
        ...navItem,
        path: null,
        paths: ['/agents', '/agents/deleted']
      };

      const postFixPaths = ['/agents/edit', '/agents/test'];
      const routesWithPostFixPaths = generatePageRoute(cloneNavItem, postFixPaths);
      expect(routesWithPostFixPaths.props.path).toEqual(['/agents', '/agents/deleted', '/agents/edit', '/agents/test']);
    });

  });
});