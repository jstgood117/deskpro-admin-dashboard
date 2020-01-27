import { ActionsType } from './types';
import { ApolloClient } from 'apollo-client';
import { DocumentNode } from 'graphql';
import { API_AgentTeam } from '../../codegen/types';
import { IOptions } from '../../types';

export const runAction = async (
  client: ApolloClient<any>,
  action: ActionsType,
  variables: any
) => {
  switch (action.type) {
    case 'mutate':
      return client.mutate({
        mutation: action.schema,
        variables
      });
    default:
      return undefined;
  }
};

/**
 * Returns fetched gql query in IOptions[] format
 *
 * @param client
 * @param query
 */
export const querySelectOptions = async (
  client: ApolloClient<any>,
  query: DocumentNode
): Promise<IOptions[]> => {
  const result = await client.query({ query });
  return (
    result.data &&
    Array.isArray(result.data.agents_teams_getTeams) &&
    result.data.agents_teams_getTeams.map(
      (team: API_AgentTeam): IOptions => ({
        label: team.name,
        value: team.id,
        image: team.avatarUrn
      })
    )
  );
};
