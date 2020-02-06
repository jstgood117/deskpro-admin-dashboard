import React, { FC } from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';

import { SettingsFormFactory } from '../../../components/SettingsForm/SettingsFormFactory';
import { uiSchema, jsonSchema } from './testData';
import Button from '../../../components/Button';

interface IProps {
  path: string;
  ui?: any;
  initialValues?: any;
}

const ButtonToolbar = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  `;

const TicketLockingPage: FC<IProps> = ({ ui, initialValues }) => {
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
        <form onSubmit={formikProps.handleSubmit}>
          {SettingsFormFactory(ui || uiSchema, formikProps)}

          <ButtonToolbar>
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
          </ButtonToolbar>
        </form>
      )}
    </Formik>
  );
};

export default TicketLockingPage;
