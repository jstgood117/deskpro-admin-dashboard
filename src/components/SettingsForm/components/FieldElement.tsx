import * as React from 'react';
import styled from 'styled-components';
import { Field } from 'formik';
import { FormattedMessage } from 'react-intl';

import Toggle from '../../Toggle';
import Input from '../../Input';
import Profiles from '../../Profiles';
import StringListBuilder from '../../StringListBuilder';
import Units from '../../Units';
import Checkbox from '../../Checkbox';
import { UnitsValuesType } from '../../Units/Units';

const StyledCheckbox = styled(Checkbox)`
  &.form-checkbox {
    position: absolute;
    transform: translateY(9px);
    z-index: 1;
  }
`;
const ErrorMessage = styled.div`
  padding-top: 4px;
  padding-left: 4px;
  font-size: 14px;
  color: red;
`;

const elementsSelector: {
  [index: string]: (props: any) => React.ReactElement;
} = {
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
        props.formikProps.values[props.id].includes(props.value) ? true : false
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
  profiles: props => (
    <Profiles
      {...props}
      profiles={props.formikProps.values[props.id]}
      onEditClick={() => ({})}
    />
  ),
  stringlist: props => (
    <StringListBuilder {...props} values={props.formikProps.values[props.id]} />
  ),
  units: props => {
    return (
      <Units
        {...props}
        inputValue={props.formikProps.values[props.id]}
        option={props.formikProps.values[props.optionId]}
        onChange={(value: UnitsValuesType) => {
          console.log(value);
        }}
      />
    );
  }
};

// Generates specific element by `props.type` field
const FieldElement = (props: any) =>
  elementsSelector[props.type] && elementsSelector[props.type](props);

export default FieldElement;
