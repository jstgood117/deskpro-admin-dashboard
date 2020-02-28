import React, { FC, useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import { buildYup } from 'schema-to-yup';
import { DocumentNode } from 'graphql';
import { WithApolloClient } from 'react-apollo';
import { withApollo } from '@apollo/react-hoc';
import { gql } from 'apollo-boost';

import { SettingsFormFactory } from '../../../components/SettingsForm/SettingsFormFactory';
import {
  uiSchema,
  jsonSchema,
  vaildationSchema,
  validationConfig
} from './testData';
import { settingsSave } from '../../../components/SettingsForm/helpers/settingsSave';

interface IProps {
  path: string;
  initialValues?: any;
  ui?: any;
  initYupSchema?: any;
  saveSchema?: DocumentNode;
}

const testQuery: DocumentNode = gql`
  mutation UpdateSettings($payload: Object!) {
    update_settings(payload: $payload)
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;

  & .feature-section {
    flex-grow: 1;
  }

  & .page-section {
    &:last-child::after {
      height: 0;
    }
    & .form-item {
      & .vert-elements {
        padding-left: 0px;
      }
    }
  }

  & .page-section.method {
    .group-deskpro {
      max-width: 578px;
    }
    .report-panel {
      max-width: 668px;
    }
    .group-deskpro {
      > .form-row {
        margin-bottom: 16px;
        display: flex;
        flex-direction: column;
      }
      > .deskpro-file-check {
        margin-bottom: 1px;
        flex-direction: row;
        align-items: center;
        .form-checkbox {
          transform: translateY(-17px);
        }
      }
      > .generate-report-file {
        margin-bottom: 24px;
        button {
          font-family: Rubik;
          font-style: normal;
          font-weight: normal;
          font-size: 13px;
          line-height: 150%;
          display: flex;
          align-items: center;
          color: #1c3e55;
        }
        svg {
          width: 10px;
        }
      }
      label {
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 150%;
        color: #4c4f50;
        margin-bottom: 4px;
      }
    }
  }
`;

export type PropsWithApollo = WithApolloClient<IProps>;

const ReportFile: React.FC<PropsWithApollo> = ({
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
        <Form>
          <Container>
            {SettingsFormFactory(ui || uiSchema, formikProps)}
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default withApollo<PropsWithApollo>(ReportFile);
