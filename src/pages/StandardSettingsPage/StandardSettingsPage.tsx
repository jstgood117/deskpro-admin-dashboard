import React, { FC } from 'react';
import { DocumentNode } from 'graphql';
import { useQuery, withApollo, WithApolloClient } from 'react-apollo';
import { gql } from 'apollo-boost';

import { QueryService } from '../../services/query';

import Loading from '../../components/Loading';
import Error from '../../components/Error';
import SettingsForm from '../../components/SettingsForm';

import {
  jsonSchema,
  uiSchema,
  validationSchema,
  validationConfig
} from '../../components/SettingsForm/testData';

export type Props = {
  path: string;
};

export type PropsWithApollo = WithApolloClient<Props>;

export const StandardSettingsPage: FC<PropsWithApollo> = ({
  path
}) => {

  const queryService = QueryService();
  const query = queryService.getQuery('standardSettingsPage');

  const { loading, error } = useQuery(query, {
    errorPolicy: 'all',
    variables: { path }
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  // TODO: Eventually remove this in favour of
  // saveMutation from response
  const testQuery: DocumentNode = gql`
    mutation UpdateSettings($payload: Object!) {
      update_settings(payload: $payload)
    }
  `;

  // TODO: Evetually send the response data to SettingsForm
  return (
    <SettingsForm
      saveSchema={testQuery}
      jsonSchema={jsonSchema}
      uiSchema={uiSchema}
      validationSchema={validationSchema}
      validationConfig={validationConfig}
    />
  );
};

export default withApollo<Props>(StandardSettingsPage);