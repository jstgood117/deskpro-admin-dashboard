import React from 'react';
import { ErrorMessage, Field, Form, FormikProps } from 'formik';

interface ILoginFormValues {
  email: string;
  password: string;
}

const ImporterForm = (props: FormikProps<ILoginFormValues>) => {
  return (
    <Form className='auth-form'>
      <div className='form-field'>
        <div className='form-label'>
          <label>email</label>
        </div>
        <Field
          name='email'
          value={props.values['email']}
          type='email'
          className='form-input'
        />
        <ErrorMessage name='email'>
          {() => <div className='error-message'>{props.errors['email']}</div>}
        </ErrorMessage>
      </div>
      <div className='form-field'>
        <div className='form-label'>
          <label>password</label>
        </div>
        <Field
          name='password'
          value={props.values['password']}
          type='password'
          className='form-input'
        />
        <ErrorMessage name='password'>
          {() => (
            <div className='error-message'>{props.errors['password']}</div>
          )}
        </ErrorMessage>
      </div>
      <div className='form-button'>
        <button>submit</button>
      </div>
    </Form>
  );
};

export default ImporterForm;
