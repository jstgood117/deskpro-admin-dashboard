import React, { FC, createContext } from 'react';

import StandardTablePage from './StandardTablePage';

import { IProps, PageContextValuesType } from './types';
import { RouteToPage } from '../pages';

const getPageComponent = (props: IProps) => {
  const { path, pageType } = props;
  switch (pageType) {
    case 'StandardDataPage':
      return <StandardTablePage path={path} />;
    default:
      return RouteToPage.hasOwnProperty(path)
        ? React.createElement(RouteToPage[path], {path})
        : <div>404</div>; // TODO: 404 Component
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
