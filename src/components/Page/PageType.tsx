import React, { SFC } from 'react';

import { QUERY_AGENTS_PAGE } from '../../resources/graphql';
import StandardTablePage from '../StandardTablePage';

export interface IProps {
  path?: string,
}

// Everything is now defined by the path field
// So what is the point of pageType and metadataQuery fields in the sidebar query payload?

const PageType: SFC<IProps> = ({path}) => {
  switch (path) {
    case '/agents':
      return <StandardTablePage query={QUERY_AGENTS_PAGE} queryName='agents_getAgentsPage' />;

    default:
      return <div><textarea value={path} style={{width: '50%', height: '500px', fontFamily: 'Monospace'}} readOnly={true} /></div>
	}
};


export default PageType;
