import React from 'react';
import { Route } from 'react-router-dom';
import { ISidebarItem } from '../../../resources/interfaces';
import PageType from '../../PageType';

export const generatePageRouteComponent = (
  path: string,
  paths: string[],
  section: ISidebarItem,
  postFixPaths?: string[]
): JSX.Element => {

  if(!Array.isArray(paths)) {
    return null;
  }

  // In this function, paths is always set.
  // Either with Path[] or PathsFromApi[].
  const primaryPath = paths[0];

  // Use the paths array to populate the
  // path attribute on the Route. This
  // covers tabbed data urls (prevents
  // page reloading.)
  return (
    <Route
      // key is primaryPath to avoid refreshing on
      // same-page-different-path swaps.
      key={`${primaryPath}`}
      exact={true}
      path={[
        // render for all `paths`...
        ...paths,
        // ...and for any drawerPaths associated
        // to this page.
        ...(postFixPaths ? postFixPaths.map(_path => `${_path}`) : [])
      ]}
      render={() => (
        <PageType
          // PageType.path needs to be the path
          // being viewed so the page knows what
          // to render.
          path={path}
          paths={section.paths}
          pageType={section.pageType}
          metadataQuery={section.metadataQuery}
        />
      )}
    />
  );
};