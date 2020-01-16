import * as React from 'react';

import Toggle from '../../Toggle';
import Input from '../../Input';
// import Profiles from '../../Profiles';

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
  input: props => (
    <Input
      id={props.id}
      name={props.id}
      value={props.formikProps.values[props.id]}
      inputType='primary'
      onChange={event => {
        props.formikProps.handleChange(event);
      }}
    />
  )
  // profiles: props => (
  //   <Profiles
  //     {...props}
  //     profiles={props.formikProps.values[props.id]}
  //     onEditClick={() => ({})}
  //   />
  // )
};

// Generates specific element by `props.type` field
const FieldElement = (props: any) => {
  return elementsSelector[props.type]
    ? elementsSelector[props.type](props)
    : null;
};

export default FieldElement;
