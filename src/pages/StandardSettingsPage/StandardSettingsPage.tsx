import React, { FC, useState } from 'react';
import { DocumentNode } from 'graphql';
import { useQuery, withApollo, WithApolloClient, } from 'react-apollo';
import { gql, ApolloError } from 'apollo-boost';

import { QueryService } from '../../services/query';
import { API_StandardSettingsPage } from '../../codegen/types';

import Loading from '../../components/Loading';
import Error from '../../components/Error';
import SettingsForm from '../../components/SettingsForm';

import {
  jsonSchema,
  uiSchema,
  vaildationSchema,
  validationConfig
} from '../../components/SettingsForm/testData';

type Props = {
  path: string;
};

export type PropsWithApollo = WithApolloClient<Props>;

export const StandardSettingsPage: FC<PropsWithApollo> = ({
  path
}) => {

  const [pageResponse, setPageResponse] = useState<API_StandardSettingsPage>();
  const [gqlError, setGqlError] = useState<boolean>(false);

  const queryService = QueryService();
  const query = queryService.getQuery('standardSettingsPage');

  useQuery(query, {
    errorPolicy: 'all',
    variables: { path },
    onCompleted: (_response: API_StandardSettingsPage) => {
      setPageResponse(_response);
    },
    onError: (error: ApolloError) => {
      setGqlError(true);
    }
  });

  if (!pageResponse) {
    return <Loading />;
  }

  if (gqlError) {
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
      vaildationSchema={vaildationSchema}
      validationConfig={validationConfig}
    />
  );
};

export default withApollo<Props>(StandardSettingsPage);