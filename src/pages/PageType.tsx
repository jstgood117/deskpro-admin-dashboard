import React, { FC, createContext } from 'react';

import { RouteToPage } from '../pages';

import StandardTablePage from './StandardTablePage';
import StandardSettingsPage from './StandardSettingsPage';

import { IProps, PageContextValuesType } from './types';

export const getPageComponent = (props: IProps) => {
  const { path, paths, pageType } = props;

  switch (pageType) {
    case 'StandardDataPage':
      return <StandardTablePage path={path} paths={paths} />;
    case 'StandardSettingsPage':
      return <StandardSettingsPage path={path} />;
    default:
      return RouteToPage.hasOwnProperty(path)
        ? React.createElement(RouteToPage[path], {path})
        : <div>404</div>;
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
