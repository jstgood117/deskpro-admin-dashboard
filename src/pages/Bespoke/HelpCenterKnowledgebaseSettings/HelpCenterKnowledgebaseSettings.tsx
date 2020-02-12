import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';

import { SettingsFormFactory } from '../../../components/SettingsForm/SettingsFormFactory';
import {
  uiSchema,
  jsonSchema
} from '../../../components/SettingsForm/testSchema/knowledgebaseSettings';
import Button from '../../../components/Button';

interface IProps {
  path: string;
  ui?: any;
  initialValues?: any;
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  & .feature-section-title {
    border-width: 0;
    padding-bottom: 20px;
  }

  & .page-section {
    padding: 32px 0;
    .description {
      margin: 0;
      p {
        margin: 8px 0 0 0;
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

  & .page-section.knowledgebase-settings {
    padding: 0 0 32px 0;
    .settings-data {
      margin-top: 0;
      margin-bottom: 0;
      width: 978px;
      height: 167px;
    }
  }

  & .page-section.homepage-short-cut-bar {
    .description {
      margin-bottom: 8px;
      p:last-child {
        margin-top: 20px;
      }
    }
  }

  & .page-section.subscriptions {
    .vert-element-group {
      margin-bottom: 24px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  & .page-section.user-access {
    .description {
      margin-bottom: 18px;
    }
    .string-list-builder {
      width: 240px;
      .title-container {
        margin-bottom: 12px;
      }
    }
  }
`;

const ButtonToolbar = styled.div`
  position: sticky;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: white;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px 0;
  border-top: 1px solid #eff0f0;
  padding-left: 346px;
  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 34px;
    border-radius: 4px;
    border-width: 0;
    font-size: 13px;
  }
  .btn-primary button {
    background-color: #1c3e55;
    color: white;
    width: 112px;
  }
  .btn-secondary button {
    background-color: #f7f7f7;
    color: #a9b0b0;
    border: 1px solid #d2d8dd;
    margin-left: 329px;
    width: 137px;
  }
`;

const HelpCenterKnowledgebaseSettings: FC<IProps> = ({ ui, initialValues }) => {
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

export default HelpCenterKnowledgebaseSettings;
