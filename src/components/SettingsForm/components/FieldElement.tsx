import * as React from 'react';

import Toggle from '../../Toggle';
import Input from '../../Input';
// import Profiles from '../../Profiles';

const FieldElement = (props: any) => {
  switch (props.type) {
    case 'toggle':
      return (
        <Toggle
          className='form-toggle'
          id={props.id}
          size='medium'
          checked={props.formikProps.values[props.id]}
          onChange={props.formikProps.handleChange}
        />
      );
    case 'input':
      return (
        <Input
          id={props.id}
          name={props.id}
          value={props.formikProps.values[props.id]}
          inputType='primary'
          onChange={event => {
            props.formikProps.handleChange(event);
          }}
        />
      );
    // case 'profiles':
    //   return <Profiles {...props} onEditClick={() => ({})} />;
    default:
      return null;
  }
};

export default FieldElement;
