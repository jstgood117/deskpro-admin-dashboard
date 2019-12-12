import React from 'react';
import { Formik } from 'formik';

import {SettingsFormFactory} from './SettingsFormFactory';
import {jsonSchema, uiSchema} from './testData';

const SettingsForm = () => {

  return (
  <div>

    <Formik
      initialValues={jsonSchema}
      validate={values => {
        console.log(values);
      }}
      onSubmit={(values, {setSubmitting}) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {(formikProps:any) => (
        <form onSubmit={formikProps.handleSubmit}>
          {SettingsFormFactory(uiSchema, formikProps)}
          <button type='submit' disabled={formikProps.isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
  );
};

export default SettingsForm;

