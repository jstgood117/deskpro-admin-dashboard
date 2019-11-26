import React, { SFC, createContext } from 'react';

import queries from '../../schema/queries';
import StandardTablePage from '../StandardTablePage';

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
        <StandardTablePage
          path={path}
          query={queries.QUERY_AGENTS_PAGE}
          queryName='agents_getAgentsPage'
        />
      );
      break;
    case '/agents/teams':
        page = (
          <StandardTablePage
            path={path}
            query={queries.QUERY_AGENTS_TEAM_PAGE}
            queryName='agents_teams_getTeams'
          />
        );
        break;
    case '/agents/groups':
        page = (
          <StandardTablePage
            path={path}
            query={queries.QUERY_AGENTS_TEAM_PAGE}
            queryName='agents_teams_getTeams'
          />
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
