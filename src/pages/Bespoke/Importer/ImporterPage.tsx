import React, { FC } from 'react';
import { Formik, FormikHelpers } from 'formik';
import ImporterForm from './ImporterForm';

import { ValidationSchema } from './validation';
import HelpDesk from '../../../components/HelpDesk';
import Kayako from '../../../assets/svg/helpdesk/kayako.svg';
import Zenddesk from '../../../assets/svg/helpdesk/zendesk.svg';
import Radio from '../../../components/Radio';
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
    console.log('email', email);
    console.log('password', password);
  };
  const [option, setOption] = React.useState('');

  return (
    <div>
      <div>
        <Radio
          setOption={(val: any) => {
            setOption(val);
          }}
          option={option}
          value='option1'
          id='option1'
        />

        <HelpDesk
          title='Kayako'
          description='Import from your on-premise Kayako helpdesk.'
          logo={Kayako}
        />
        {option === 'option1' && (
          <Formik
            onSubmit={submit}
            validationSchema={ValidationSchema()}
            initialValues={{
              email: 'a',
              password: 'b'
            }}
            render={ImporterForm}
          />
        )}
      </div>
      <div>
        <Radio
          setOption={(val: any) => {
            setOption(val);
          }}
          option={option}
          id='option2'
          value='option2'
        />
        <HelpDesk
          title='Zendesk'
          description='Import from a Zendesk helpdesk.'
          logo={Zenddesk}
        />
        {option === 'option2' && (
          <Formik
            onSubmit={submit}
            validationSchema={ValidationSchema()}
            initialValues={{
              email: 'a',
              password: 'b'
            }}
            render={ImporterForm}
          />
        )}
      </div>
    </div>
  );
};

export default ImporterPage;
