import React from 'react';
import { flatMap } from 'lodash';
import { Route } from 'react-router-dom';

import { KeyValue } from '../../../resources/interfaces';
import PageType from '../../PageType';

import { ISidebarSection, ISidebarItem } from '../../../resources/interfaces';

export const generatePageRoutes = (links: ISidebarSection[]) => {
  return flatMap(
    links.map(section => section.navItems),
    sectionItem => flatMap(sectionItem, ss => ss.navItems || []).concat(sectionItem)
  )
    .filter((_section: ISidebarItem) => _section.path)
    .map((_section: ISidebarItem) => (
      <Route
        key={_section.path}
        exact={true}
        path={_section.path}
        render={() => <PageType
          path={_section.path}
          pageType={_section.pageType}
          metadataQuery={_section.metadataQuery}
        />}
      />
    ));
};


// Crudely add development translations
export const __mergeInDevI18Keys = (currentTranslations:object[], _testTranslations:KeyValue) => {
  return [...Object.keys(_testTranslations).map((_key: string) => {
    const message = _testTranslations.hasOwnProperty(_key) ? _testTranslations[_key.toString()] : '';
    return {id: _key, message, __typename: 'AdminTranslation'};
  }), ...currentTranslations];
};
