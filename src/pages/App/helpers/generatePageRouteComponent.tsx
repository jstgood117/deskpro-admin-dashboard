import React from 'react';
import { Route } from 'react-router-dom';
import { ISidebarItem } from '../../../resources/interfaces';
import PageType from '../../PageType';

export const generatePageRouteComponent = (
  path: string,
  paths: string[],
  section: ISidebarItem, postFixPaths?: string[]
): JSX.Element => {

  // path from api is null if paths is
  // set, so grab the primaryPath for the key
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