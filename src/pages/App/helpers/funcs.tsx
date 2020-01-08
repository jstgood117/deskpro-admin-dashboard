import React from 'react';
import { flatMap } from 'lodash';
import { Route } from 'react-router-dom';

import { KeyValue } from '../../../types';
import PageType from '../../PageType';

import { ISidebarSection, ISidebarItem } from '../../../resources/interfaces';

export const genereatePageRoute = (section: ISidebarItem, postFixPath?: string ): JSX.Element => (
  <Route
    key={`${section.path}`}
    exact={true}
    path={[
      `${section.path}`,
      ...(postFixPath ? [`${section.path}${postFixPath}`] : [])
    ]}
    render={() => (
      <PageType
        path={section.path} // This needs to stay un-postfixed
        pageType={section.pageType}
        metadataQuery={section.metadataQuery}
      />
    )}
  />
);

export const generatePageRoutes = (links: ISidebarSection[], postFixPath?: string) => {
  return flatMap(
    links.map(section => section.navItems),
    sectionItem => flatMap(sectionItem, ss => ss.navItems || []).concat(sectionItem)
  )
    .filter((_section: ISidebarItem) => _section.path)
    .reduce((acc: JSX.Element[], _section: ISidebarItem) => {
      return acc.concat([
        genereatePageRoute(_section, postFixPath)
      ]);
    }, ([] as JSX.Element[]));
};


// Crudely add development translations
export const __mergeInDevI18Keys = (currentTranslations:object[], _testTranslations:KeyValue) => {
  return [...Object.keys(_testTranslations).map((_key: string) => {
    const message = _testTranslations.hasOwnProperty(_key) ? _testTranslations[_key.toString()] : '';
    return {id: _key, message, __typename: 'AdminTranslation'};
  }), ...currentTranslations];
};
