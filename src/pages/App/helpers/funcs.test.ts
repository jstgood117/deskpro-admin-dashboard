import {
  generatePageRoute,
  generateDrawerRoute,
  generatePageRoutes,
  generateDrawerRoutes,
} from './funcs';

describe('App helper functions', () => {

  const drawerItem = {
    'itemName':'admin_sidebar.item.edit',
    'path':'/edit',
    'pageType':'EditAgentForm',
    'metadataQuery':'',
    '__typename':'SidebarItem',
  };

  const navItem = {
    'itemName':'admin_nav.item.dashboard',
    'path':'/',
    'pageType':'',
    'metadataQuery':'',
    '__typename':'SidebarItem',
    'drawerItems': [drawerItem]
  };

  const siderbarLinks = [
    {
      'sectionName':'admin_nav.section.setup',
      'icon':'setup','navItems':[
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
});