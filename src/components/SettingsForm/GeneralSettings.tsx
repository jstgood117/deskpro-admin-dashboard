import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import { buildYup } from 'schema-to-yup';

import { SettingsFormFactory } from './SettingsFormFactory';
import {
  jsonSchema,
  uiSchema,
  vaildationSchema,
  validationConfig
} from './testSchema/generalSettings';
import Button from '../Button';
import {DocumentNode} from 'graphql';
import {settingsSave} from './helpers/settingsSave';
import {gql} from 'apollo-boost';
import {WithApolloClient} from 'react-apollo';
import {withApollo} from '@apollo/react-hoc';

const SettingsFormStyled = styled.div`
  width: 100%;
  height: 100%;
  .notification-block, .input-filed {
    .element-details {
      position: unset !important;
      p  {
        max-width: unset;
      }
      label {
        font-family: Lato;
      }
    }
  }
  .info-custom {
    margin-bottom: 20px;
    > .form-item {
      position: relative;
      .element-info.info-custom {
        position: absolute;
        &.helpdesk {
          right: -186px;
          top: 124px;
        }
        &.data-time {
          right: -170px;
        }
         &.file-upload, &.rate-limit {
          right: -116px;
        }
      }
    }
    .form-item {
      margin-bottom: 0;
      input {
        width: 200px;
      }
      .description: {
        margin-bottom: 0;
      }
    }
  }
  .custom-section {
    width: 1250px;
    .feature-section-title {
      max-width: 1250px;
    }
    .form-row::after {
      width: 1250px;
    }
  }
  .brand-1-group {
    .vert-elements {
      padding-left: 0;
    }
  }
  .vertical-group-data-time {
    .field-container {
      min-width: 210px;
      margin-right: 0px !important;
    }
    .horz-element-group {
      padding-left: 0;
    }
    .select__control {
      width: 200px;
      height: 34px;
      input {
        width: 1px;
      }
    }
  }
  .custom-group-element {
    .field-container.form-item {
      min-width: 185px;
      margin-right: 0px !important;
    }
  }

  & .button-toolbar {
    z-index: 2;
    position: sticky;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-height: 70px;
    padding-left: 346px;
    background-color: #FFFFFF;
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
      font-family: Lato;
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
  }
  .checkbox-field-inline {
    transform: translateX(-6px);
    .form-checkbox {
     transform: translateY(0);
     margin-left: 5px;
    }
   .group-details {
     padding-left: 35px
    }
    .form-item {
      padding: 2px;
    }
  }
  .group-mt-30 {
    margin-bottom: 30px;
  }
  .group-ml-20 {
    margin-left: 20px;
    .textbox {
      width: 80px;
    }
    .selectbox {
      min-width: 78px;
      .select__control {
        min-width: 78px;
        .select__single-value {
          margin: 0 !important;
        }
      }
    }
  }
  .group-field {
    .select__control {
      width: 320px;
    }
    label {
      font-family: Lato;
      font-weight: 700;
    }
  }
  .checkbox-middle {
    .form-checkbox {
      transform: translateY(4px);
    }
  }
  .notification-block {
    .element-details {
      label {
        font-weight: 600;
      }
    }
  }
`;

const testQuery: DocumentNode = gql`
  mutation UpdateSettings($payload: Object!) {
    update_settings(payload: $payload)
  }
`;

interface IProps {
  initialValues?: any;
  ui?: any;
  initYupSchema?: any;
  saveSchema?: DocumentNode;
}

export type PropsWithApollo = WithApolloClient<IProps>;

const GeneralSettings: React.FC<PropsWithApollo> = (
  {
    client,
    initialValues,
    ui ,
    initYupSchema = vaildationSchema,
    saveSchema= testQuery
  }
) => {

  const [yupSchema, setYupSchema] = useState({});

  useEffect(() => {
    setYupSchema(buildYup(vaildationSchema, validationConfig));
  }, []);

  return (
    <SettingsFormStyled>
      <Formik
        initialValues={initialValues || jsonSchema}
        validationSchema={yupSchema || initYupSchema}
        onSubmit={(values, { setSubmitting }) => {
          settingsSave(client, saveSchema, values);
          setSubmitting(false);
        }}
      >
        {(formikProps: any) => (
          <form onSubmit={formikProps.handleSubmit}>
            {SettingsFormFactory(ui || uiSchema, formikProps)}
            <div className='button-toolbar'>
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
            </div>
          </form>
        )}
      </Formik>
    </SettingsFormStyled>
  );
};

export default withApollo<PropsWithApollo>(GeneralSettings);
