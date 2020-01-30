import React, { FC } from 'react';
import { Formik, FormikHelpers } from 'formik';
import ImporterForm from './ImporterForm';

import { ValidationSchema } from './validation';
interface IProps {
  path: string;
}
interface ILoginFormValues {
  email: string;
  password: string;
}

const ImporterPage: FC<IProps> = () => {
  const submit = (
    { email, password }: ILoginFormValues,
    { resetForm }: FormikHelpers<ILoginFormValues>
  ) => {
    console.log('email', email)
    console.log('password', password)
  };
  return (
    <Formik
      onSubmit={submit}
      validationSchema={ValidationSchema()}
      initialValues={{
        email: 'a',
        password: 'b'
      }}
      render={ImporterForm}
    />
  );
};

export default ImporterPage;
