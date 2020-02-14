import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';

import { SettingsFormFactory } from '../../../components/SettingsForm/SettingsFormFactory';
import {
  uiSchema,
  jsonSchema
} from '../../../components/SettingsForm/testSchema/businessHours';
import Button from '../../../components/Button';

interface IProps {
  path: string;
  ui?: any;
  initialValues?: any;
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
            .select__control {
              min-width: 170px;
            }
          }
        }
        & .timezone {
          & .element-context {
            .select__control {
              min-width: 80px !important;
            }
          }
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

const BusinessHours: FC<IProps> = ({ ui, initialValues }) => {
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

export default BusinessHours;
