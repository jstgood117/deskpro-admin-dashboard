import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';

import { SettingsFormFactory } from '../../../components/SettingsForm/SettingsFormFactory';
import {
  uiSchema,
  jsonSchema
} from '../../../components/SettingsForm/testSchema/realtimeEvents';
import Button from '../../../components/Button';
import IconBook from '../../../assets/settings/book.png';

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

  & .feature-section-select {
    .select__control {
      height: 42px;
    }
  }

  & .page-section {
    &:last-child::after {
      height: 0;
    }
    .field-container.form-item.method-name {
      margin-left: -40px;
      margin-bottom: 24px;
      &.deskpro {
        margin-bottom: 16px;
      }
      &.pusher {
        margin-bottom: 14px;
      }
      .radio-label {
        padding-left: 24px;
      }
    }
    .vert-element-group.method {
      > .form-item:first-child {
        .description {
          margin-bottom: 21px;
          a {
            background-image: url(${IconBook});
          }
        }
      }
    }
    .test-pusher-settings {
      button {
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 150%;
        display: flex;
        align-items: center;
        color: #1c3e55;
        height: 34px;
        padding: 0 12px;
        svg {
          width: 8px;
          margin-right: 10px;
          padding-right: 0;
        }
      }
    }

    .element-context,
    .element-details {
      max-width: 578px;
    }
    .element-info {
      margin-left: 16px;
    }
  }

  & .page-section.method {
    .group-pusher,
    .group-deskpro,
    .group-polling {
      max-width: 578px;
    }
    .group-deskpro,
    .group-pusher {
      > .form-row {
        margin-bottom: 16px;
        display: flex;
        flex-direction: column;
      }
      > .deskpro-secure {
        margin-bottom: 1px;
        flex-direction: row;
        align-items: center;
        .form-checkbox {
          transform: translateY(-17px);
        }
      }
      > .test-pusher-settings {
        margin-bottom: 24px;
      }
      label {
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 150%;
        color: #4c4f50;
        margin-bottom: 4px;
      }
      .select__control {
        margin-bottom: 8px;
      }
    }
  }
`;

const ButtonToolbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px 0;
  border-top: 1px solid #eff0f0;
  padding-left: 350px;
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
    margin-left: 329px;
  }
`;

const RealTimeEvents: FC<IProps> = ({ ui, initialValues }) => {
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
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default RealTimeEvents;
