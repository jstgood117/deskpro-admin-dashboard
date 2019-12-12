import React, { FC, createContext } from 'react';

import StandardTablePage from './StandardTablePage';
import StandardSettingsPage from './StandardSettingsPage';

import { IProps, PageContextValuesType } from './types';

const getPageComponent = (props: IProps) => {
  const { path, pageType } = props;
  switch (pageType) {

    case 'StandardDataPage':
      return <StandardTablePage path={path} />;
    case 'StandardSettingsPage':
      return <StandardSettingsPage />;

    default:
      // return RouteToPage.hasOwnProperty(path)
      //   ? React.createElement(RouteToPage[path], {path})
      //   : <div>404</div>; // TODO: 404 Component
      return <StandardSettingsPage />;
  }
};

export const PageContext = createContext({});

const PageType: FC<IProps> = (props: IProps) => {

  const contextValues = {
    path: props.path
  } as PageContextValuesType;

  const page = getPageComponent(props);
  return (
    <PageContext.Provider value={contextValues}>{page}</PageContext.Provider>
  );
};

export default PageType;
