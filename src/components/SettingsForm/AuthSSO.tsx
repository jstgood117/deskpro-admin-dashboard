import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { buildYup } from 'schema-to-yup';
import styled from 'styled-components';

import { SettingsFormFactory } from './SettingsFormFactory';
import {
  jsonSchema,
  uiSchema,
  vaildationSchema,
  validationConfig
} from './testSchema/authSSO';
import Button from '../Button';

const Container = styled.div`
  .form-row :last-child :after {
    content: none;
  }
  .form-checkbox {
    transform: translateY(5px);
    z-index: 0;
  }
  .password-policy {
    .checkbox-field-inline {
      .form-checkbox {
        transform: translateY(12px);
        margin-left: 5px;
      }
      .group-details {
        padding-left: 35px
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
`;

const ButtonToolbar = styled.div`
  position: sticky;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 70px;
  padding-left: 346px;
  background-color: ${props => props.theme.white};
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

  .btn-primary button {
    background-color: #1c3e55;
    color: white;
  }

  .btn-secondary button {
    margin-left: 329px;
    background-color: #f7f7f7;
    color: #a9b0b0;
    border: 1px solid #d3d6d7;
  }
  `;

interface IProps {
  initialValues?: any;
  ui?: any;
}

const AuthSSOForm: React.FC<IProps> = ({ initialValues, ui }) => {

  const [yupSchema, setYupSchema] = useState({});

  useEffect(() => {
    setYupSchema(buildYup(vaildationSchema, validationConfig));
  }, []);

  return (
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
          <Container>
            {SettingsFormFactory(ui || uiSchema, formikProps)}
          </Container>

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

export default AuthSSOForm;
