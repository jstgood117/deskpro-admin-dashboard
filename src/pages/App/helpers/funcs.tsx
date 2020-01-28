import React from 'react';
import { flatMap } from 'lodash';
import { Route } from 'react-router-dom';

import { KeyValue } from '../../../types';
import PageType from '../../PageType';
import DrawerType from '../../DrawerType';

import { ISidebarSection, ISidebarItem } from '../../../resources/interfaces';

export const generateSinglePageRoute = (path: string, paths: string[], section: ISidebarItem, postFixPaths?: string[]): JSX.Element => {

  // path is null if paths is set, so grab
  // the primaryPath for the key
  const primaryPath = (Array.isArray(section.paths) && section.paths.length > 1)
  ? section.paths[0]
  : section.path;

  // Use the paths array to populate the
  // path attribute on the Route. This
  // covers tabbed data urls (prevents
  // page reloading.)
  return (
    <Route
      key={`${primaryPath}`}
      exact={true}
      path={[
        ...paths,
        ...(postFixPaths ? postFixPaths.map(_path => `${_path}`) : [])
      ]}
      render={() => (
        <PageType
          path={path}
          paths={section.paths}
          pageType={section.pageType}
          metadataQuery={section.metadataQuery}
        />
      )}
    />
  );
};

export const generatePageRoute = (section: ISidebarItem, postFixPaths?: string[] ): JSX.Element => {

  return Array.isArray(section.paths)
    ? generateSinglePageRoute(section.path, section.paths, section, postFixPaths)
    : generateSinglePageRoute(section.path, [section.path], section, postFixPaths);

};

export const generateDrawerRoute = (section: ISidebarItem): JSX.Element[] => {

  const primaryPath = Array.isArray(section.paths)
    ? section.paths[0]
    : section.path;

  const paths = Array.isArray(section.paths)
    ? section.paths
    : [section.path];


  return [(
    <Route
      key={`${primaryPath}`}
      exact={true}
      path={paths}
      render={() => (
        <DrawerType
          path={primaryPath}
          pageType={section.pageType}
          metadataQuery={section.metadataQuery}
        />
      )}
    />
  )];
};

export const generatePageRoutes = (
  links: ISidebarSection[],
  generateFunc: (section: ISidebarItem, postFixPaths?: string[]) => JSX.Element
): JSX.Element[] => {
  return flatMap(
    links.map(section => section.navItems),
    sectionItem => flatMap(sectionItem, _item => _item.navItems || []).concat(sectionItem)
  )
    .filter((_section: ISidebarItem) => _section.path || _section.paths)
    .reduce((acc: JSX.Element[], _section: ISidebarItem) => {

      const postFixPaths = generateDrawerItemPaths(_section);

      return acc.concat([
        generateFunc(_section, postFixPaths)
      ]);
    }, ([] as JSX.Element[]));
};

export const generateDrawerRoutes = (
  links: ISidebarSection[],
  generateFunc: (section: ISidebarItem) => JSX.Element[]
): JSX.Element[] => {
  return flatMap(
    links.map(section => section.navItems),
    sectionItem => flatMap(sectionItem, _item => _item.navItems || []).concat(sectionItem)
  )
    .filter((_section: ISidebarItem) => _section.path || _section.paths)
    .reduce((acc: JSX.Element[], _section: ISidebarItem) => {

      if(_section.drawerItems &&  _section.drawerItems.length > 0) {
        return acc.concat(..._section.drawerItems.map(
          _drawItem => generateFunc(_drawItem)
        ));
      }

      return acc;

    }, ([] as JSX.Element[]));
};

export const generateDrawerItemPaths = (_section: ISidebarItem): string[] => {

  if(_section.drawerItems && _section.drawerItems.length > 0) {
    return _section.drawerItems.map(_item => {
      if(Array.isArray(_item.paths)) {
        return _item.paths[0];
      } else {
        return _item.path;
      }
    });
  }

  return [] as string[];
};

// Crudely add development translations
export const __mergeInDevI18Keys = (currentTranslations:object[], _testTranslations:KeyValue) => {
  return [...Object.keys(_testTranslations).map((_key: string) => {
    const message = _testTranslations.hasOwnProperty(_key) ? _testTranslations[_key.toString()] : '';
    return {id: _key, message, __typename: 'AdminTranslation'};
  }), ...currentTranslations];
};
