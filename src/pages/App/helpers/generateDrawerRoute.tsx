import React from 'react';
import { Route } from 'react-router-dom';
import DrawerType from '../../DrawerType';
import { ISidebarItem } from '../../../resources/interfaces';

export const generateDrawerRoute = (section: ISidebarItem): JSX.Element => {

  const primaryPath = Array.isArray(section.paths)
    ? section.paths[0]
    : section.path;

  const paths = Array.isArray(section.paths)
    ? section.paths
    : [section.path];

  return (
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
  );
};