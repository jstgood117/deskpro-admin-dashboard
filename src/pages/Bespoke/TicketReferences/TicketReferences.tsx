import React, { FC, useEffect, useState } from 'react';
import { Formik } from 'formik';
import { buildYup } from 'schema-to-yup';
import styled from 'styled-components';

import {
  jsonSchema,
  uiSchema,
  validationSchema,
  validationConfig
} from './testData';
import Button from '../../../components/Button';

import { SettingsFormFactory } from '../../../components/SettingsForm/SettingsFormFactory';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  .form-ctrl {
    .group-elements {
      .checkbox-field {
        padding-top: 9px;
        padding-left: 4px;
        .vert-element-field {
          margin-right: 14px;
        }
        .form-checkbox {
          transform: translateY(2px);
        }
        .vert-elements {
          padding-left: 22px;
          padding-top: 12px;
          .reference-markdown {
            padding-left: 20px;
          }
          .group-details {
            max-width: 708px;
          }
        }
      }
    }
  }
  .form-row :last-child :after {
    content: none;
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
  path: string;
}

const TicketReferences: FC<IProps> = () => {
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
            {SettingsFormFactory(uiSchema, formikProps)}
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

export default TicketReferences;
