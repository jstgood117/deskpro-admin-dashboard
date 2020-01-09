import React from 'react';
import { flatMap } from 'lodash';
import { Route } from 'react-router-dom';

import { KeyValue } from '../../../types';
import PageType from '../../PageType';
import DrawerType from '../../DrawerType';

import { ISidebarSection, ISidebarItem } from '../../../resources/interfaces';

export const genereatePageRoute = (section: ISidebarItem, postFixPaths?: string[] ): JSX.Element => (
  <Route
    key={`${section.path}`}
    exact={true}
    path={[
      `${section.path}`,
      ...(postFixPaths ? postFixPaths.map(_path => `${section.path}${_path}`) : [])
    ]}
    render={() => (
      <PageType
        path={section.path}
        pageType={section.pageType}
        metadataQuery={section.metadataQuery}
      />
    )}
  />
);


export const genereateDrawerRoute = (section: ISidebarItem ): JSX.Element => (
  <Route
    key={`${section.path}`}
    exact={true}
    path={[
      `${section.path}`
    ]}
    render={() => (
      <DrawerType
        path={section.path}
        pageType={section.pageType}
        metadataQuery={section.metadataQuery}
      />
    )}
  />
);

export const generatePageRoutes = (links: ISidebarSection[]) => {
  return flatMap(
    links.map(section => section.navItems),
    sectionItem => flatMap(sectionItem, _item => _item.navItems || []).concat(sectionItem)
  )
    .filter((_section: ISidebarItem) => _section.path)
    .reduce((acc: JSX.Element[], _section: ISidebarItem) => {

      const postFixPaths = generateDrawerItemPaths(_section);

      return acc.concat([
        genereatePageRoute(_section, postFixPaths)
      ]);
    }, ([] as JSX.Element[]));
};


export const generateDrawerRoutes = (links: ISidebarSection[]) => {
  // TODO: When drawers come through the API

  return [
    genereateDrawerRoute({
      itemName: 'test.drawer',
      path: '/agents/edit',
      pageType: 'EditAgentForm',
      metadataQuery: ''
    })
  ];
};

const generateDrawerItemPaths = (_section: ISidebarItem): string[] => {

  return ['/edit'];
  // TODO: Uncomment when coming from database
  // if(_section.drawerItems) {
  //   return _section.drawerItems.map(_item => _item.path);
  // }

  // return [] as string[];
};

// Crudely add development translations
export const __mergeInDevI18Keys = (currentTranslations:object[], _testTranslations:KeyValue) => {
  return [...Object.keys(_testTranslations).map((_key: string) => {
    const message = _testTranslations.hasOwnProperty(_key) ? _testTranslations[_key.toString()] : '';
    return {id: _key, message, __typename: 'AdminTranslation'};
  }), ...currentTranslations];
};
