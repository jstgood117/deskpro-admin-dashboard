import { ApolloClient } from 'apollo-client';
import { KeyValue } from '../../../types';
import { DocumentNode } from 'graphql';

export const settingsSave = async (
  client: ApolloClient<any>,
  schema: DocumentNode,
  values: KeyValue
) => {
  client.mutate({
    mutation: schema,
    variables: values
  });
};
