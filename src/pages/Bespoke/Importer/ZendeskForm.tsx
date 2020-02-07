import React from 'react';
import { Form } from 'formik';
import { SettingsFormFactory } from '../../../components/SettingsForm/SettingsFormFactory';
import { uiZendeskSchema } from './testData';
import Button from '../../../components/Button';
import Icon from '../../../components/Icon';

const ZendeskForm = (props: any) => {
  return (
    <Form className='helpdesk-form'>
      {SettingsFormFactory(uiZendeskSchema, props)}
      <Button styleType='secondary' size='small' className='test-btn'>
        <Icon name='menu' />
        Test
      </Button>
    </Form>
  );
};

export default ZendeskForm;
