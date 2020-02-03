import * as yup from 'yup';

const emailLoginValidation = yup
  .string()
  .email('validation.emailNotValid')
  .required('validation.required');

const requiredValidation = yup.string().required('validation.required');

const passwordValidation = yup
  .string()
  .required('validation.required')
  .min(8, 'validation.tooShortPassword')
  .matches(/[a-zA-Z]/, 'validation.passwordLetter');

export const ValidationSchema = () =>
  yup.object().shape({
    bespoke_host: requiredValidation,
    bespoke_port: requiredValidation,
    bespoke_username: emailLoginValidation,
    bespoke_password: passwordValidation,
    bespoke_database: passwordValidation,
    bespoke_zendesk_username: emailLoginValidation,
    bespoke_zendesk_domain: requiredValidation,
    bespoke_zendesk_token: requiredValidation,
    bespoke_zendesk_time: requiredValidation,
    bespoke_zendesk_brand: requiredValidation
  });
