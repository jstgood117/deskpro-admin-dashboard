import React, { SFC } from 'react';

import { ISidebarSection, ISidebarItem } from '../../resources/interfaces';
import { testSidebarData } from '../../resources/constants';

import Sidebar from '../Sidebar';
import Grid from '../Grid';
import PageType from './PageType';
import ErrorBoundary from '../Error/ErrorBoundary';

export interface IProps {
  location: {
    pathname: string,
  },
  sidebar: ISidebarSection[],
}

const Page: SFC<IProps> = ({location, sidebar}) => {
  sidebar = testSidebarData;  // TODO temporary until backend ready

  const nestedSearch = (arr: Array<any>, match: string) => {
    let matchedObj = {
      itemName: ''
    };

    arr.filter(obj => {
      if (obj.navItems) {
        matchedObj = Object.assign(matchedObj, nestedSearch(obj.navItems, match));
      }
      if (obj.url && obj.metadataQuery) {
        matchedObj = Object.assign(matchedObj, obj);
        return obj.url === match;
      }
      return false;
    });
    return matchedObj;
  }

  const currSidebar: ISidebarItem = nestedSearch(sidebar,location.pathname);
  console.log(currSidebar)

  return (
    <ErrorBoundary>
      <Grid>
        <Sidebar path={location.pathname} data={sidebar} />
        {Object.keys(currSidebar).length > 0 && <PageType query={currSidebar.metadataQuery} />}
      </Grid>
    </ErrorBoundary>
  );
}

export default Page;
