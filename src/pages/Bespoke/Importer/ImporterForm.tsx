import React from 'react';
import {
  ErrorMessage,
  Field,
  Form,
  FormikProps,
  FieldProps
} from 'formik';
import Input from '../../../components/Input';

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
          render={({ field, form }: FieldProps) => (
            <Input
              disabled={form.isSubmitting}
              inputType='primary'
              {...field}
            />
          )}
        />
        <ErrorMessage name='email'>
          {() => <div className='error-message'>{props.errors['email']}</div>}
        </ErrorMessage>
      </div>
      <div className='form-button'>
        <button>submit</button>
      </div>
    </Form>
  );
};

export default ImporterForm;
