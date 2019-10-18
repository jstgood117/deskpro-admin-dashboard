import React, { SFC } from 'react';

import { ISidebarItem } from '../../resources/interfaces';
import StandardTablePage from '../StandardTablePage';

export interface IProps {
  sidebar: ISidebarItem,
}

const PageType: SFC<IProps> = ({sidebar}) => {
  if (sidebar && sidebar.pageType && sidebar.metadataQuery) {
    switch (sidebar.pageType) {
      case "StandardTablePage":
        return <StandardTablePage query={sidebar.metadataQuery} />        
    }
  }
  return null;
}
  
export default PageType;
