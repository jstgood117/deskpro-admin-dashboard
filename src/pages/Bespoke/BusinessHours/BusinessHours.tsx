import React, { FC, useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import { buildYup } from 'schema-to-yup';
import { DocumentNode } from 'graphql';
import { WithApolloClient } from 'react-apollo';
import { withApollo } from '@apollo/react-hoc';
import { gql } from 'apollo-boost';

import { SettingsFormFactory } from '../../../components/SettingsForm/SettingsFormFactory';
import {
  jsonSchema,
  uiSchema,
  vaildationSchema,
  validationConfig
} from '../../../components/SettingsForm/testSchema/businessHours';
import Button from '../../../components/Button';
import { settingsSave } from '../../../components/SettingsForm/helpers/settingsSave';

interface IProps {
  path: string;
  initialValues?: any;
  ui?: any;
  initYupSchema?: any;
  saveSchema?: DocumentNode;
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;

  & .feature-section {
    flex-grow: 1;
  }

  & .page-section {
    &:last-child::after {
      height: 0;
    }
    & .form-item {
      & .vert-elements {
        padding-left: 0px;
      }
    }
  }
  & .page-section.business-hour {
    & .time-setting {
      & .horz-element-group {
        padding-left: 20px;

        & .form-item {
          min-width: fit-content;
        }
        & .time {
          & .element-context {
            & .select__control {
              min-width: 170px;
            }
          }
        }
        & .timezone {
          & .element-context {
            & .select__control {
              min-width: 80px !important;
            }
          }
        }
        & .select__single-value {
          font-family: Rubik;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 150%;
          display: flex;
          align-items: center;
          color: #4c4f50;
        }
        & .element-details-label {
          label {
            font-family: Rubik;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 150%;
            color: #4c4f50;
          }
        }
      }
    }

    & .work-days {
      padding-top: 8px;
      padding-left: 20px;
      & .element-details-label {
        margin-bottom: 16px;
      }
      & .vert-elements {
        & .form-checkbox {
          transform: translateY(2px);
          z-index: 0;
        }
        & .horz-element-group {
          padding-left: 28px;

          label {
            font-weight: normal;
          }
        }
      }
    }
  }

  & .page-section.holidays {
    padding-left: 20px;

    & .button-group {
      & .vert-elements {
        display: flex;
        align-items: center;
        & .calendar-btn {
          padding-left: 8px;
        }
      }
    }

    & .calendar-setting {
      & .calendars {
        & .add-button {
          display: none;
        }
        & .sync-calendars {
          width: auto;
          & .string-list-count {
            position: relative;
            width: auto;
            padding-left: 16px;
            &:after {
              content: ')';
            }
            &:before {
              content: '(';
            }
          }
          & .string-row {
            font-family: Rubik;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 150%;
            color: #4c4f50;
            &:hover {
              text-decoration-line: underline;
              color: #3a8dde;
              cursor: defalut;
            }
            max-width: 632px;
            word-break: break-all;
            padding: 9px 8px 9px 8px;
            & .content-text {
              padding-right: 14px;
            }
          }
        }

        & .holidays {
          max-width: 632px;
        }
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

  .btn-secondary button {
    margin-left: 329px;
    background-color: #f7f7f7;
    color: #a9b0b0;
    border: 1px solid #d3d6d7;
  }
`;

const testQuery: DocumentNode = gql`
  mutation UpdateSettings($payload: Object!) {
    update_settings(payload: $payload)
  }
`;

export type PropsWithApollo = WithApolloClient<IProps>;

const BusinessHours: FC<PropsWithApollo> = ({
  client,
  initialValues = jsonSchema,
  ui = uiSchema,
  initYupSchema = vaildationSchema,
  saveSchema = testQuery
}) => {
  const [yupSchema, setYupSchema] = useState({});

  useEffect(() => {
    setYupSchema(buildYup(vaildationSchema, validationConfig));
  }, []);

  return (
    <Formik
      initialValues={initialValues || jsonSchema}
      validationSchema={yupSchema || initYupSchema}
      onSubmit={(values, { setSubmitting }) => {
        settingsSave(client, saveSchema, values);
        setSubmitting(false);
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

export default withApollo<PropsWithApollo>(BusinessHours);
