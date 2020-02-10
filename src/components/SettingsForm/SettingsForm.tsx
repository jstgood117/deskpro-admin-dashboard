import React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import { buildYup } from 'schema-to-yup';

import { SettingsFormFactory } from './SettingsFormFactory';
import {
  jsonSchema,
  uiSchema,
  vaildationSchema,
  validationConfig
} from './testData';
import Button from '../Button';

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
  initialValues?: any;
  ui?: any;
}

const SettingsForm: React.FC<IProps> = ({ initialValues, ui }) => {
console.log(vaildationSchema);
  const yupSchema = buildYup(vaildationSchema, validationConfig);

  return (
    <SettingsFormStyled>
      <Formik
        initialValues={initialValues || jsonSchema}
        validationSchema={yupSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
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

export default SettingsForm;
