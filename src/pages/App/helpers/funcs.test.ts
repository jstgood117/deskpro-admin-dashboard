import { generatePageRoutes } from './funcs';

describe('Routes', () => {
  describe('generatePageRoutes', () => {

    const siderbarLinks = [
      {'sectionName':'admin_nav.section.setup','icon':'setup','navItems':[
        {'itemName':'admin_nav.item.dashboard','path':'/','pageType':'','metadataQuery':'','__typename':'SidebarItem'}
      ]
    }];

    test('given an array of sidebar links, generates routes', () => {
      const routes = generatePageRoutes(siderbarLinks);

      expect(routes).toHaveLength(1);
      expect(routes[0].props.path).toBe('/');
    });
  });
});