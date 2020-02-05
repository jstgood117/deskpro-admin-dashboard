import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';

import { SettingsFormFactory } from '../../../components/SettingsForm/SettingsFormFactory';
import {
  uiSchema,
  jsonSchema
} from '../../../components/SettingsForm/testSchema/helpCenterSetup';
import Button from '../../../components/Button';

interface IProps {
  path: string;
  ui?: any;
  initialValues?: any;
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  & .alert-section {
    margin-left: 0px;
    margin-top: 16px;
    margin-bottom: 16px;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
  }

  & .field-container .element-details .element-details-label label {
    font-weight: 500;
  }
  & .vert-elements .form-item {
    margin-bottom: 24px;
  }
`;

const ButtonToolbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 16px 0;
  border-top: 1px solid #eff0f0;
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
`;

const HelpCenterSetuppage: FC<IProps> = ({ ui, initialValues }) => {
  return (
    <Formik
      initialValues={initialValues || jsonSchema}
      validate={values => {
        console.log(values);
      }}
      onSubmit={async values => {
        console.log(values);
      }}
    >
      {(formikProps: any) => (
        <Form>
          <Container>
            {SettingsFormFactory(ui || uiSchema, formikProps)}
          </Container>
          <ButtonToolbar>
            <Button
              className='btn-primary'
              onClick={formikProps.submitForm}
              size='medium'
              styleType='primary'
            >
              Save
            </Button>
            <Button
              className='btn-secondary'
              onClick={formikProps.resetForm}
              size='medium'
              styleType='secondary'
            >
              Discard changes
            </Button>
          </ButtonToolbar>
        </Form>
      )}
    </Formik>
  );
};

export default HelpCenterSetuppage;
