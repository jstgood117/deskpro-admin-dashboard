import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import { buildYup } from 'schema-to-yup';
import { DocumentNode } from 'graphql';
import { WithApolloClient } from 'react-apollo';
import { withApollo } from '@apollo/react-hoc';
import { gql } from 'apollo-boost';

import { SettingsFormFactory } from './SettingsFormFactory';
import {
  jsonSchema,
  uiSchema,
  vaildationSchema,
  validationConfig
} from './testSchema/authSSO';
import Button from '../Button';
import { settingsSave } from './helpers/settingsSave';

const testQuery: DocumentNode = gql`
  mutation UpdateSettings($payload: Object!) {
    update_settings(payload: $payload)
  }
`;

const SettingsFormStyled = styled.div`
  width: 100%;
  height: 100%;
  .form-checkbox {
    transform: translateY(0);
  }
  .password-policy {
    .checkbox-field-inline {
      .form-checkbox {
        transform: translateY(0);
        margin-left: 5px;
      }
      .group-details {
        padding-left: 35px;
      }
    }
    .group-custom-policy {
      .element-details-label label {
        font-weight: 300;
      }
    }
    .vert-element-field {
      min-width: 730px;
      width: auto;
      margin-right: 0;
      .radio-label {
        margin-left: 20px;
        font-weight: 500;
      }
      .radio-description {
        padding-left: 45px;
      }
    }
    .checkbox-field {
      .vert-element-field {
        min-width: auto;
        margin-left: 5px;
      }
      .group-details {
        margin-left: 15px;
        padding-left: 16px;
      }
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

const AuthSSO: React.FC<PropsWithApollo> = ({
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

export default withApollo<PropsWithApollo>(AuthSSO);
