import {
  generatePageRouteComponent,
} from './generatePageRouteComponent';

import { ISidebarItem } from '../../../resources/interfaces';

jest.mock('../../PageType', () => 'page-type');

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

  test('generates a page route when `path`, and `paths` includes `path` value', () => {

    const result = generatePageRouteComponent('/test-route', ['/test-route'], navItem);
    expect(result.props.path).toEqual(['/test-route']);

    const renderResult = result.props.render();
    expect(renderResult.type).toEqual('page-type');
  });

  test('when `paths` is set, use it to generate paths for key and path of route', () => {

    const result = generatePageRouteComponent(null, ['/test-route', '/another-test-route'], navItem);
    expect(result.key).toEqual('/test-route');
    expect(result.props.path).toEqual(['/test-route', '/another-test-route']);

  });

  test('returns null if paths is not an array', () => {

    const result = generatePageRouteComponent(null, null, navItem);
    expect(result).toEqual(null);

  });
});
