import { ActionsType } from './types';
import { ApolloClient } from 'apollo-client';

export const runAction = async (
  client: ApolloClient<any>,
  action: ActionsType,
  variables: any
) => {
  switch(action.type) {

    case 'mutate':
      return client.mutate({
        mutation: action.schema,
        variables
      });
    default:
      return undefined;
  }
};