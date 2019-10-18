import React, { SFC } from 'react';

import { ISidebarSection, ISidebarItem } from '../../resources/interfaces';
// import { testSidebarData } from '../../resources/constants';

import Sidebar from '../Sidebar';
import ErrorBoundary from '../Error/ErrorBoundary';
import PageContainer from '../PageContainer';
import PageType from './PageType';

export interface IProps {
  location: {
    pathname: string,
  },
  sidebar: ISidebarSection[],
}

const Page: SFC<IProps> = ({location, sidebar}) => {
  const nestedSearch = (arr: Array<any>, match: string): ISidebarItem => {
    return arr.reduce((matchedObj, obj) => {
      if (obj.navItems) {
        return Object.assign({}, matchedObj, nestedSearch(obj.navItems, match));
      }
      if (obj.url && obj.metadataQuery && obj.url===match) {
        return obj;
      }
      return matchedObj;
    }, {});
  }

  const currSidebar: ISidebarItem = nestedSearch(sidebar,location.pathname);
  console.log(currSidebar)

  // TODO when backend data is there
  // {Object.keys(currSidebar).length > 1 && <PageType query={currSidebar.metadataQuery} />}

  return (
    <ErrorBoundary>
      <PageContainer>
        <Sidebar path={location.pathname} data={sidebar} />
        <PageType sidebar={currSidebar} />
      </PageContainer>
    </ErrorBoundary>
  );
}

export default Page;
