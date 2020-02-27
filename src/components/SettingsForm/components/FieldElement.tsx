import * as React from 'react';
import { Field } from 'formik';
import { FormattedMessage } from 'react-intl';

import Toggle from '../../Toggle';
import Input from '../../Input';
import TextArea from './TextArea';
import Profiles from '../../Profiles';
import StringListBuilder from '../../StringListBuilder';
import Units from '../../Units';
import FileUpload from '../../Attachment/FileUpload';
import ColorPicker from '../../ColorPicker';
import Radio from '../../Radio/Radio';
import RadioGroup from '../../Radio/RadioGroup';
import Button from '../../Button';
import Icon from '../../Icon';
import SingleSelect from '../../SelectComponents/SingleSelect';
import { UnitsValuesType } from '../../Units/Units';
import FeatureSectionContext from '../contexts/FeatureSectionContext';
import ProgressBar from '../../ProgressBar';
import { StyledCheckbox, ErrorMessage, ReportPanel } from './styles';
import SettingsData from '../../SettingsData';
import Markdown from '../../Markdown';
import UserGroups from '../../UserGroups';

const elementsSelector: {
  [index: string]: (props: any) => React.ReactElement;
} = {
  userGroups: props => (
    <UserGroups
      id={props.id}
      title={props.title}
      buttonTitle={props.buttonTitle}
      options={props.options}
      selectedOptions={props.formikProps.values[props.id]}
      tooltip={props.tooltip}
      formikProps={props.formikProps}
    />
  ),
  fileUpload: props => (
    <FileUpload
      id={props.id}
      onChangeFile={value => props.formikProps.setFieldValue(props.id, value)}
      files={props.formikProps.values[props.id]}
    />
  ),
  colorPicker: props => (
    <ColorPicker
      id={props.id}
      value={props.formikProps.values[props.id]}
      onChange={props.formikProps.handleChange}
    />
  ),
  radioGroup: props => (
    <RadioGroup
      id={props.id}
      className={props.className}
      options={props.options}
      value={props.formikProps.values[props.id]}
      onChange={val => props.formikProps.setFieldValue(props.id, val)}
    />
  ),
  radio: props => (
    <Radio
      className='radio-option'
      setOption={(val: any) => {
        props.formikProps.setFieldValue(props.id, val);
      }}
      option={props.formikProps.values[props.id]}
      value={props.value}
      id={props.id}
      label={props.label}
    />
  ),
  singleSelect: props => {
    return (
      <SingleSelect
        placeholder={props.placeholder}
        options={props.options}
        type={props.selectType}
        selectOption={val => props.formikProps.setFieldValue(props.id, val)}
        selectedOption={props.formikProps.values[props.id]}
      />
    );
  },
  toggle: props => (
    <Toggle
      className='form-toggle'
      id={props.id}
      size='medium'
      checked={props.formikProps.values[props.id]}
      onChange={props.formikProps.handleChange}
    />
  ),
  checkbox: props => {
    return (
      <Field name={props.id}>
        {({ meta }: any) => {
          return (
            <>
              <StyledCheckbox
                className='form-checkbox'
                id={props.id}
                checked={
                  props.formikProps.values[props.id] &&
                  props.formikProps.values[props.id].includes(props.value)
                }
                value={props.value}
                onChange={event => {
                  props.formikProps.handleChange(event);
                }}
              />
              {meta.touched && meta.error && (
                <ErrorMessage
                  className='error'
                  style={{
                    position: 'absolute',
                    bottom: '-40px',
                    minWidth: '643px',
                    left: 24
                  }}
                >
                  <FormattedMessage id={meta.error} />
                </ErrorMessage>
              )}
            </>
          );
        }}
      </Field>
    );
  },
  input: props => (
    <Field name={props.id}>
      {({ field, meta }: any) => (
        <div>
          <Input
            id={props.id}
            placeholder={props.placeholder}
            inputType='primary'
            type={props.input_type || 'text'}
            {...field}
          />
          {meta.touched && meta.error && (
            <ErrorMessage className='error'>
              <FormattedMessage id={meta.error} />
            </ErrorMessage>
          )}
        </div>
      )}
    </Field>
  ),
  textarea: props => (
    <Field name={props.id}>
      {({ field, meta }: any) => {
        return (
          <>
            <TextArea placeholder={props.placeholder} {...field} />
            {meta.touched && meta.error && (
              <ErrorMessage className='error'>
                <FormattedMessage id={meta.error} />
              </ErrorMessage>
            )}
          </>
        );
      }}
    </Field>
  ),
  select: props => (
    <Field name={props.id}>
      {({ field, meta }: any) => (
        <div style={{ position: 'relative' }}>
          <SingleSelect
            type='primary'
            options={props.options}
            selectedOption={props.formikProps.values[props.id]}
            selectOption={option => {

              props.formikProps.setFieldTouched(props.id, true);

              return props.formikProps.setFieldValue(
                props.id,
                option.value ? option : undefined
              );
            }}
            placeholder={props.placeholder}
          />
          {meta.touched && meta.error && (
            <ErrorMessage className='error'>
              <FormattedMessage id={'validation.required'} />
            </ErrorMessage>
          )}
        </div>
      )}
    </Field>
  ),
  button: props => (
    <Button
      styleType={props.styleType ? props.styleType : 'secondary'}
      onClick={props.formikProps.handleSubmit}
      disabled={props.formikProps.isSubmitting}
      size='small'
    >
      {props.icon && <Icon name={props.icon} />}
      {props.text}
    </Button>
  ),
  addCalendarButton: props => (
    <SettingsData type='add-calendar-form' props={props} />
  ),
  profiles: props => (
    <Profiles
      {...props}
      profiles={props.profiles}
      selected={props.formikProps.values[props.id]}
      onEditClick={() => { }}
      formikProps={props.formikProps}
    />
  ),
  stringlist: props => (
    <Field name={props.id}>
      {({ field, meta }: any) => (
        <div
          tabIndex={0}
          style={{ marginBottom: 16, outline: 'none' }}
          onBlur={() => props.formikProps.setFieldTouched(props.id, true)}
        >
          <StringListBuilder
            {...props}
            className={props.className}
            values={props.formikProps.values[props.id]}
          />
          {meta.touched && meta.error && (
            <ErrorMessage className='error'>
              <FormattedMessage id={'validation.permissions.min_1'} />
            </ErrorMessage>
          )}
        </div>
      )}
    </Field>
  ),
  units: props => {
    return (
      <Field name={props.id}>
        {({ meta }: any) => {
          return (
            <div>
              <Units
                {...props}
                inputValue={props.formikProps.values[props.id]}
                option={props.formikProps.values[props.optionId]}
                onBlur={() => {
                  props.formikProps.setFieldTouched(props.id);
                }}
                onChange={(value: UnitsValuesType) => {
                  props.formikProps.setFieldValue(props.id, value.inputValue);
                  props.formikProps.setFieldValue(
                    props.optionId,
                    value.selectValue.value
                  );
                }}
              />
              {meta.touched && meta.error && (
                <ErrorMessage className='error'>
                  <FormattedMessage id={meta.error} />
                </ErrorMessage>
              )}
            </div>
          );
        }}
      </Field>
    );
  },
  progress: props => {
    return (
      <ProgressBar
        percentage={props.formikProps.values[props.value]}
        label={props.label}
      />
    );
  },
  reportFilePanel: props => {
    return (
      <ReportPanel>
        <div className='label'>
          <Icon name='check' />
          <span>Your report file is ready to download.</span>
        </div>
        <Button
          styleType='secondary'
          onClick={() => { }}
          size='small'
          className='export-btn'
        >
          <Icon name='export' />
          Download Report File
        </Button>
      </ReportPanel>
    );
  },
  referenceFilePanel: () => {
    return <SettingsData type='reference-code-panel' />;
  },
  holidayList: props => {
    return (
      <SettingsData
        type='holiday-list'
        props={{ data: props.formikProps.values[props.id] }}
      />
    );
  },
  settingInfo: props => {
    return (
      <SettingsData
        type='setting-info'
        props={{
          text: props.text
        }}
      />
    );
  },
  markdown: props => {
    return (
      <Field name={props.id}>
        {({ field, meta }: any) => (
          <div>
            <Markdown {...field} />
            {meta.touched && meta.error && (
              <ErrorMessage className='error'>
                <FormattedMessage id={meta.error} />
              </ErrorMessage>
            )}
          </div>
        )}
      </Field>
    );
  }
};

// Generates specific element by `props.type` field
const FieldElement = (props: any) => {
  return (
    <FeatureSectionContext.Consumer>
      {context => (
        <React.Fragment>
          {elementsSelector[props.type] &&
            elementsSelector[props.type]({
              ...props,
              id: context.prefixName
                ? `${context.prefixName}_${props.id}`
                : props.id
            })}
        </React.Fragment>
      )}
    </FeatureSectionContext.Consumer>
  );
};

export default FieldElement;
