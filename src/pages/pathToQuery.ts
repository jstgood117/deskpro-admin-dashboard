import queries from '../schema/queries';
import { PathToQueryType } from './types';

export const pathToQuery: PathToQueryType = {
  '/agents': queries.QUERY_AGENTS_PAGE,
  '/agents/teams': queries.QUERY_AGENTS_TEAM_PAGE,
  '/agents/groups': queries.QUERY_AGENTS_TEAM_PAGE,
};