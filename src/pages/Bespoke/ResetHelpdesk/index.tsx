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
  padding: 0 0 30px 0;
  max-width: 1280px;
  width: 100%;
  height: 100%;

  & .form-row {
    min-width: 974px;
    .group-elements {
      .vert-element-group {
        .form-item {
          .group-details {
            .element-details {
              .description {
                max-width: 567px;
              }
            }
          }
        }
        .vert-elements {
          .alert-section {
            .alert {
              padding-right: 120px !important;
            }
          }
        }
      }
    }
    > label {
      min-width: 291px;
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 150%;
      color: #4c4f50;
    }
  }

  & .form-row:last-child {
    border-bottom-width: 0;
    padding-bottom: 0;
    &::after {
      height: 0;
    }
  }

  & .vert-elements {
    padding: 0;
  }

  & .field-container .group-details {
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
        color: #4c4f50;
      }
      p.description {
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 150%;
        color: #8b9293;
        margin: 0;
        max-width: 550px;
      }
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
    margin-left: -22px;
    margin-top: 0;
    margin-bottom: 16px;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    .alert {
      background-color: #fffdf6 !important;
    }
  }
`;

const ButtonToolbar = styled.div`
  min-height: 70px;
  display: flex;
  justify-content: flex-start;
  padding-left: 346px;
  align-items: center;
  border-top: 1px solid #d2d8dd;
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
          <Container>
            {SettingsFormFactory(ui || uiSchema, formikProps)}
          </Container>
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
