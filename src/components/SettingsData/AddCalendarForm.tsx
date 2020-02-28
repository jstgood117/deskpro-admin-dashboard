import React, { useState, FC } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as yup from 'yup';

import Button from '../Button';
import Drawer from '../Drawer';
import Icon from '../Icon';
import { ButtonStyleType } from '../Button/types';
import { DrawerHeader, DrawerFooter } from '../Drawer/DrawerStyles';
import { dpstyle } from '../Styled';
import { Field } from 'formik';
import { ErrorMessage } from '../SettingsForm/components/styles';
import { FormattedMessage } from 'react-intl';

export interface IProps {
  styleType?: ButtonStyleType;
  icon?: string;
  text?: string;
  id?: string;
  type?: string;
  formikProps?: any;
}
const requiredValidation = yup.string().required('validation.required');

const AddCalendarForm: FC<IProps> = ({ ...props }) => {
  const ValidationSchema = () =>
    yup.object().shape({
      business_hours_add_calendar_form_input: requiredValidation
    });

  const initialFormValue = {
    business_hours_add_calendar_form_input: props.formikProps.values[props.id]
  };
  const submit = () => {};

  const [isOpened, openDrawer] = useState(false);
  const EditFormInputTitle = styled(dpstyle.div1)`
    font-weight: 500;
    font-size: 14px;
    padding-bottom: 4px;
  `;

  const EditFormStyle = {
    width: '100%',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
    lineHeight: '150%',
    display: 'flex',
    alignItems: 'center',
    color: '#4c4f50',
    outline: 'none',
    border: '1px solid #d3d6d7',
    boxSizing: 'border-box',
    borderRadius: 4,
    resize: 'none'
  };

  return (
    <Formik
      onSubmit={submit}
      validationSchema={ValidationSchema()}
      initialValues={initialFormValue}
    >
      {(formikProps: any) => (
        <div>
          <Button
            styleType={props.styleType ? props.styleType : 'secondary'}
            onClick={() => {
              openDrawer(true);
            }}
            size='small'
          >
            {props.icon && <Icon name={props.icon} />}
            {props.text}
          </Button>
          <div>
            <Drawer
              open={isOpened}
              onClose={() => {
                formikProps.setFieldTouched(
                  'business_hours_add_calendar_form_input',
                  false
                );
                openDrawer(false);
              }}
            >
              <DrawerHeader>Add calendar</DrawerHeader>
              <div
                style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 19 }}
              >
                <EditFormInputTitle>Link</EditFormInputTitle>
                <Field name='business_hours_add_calendar_form_input'>
                  {({ field, meta }: any) => {
                    return (
                      <>
                        <textarea {...field} style={EditFormStyle} />
                        {meta.touched && meta.error && (
                          <ErrorMessage className='error'>
                            <FormattedMessage id={meta.error} />
                          </ErrorMessage>
                        )}
                      </>
                    );
                  }}
                </Field>
              </div>
              <DrawerFooter>
                <Button styleType='primary' size='medium'>
                  Save
                </Button>
                <Button styleType='secondary' size='medium'>
                  Delete
                </Button>
              </DrawerFooter>
            </Drawer>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default AddCalendarForm;
