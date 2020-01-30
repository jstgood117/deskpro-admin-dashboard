import {
  generateDrawerRoute,
} from './generateDrawerRoute';

import { ISidebarItem } from '../../../resources/interfaces';

describe('generateDrawerRoute', () => {

  const drawerItem: ISidebarItem = {
    'itemName':'admin_sidebar.item.edit',
    'path':'/edit',
    'pageType':'EditAgentForm',
    'metadataQuery':''
  };

  const navItem: ISidebarItem = {
    'itemName':'admin_nav.item.dashboard',
    'path':'/test-route',
    'pageType':'',
    'metadataQuery':'',
    'drawerItems': [drawerItem]
  };

  test('generates a route with a drawer component attached', () => {
    const result = generateDrawerRoute(navItem);
    expect(result.props.path).toEqual(['/test-route']);

    const renderResult = result.props.render();
    expect(renderResult.type.displayName).toBe('withRouter(DrawerType)');
  });

  test('when `paths` is set, use it to generate paths for key and path of route', () => {
    const result = generateDrawerRoute({
      ...navItem,
      path: null,
      paths: ['/agent', '/agent/deleted']
    });
    expect(result.key).toEqual('/agent');
    expect(result.props.path).toEqual(['/agent', '/agent/deleted']);
  });
});
