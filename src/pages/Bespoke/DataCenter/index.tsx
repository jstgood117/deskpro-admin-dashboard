import React, { FC } from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';

import { SettingsFormFactory } from '../../../components/SettingsForm/SettingsFormFactory';
import { uiSchema, jsonSchema } from './testData1';

interface IProps {
  path: string;
  ui?: any;
  initialValues?: any;
}

const Container = styled.div`
  .group-elements .form-row .form-ctrl span {
    width: 14px;
    height: 14px;
    transform: translateY(-2px);
  }

  .group-elements .field-container {
    .basic-multi-select {
      margin-right: 8px;
    }
    label {
      font-weight: normal;
    }

    &.form-item {
      margin: 0;
      .select__control {
        min-height: 28px;
        .select__single-value {
          font-size: 15px;
        }
      }
      button {
        font-size: 13px;
        margin-bottom: 24px;
      }
    }
  }
  .horz-element-group:nth-child(1) {
    padding-left: 0px;
  }
  .form-item button svg {
    width: 13px;
    height: 13px;
  }
`;

const DataCenter: FC<IProps> = ({ ui, initialValues }) => {

  return (
    <Formik
      initialValues={initialValues || jsonSchema}
      onSubmit={async values => {
        console.log(values);
      }}
      validate={values => {
        console.log(values);
      }}
    >
      {(formikProps: any) => (
        <form onSubmit={formikProps.handleSubmit}>
          <Container>
            {SettingsFormFactory(ui || uiSchema, formikProps)}
          </Container>
        </form>
      )}
    </Formik>
  );
};

export default DataCenter;
