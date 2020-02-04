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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 0 30px 55px;
  max-width: 974px;
  width: 100%;
  height: 100%;

  & .form-row:last-child {
    border-bottom-width: 0;
    padding-bottom: 0;
  }

  & .field-container {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: flex-start;
    .element-details {
      margin: 0;
      label {
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 150%;
        color: #4C4F50;
        margin-bottom: 10px;
      }
      p {
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 150%;
        color: #8B9293;
        margin: 0;
      }
    }
    > .element-details {
      margin-bottom: 24px;
    }
    > .element-context {
      margin-right: 12px;
      transform: translateY(3px);
      > div {
        position: relative;
        transform: none;
      }
    }
  }

  & .alert-section {
    margin-left: -25px;
    margin-top: 16px;
    margin-bottom: 16px;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
  }
`;

const ButtonToolbar = styled.div`
  min-height: 70px;
  display: flex;
  justify-content: flex-start;
  padding-left: 346px;
  align-items: center;
  border-top: 1px solid #d2d8dd;
  margin-left: 55px;
`;

const ResetHelpdeskPage: FC<IProps> = ({ ui, initialValues }) => {
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
          <Container>{SettingsFormFactory(ui || uiSchema, formikProps)}</Container>
          <ButtonToolbar>
            <Button styleType='primary' size='medium'>
              Reset
            </Button>
          </ButtonToolbar>
        </form>
      )}
    </Formik>
  );
};

export default ResetHelpdeskPage;
