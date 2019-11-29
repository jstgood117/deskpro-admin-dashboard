import React from 'react';
import { flatMap } from 'lodash';
import { Route } from 'react-router-dom';
import PageType from '../../../components/Page/PageType';

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
        render={() => <PageType {..._section} />}
      />
    ));
};
