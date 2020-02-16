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

const elementsSelector: {
  [index: string]: (props: any) => React.ReactElement;
} = {
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
  checkbox: props => (
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
  ),
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
    <div>
      <TextArea
        value={props.formikProps.values[props.id]}
        placeholder={props.placeholder}
        onChange={(val: Text) => props.formikProps.setFieldValue(props.id, val)}
        {...props}
      />
    </div>
  ),
  select: props => (
    <SingleSelect
      {...props}
      selectedOption={props.formikProps.values[props.id]}
      selectOption={val => props.formikProps.setFieldValue(props.id, val)}
      placeholder={props.placeholder}
      type='primary'
    />
  ),
  button: props => (
    <Button
      styleType={props.styleType ? props.styleType : 'secondary'}
      onClick={() => {}}
      size='small'
    >
      {props.icon && <Icon name={props.icon} />}
      {props.text}
    </Button>
  ),
  profiles: props => (
    <Profiles
      {...props}
      profiles={props.formikProps.values[props.id]}
      onEditClick={() => ({})}
    />
  ),
  stringlist: props => (
    <div style={{ marginBottom: 16 }}>
      <StringListBuilder
        {...props}
        values={props.formikProps.values[props.id]}
      />
    </div>
  ),
  units: props => {
    return (
      <Units
        {...props}
        inputValue={props.formikProps.values[props.id]}
        option={props.formikProps.values[props.optionId]}
        onChange={(value: UnitsValuesType) => {
          props.formikProps.setFieldValue(props.id, value.inputValue);
          props.formikProps.setFieldValue(props.optionId, value.selectValue.value);
        }}
      />
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
          onClick={() => {}}
          size='small'
          className='export-btn'
        >
          <Icon name='export' />
          Download Report File
        </Button>
      </ReportPanel>
    );
  },
  referenceFilePanel: props => {
    return <SettingsData type='reference-code-panel' />;
  },
  markdown: () => {
    return <Markdown />;
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
