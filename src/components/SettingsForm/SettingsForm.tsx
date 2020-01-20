import React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';

import { SettingsFormFactory } from './SettingsFormFactory';
import { jsonSchema, uiSchema } from './testData';
import Button from '../Button';

const SettingsFormStyled = styled.div`
  margin-left: 55px;
  width: 1045px;

  & .submit-button {
    padding-left: 330px;
    margin: 16px 0;
  }
  & .submit-button > button {
    width: 112px;
    justify-content: center;
  }
  & .discard-button {
    padding-left: 330px;
    margin: 16px 0;
  }
  & .discard-button > button {
    width: 137px;
    justify-content: center;
    background: #f7f7f7;
    border: 1px solid #d3d6d7;
    box-sizing: border-box;
    border-radius: 4px;
    color: #a9b0b0;
  }
`;

interface IProps {
  initialValues?: any;
  ui?: any;
}

const SettingsForm: React.FC<IProps> = ({ initialValues, ui }) => {
  return (
    <SettingsFormStyled>
      <Formik
        initialValues={initialValues || jsonSchema}
        validate={values => {
          console.log(values);
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {(formikProps: any) => (
          <form onSubmit={formikProps.handleSubmit}>
            {SettingsFormFactory(ui || uiSchema, formikProps)}
            <Button
              className='submit-button'
              onClick={formikProps.handleSubmit}
              size='medium'
              styleType='primary'
            >
              Save
            </Button>
            <Button
              className='discard-button'
              onClick={formikProps.handleSubmit}
              size='medium'
              styleType='primary'
            >
              Discard changes
            </Button>
          </form>
        )}
      </Formik>
    </SettingsFormStyled>
  );
};

export default SettingsForm;
