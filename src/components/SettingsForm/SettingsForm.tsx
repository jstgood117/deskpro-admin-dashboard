import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import { buildYup } from 'schema-to-yup';
import { DocumentNode } from 'graphql';
import { withApollo } from '@apollo/react-hoc';
import { WithApolloClient } from 'react-apollo';

import Button from '../Button';

import { SettingsFormFactory } from './SettingsFormFactory';

import { settingsSave } from './helpers/settingsSave';

const SettingsFormStyled = styled.div`
  width: 100%;
  height: 100%;

  & .button-toolbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 16px 0;
    border-top: 1px solid #EFF0F0;
    button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      min-width: 120px;
      height: 34px;
      border-radius: 4px;
      border-width: 0;
      font-size: 13px;
    }
    .btn-primary button {
      background-color: #1c3e55;
      color: white;
    }
    .btn-secondary button {
      background-color: #f7f7f7;
      color: #a9b0b0;
      border: 1px solid #d3d6d7;
    }
  }
`;

interface IProps {
  saveSchema: DocumentNode;
  jsonSchema: any;
  uiSchema: any;
  vaildationSchema: any;
  validationConfig: any;
}

export type PropsWithApollo = WithApolloClient<IProps>;

const SettingsForm: React.FC<PropsWithApollo> = ({
  client,
  saveSchema,
  jsonSchema,
  uiSchema,
  vaildationSchema,
  validationConfig
}) => {

  const [yupSchema, setYupSchema] = useState({});

  useEffect(() => {
    setYupSchema(buildYup(vaildationSchema, validationConfig));
  }, [vaildationSchema, validationConfig]);

  return (
    <SettingsFormStyled>
      <Formik
        initialValues={jsonSchema}
        validationSchema={yupSchema}
        onSubmit={(values, { setSubmitting }) => {
          settingsSave(client, saveSchema, values);
          setSubmitting(false);
        }}
      >
        {(formikProps: any) => (
          <form onSubmit={formikProps.handleSubmit}>
            {SettingsFormFactory(uiSchema, formikProps)}
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

export default withApollo<PropsWithApollo>(SettingsForm);
