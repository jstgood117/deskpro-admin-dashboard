import * as React from 'react';

import FieldElement from './FieldElement';
import { GenericFormComponent } from '../GenericFormComponent';

export const StdElementRow = (props: any) => {
  if (props.type === 'field') {
    return (
      <div className='form-row'>
        <label>{props.title}</label>
        <div className='form-ctrl'>
          <FieldElement {...props.field} formikProps={props.formikProps} />
        </div>
      </div>
    );
  } else {
    return <GenericFormComponent {...props} />;
  }
};
