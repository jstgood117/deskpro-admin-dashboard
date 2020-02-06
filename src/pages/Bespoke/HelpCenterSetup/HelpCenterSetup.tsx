import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';

import { SettingsFormFactory } from '../../../components/SettingsForm/SettingsFormFactory';
import {
  uiSchema,
  jsonSchema
} from '../../../components/SettingsForm/testSchema/helpCenterSetup';
import Button from '../../../components/Button';

interface IProps {
  path: string;
  ui?: any;
  initialValues?: any;
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  & .page-section.captcha {
    .radio-group {
      .radio-label {
        padding-left: 24px;
      }
      .radio-description {
        padding-left: 40px;
      }
    }
    .group-elements {
      .vert-element-group {
        .form-item {
          .vert-element-field {
            max-width: 710px;
          }
        }
        .vert-elements {
          padding-left: 40px;
          > .vert-element-group {
            max-width: 100%;
            .form-item {
              .group-details {
                max-width: 685px;
              }
            }
          }
          > .group-elements {
            flex-direction: row;
            align-items: center;
            margin-bottom: 8px;
            .form-checkbox {
              transform: translateY(-12px);
            }
            input[name='help_center_settings_captcha_site_key'] {
              width: 281px;
              margin-right: 16px;
            }
            input[name='help_center_settings_captcha_secret_key'] {
              width: 281px;
            }
          }
          .vert-elements {
            padding-left: 0;
          }
        }
      }
    }
  }

  & .page-section.content-settings {
    .group-elements {
      .vert-element-group {
        margin-top: 24px;
      }
    }
  }

  & .group-elements.domain-custom-group {
    display: flex;
    flex-direction: column;
    padding-left: 26px;
    max-width: 661px;
    label {
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 150%;
      color: #4c4f50;
      margin-bottom: 8px;
      margin-top: 8px;
    }
    .form-ctrl {
      width: 246px;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 8px;
      &::before {
        content: 'https://';
        margin-right: 5px;
        color: #8b9293;
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 150%;
      }
      &::after {
        content: '/';
        margin-left: 5px;
        color: #8b9293;
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 150%;
      }
    }
    input {
      width: 246px;
    }
  }

  & .field-container.form-item.domain {
    margin-bottom: 0;
  }

  & label.radio-label {
    padding-left: 12px;
  }

  & .alert-section {
    margin-left: 0px;
    margin-top: 16px;
    margin-bottom: 16px;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
  }

  & .alert-section.domain-custom {
    margin-bottom: 24px;
  }

  & .field-container .element-details .element-details-label label {
    font-weight: 500;
  }
  & .vert-elements .form-item {
    margin-bottom: 24px;
  }
  & .form-row .group-elements .vert-element-group {
    margin-top: 30px;
    &:first-child {
      margin-top: 0;
    }
  }
  & .form-row .group-details.feature-articles {
    display: flex;
    flex-direction: row;
    .element-details {
      padding-right: 40px;
      width: 383px;
    }
  }
`;

const ButtonToolbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 16px 0;
  border-top: 1px solid #eff0f0;
  padding-left: 95px;
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

const HelpCenterSetuppage: FC<IProps> = ({ ui, initialValues }) => {
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

export default HelpCenterSetuppage;
