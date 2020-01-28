import {
  generatePageRoutes,
} from './generatePageRoutes';

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

});