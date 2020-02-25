import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import { buildYup } from 'schema-to-yup';
import { DocumentNode } from 'graphql';
import { WithApolloClient } from 'react-apollo';
import { withApollo } from '@apollo/react-hoc';
import { gql } from 'apollo-boost';

import {
  jsonSchema,
  uiSchema,
  vaildationSchema,
  validationConfig
} from './testData';
import { SettingsFormFactory } from '../../../components/SettingsForm/SettingsFormFactory';
import Button from '../../../components/Button';
import { settingsSave } from '../../../components/SettingsForm/helpers/settingsSave';

const testQuery: DocumentNode = gql`
  mutation UpdateSettings($payload: Object!) {
    update_settings(payload: $payload)
  }
`;

const SettingsFormStyled = styled.div`
  width: 100%;
  height: 100%;
  .vert-element-field {
    padding-top: 2px;
  }

  .form-row :last-child :after {
    content: none;
  }

  .form-checkbox {
    transform: translateY(0);
  }

  & .apache-tika {
    & .element-details-label {
      label {
        font-family: Rubik;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 150%;
        color: #4c4f50;
      }
    }
    & .ip-address,
    & .port {
      padding-top: 26px;
      margin-bottom: 0;
    }
  }

  & .button-toolbar {
    z-index: 2;
    position: sticky;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-height: 70px;
    padding-left: 346px;
    background-color: #ffffff;
    border-top: 1px solid #d2d8dd;
    button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      min-width: 112px;
      height: 34px;
      border-radius: 4px;
      border-width: 0;
      font-family: Rubik;
      font-size: 13px;
      line-height: 150%;
    }
    .btn-secondary button {
      margin-left: 329px;
      background-color: #f7f7f7;
      color: #a9b0b0;
      border: 1px solid #d3d6d7;
    }
  }
`;

interface IProps {
  initialValues?: any;
  ui?: any;
  initYupSchema?: any;
  saveSchema?: DocumentNode;
}

export type PropsWithApollo = WithApolloClient<IProps>;

const Elastic: React.FC<PropsWithApollo> = ({
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
    <SettingsFormStyled>
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
            {SettingsFormFactory(ui || uiSchema, formikProps)}
            <div className='button-toolbar'>
              <Button
                className='btn-primary'
                onClick={formikProps.handleSubmit}
                size='medium'
                styleType='primary'
              >
                Save
              </Button>
              <Button
                className='btn-secondary'
                onClick={formikProps.handleSubmit}
                size='medium'
                styleType='secondary'
              >
                Discard changes
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </SettingsFormStyled>
  );
};

export default withApollo<PropsWithApollo>(Elastic);
