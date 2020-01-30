import * as yup from 'yup';

const emailLoginValidation = yup
  .string()
  .email('emailNotValid')
  .required('emailRequired');

export const ValidationSchema = () =>
  yup.object().shape({
    email: emailLoginValidation,
    password: emailLoginValidation
  });
