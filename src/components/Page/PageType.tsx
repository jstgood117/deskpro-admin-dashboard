import React, { SFC, createContext } from 'react';

import queries from '../../schema/queries';
import StandardTablePage from '../StandardTablePage';
import StandardTableProvider from '../../contexts/StandardTableContext';

export interface IProps {
  path?: string;
}

export type PageContextValuesType = {
  path: string;
};

export const PageContext = createContext({});

const PageType: SFC<IProps> = ({ path }) => {
  const contextValues = {
    path
  } as PageContextValuesType;

  let page = null;
  switch (path) {
    case '/agents':
      page = (
        <StandardTableProvider>
          <StandardTablePage
            path={path}
            query={queries.QUERY_AGENTS_PAGE}
            queryName='agents_getAgentsPage'
          />
        </StandardTableProvider>
      );
      break;
    default:
      page = (
        <div>
          <textarea
            value={path}
            style={{ width: '50%', height: '500px', fontFamily: 'Monospace' }}
            readOnly={true}
          />
        </div>
      );
      break;
  }

  return (
    <PageContext.Provider value={contextValues}>{page}</PageContext.Provider>
  );
};

export default PageType;
