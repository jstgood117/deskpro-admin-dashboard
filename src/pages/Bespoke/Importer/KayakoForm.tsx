import React from 'react';
import { Form } from 'formik';
import { SettingsFormFactory } from '../../../components/SettingsForm/SettingsFormFactory';
import { uiKayakoSchema } from './testData';
import Button from '../../../components/Button';
import Icon from '../../../components/Icon';

const KayakoForm = (props: any) => {
  return (
    <Form className='auth-form'>
      {SettingsFormFactory(uiKayakoSchema, props)}
      <Button styleType='secondary' size='small' className='test-btn'>
        <Icon name='menu' />
        Test
      </Button>
    </Form>
  );
};

export default KayakoForm;
