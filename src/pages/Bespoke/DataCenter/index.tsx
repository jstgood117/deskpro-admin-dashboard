import React, { FC, useEffect, useState } from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import { buildYup } from 'schema-to-yup';

import { SettingsFormFactory } from '../../../components/SettingsForm/SettingsFormFactory';
import {
  uiSchema,
  jsonSchema,
  validationSchema,
  validationConfig
} from './testData2';

interface IProps {
  path: string;
  ui?: any;
  initialValues?: any;
}

const Container = styled.div`
  .group-elements .field-container {
    .basic-multi-select {
      margin-right: 8px;
    }
    label {
      font-weight: normal;
    }
    .error {
      top: 32px;
      left: 4px;
      position: absolute;
    }

    &.form-item {
      margin: 0;
      .select__control {
        min-width: 169px;
        min-height: 28px;
        .select__single-value {
          font-size: 15px;
        }
      }
      button {
        font-size: 13px;
        margin-bottom: 32px;
      }
    }
  }

  .form-row .form-ctrl span {
    width: 14px;
    height: 14px;
    transform: translateY(-2px);
  }

  .horz-element-group:nth-child(1) {
    padding-left: 0px;
  }

  .form-item button svg {
    width: 13px;
    height: 13px;
  }
`;

const DataCenterPage: FC<IProps> = ({ ui, initialValues }) => {

  const [yupSchema, setYupSchema] = useState({});

  useEffect(() => {
    setYupSchema(buildYup(validationSchema, validationConfig));
  }, []);

  return (
    <Formik
      initialValues={jsonSchema}
      validationSchema={yupSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
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

export default DataCenterPage;
