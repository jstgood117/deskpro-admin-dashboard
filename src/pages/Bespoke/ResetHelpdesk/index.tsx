import React, { FC, useState, useEffect } from 'react';
import { Formik } from 'formik';
import { WithApolloClient } from 'react-apollo';
import { withApollo } from '@apollo/react-hoc';
import { DocumentNode } from 'graphql';
import { gql } from 'apollo-boost';
import { buildYup } from 'schema-to-yup';

import { SettingsFormFactory } from '../../../components/SettingsForm/SettingsFormFactory';
import {
  jsonSchema,
  uiSchema,
  vaildationSchema,
  validationConfig
} from './testData';
import Button from '../../../components/Button';
import { Container, ButtonToolbar } from './styles';
import { settingsSave } from '../../../components/SettingsForm/helpers/settingsSave';

interface IProps {
  path: string;
  ui?: any;
  initialValues?: any;
  initYupSchema?: any;
  saveSchema?: DocumentNode;
  client?: any;
}

const testQuery: DocumentNode = gql`
  mutation UpdateSettings($payload: Object!) {
    update_settings(payload: $payload)
  }
`;
export type PropsWithApollo = WithApolloClient<IProps>;

const ResetHelpdeskPage: FC<WithApolloClient<IProps>> = ({
  client,
  initialValues = jsonSchema,
  ui = uiSchema,
  initYupSchema = vaildationSchema,
  saveSchema = testQuery
}) => {
  const [yupSchema, setYupSchema] = useState({});

  useEffect(() => {
    setYupSchema(buildYup(vaildationSchema, validationConfig));
  }, []);
  return (
    <Formik
      initialValues={initialValues || jsonSchema}
      validationSchema={yupSchema || initYupSchema}
      onSubmit={(values, { setSubmitting }) => {
        settingsSave(client, saveSchema, values);
        setSubmitting(false);
      }}
    >
      {(formikProps: any) => (
        <form onSubmit={formikProps.handleSubmit}>
          <Container>
            {SettingsFormFactory(ui || uiSchema, formikProps)}
          </Container>
          <ButtonToolbar>
            <Button
              styleType='primary'
              size='medium'
              onClick={formikProps.handleSubmit}
            >
              Reset
            </Button>
          </ButtonToolbar>
        </form>
      )}
    </Formik>
  );
};

export default withApollo<PropsWithApollo>(ResetHelpdeskPage);
