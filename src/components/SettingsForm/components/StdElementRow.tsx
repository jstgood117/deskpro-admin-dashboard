import * as React from 'react';

import FieldElement from './FieldElement';
import { GenericFormComponent } from '../GenericFormComponent';
import FeatureSectionContext from '../contexts/FeatureSectionContext';

export const StdElementRow = (props: any) => {
  if (props.type === 'field') {
    return (
      <FeatureSectionContext.Consumer>
        {context => {
          const htmlFor = context.prefixName
            ? `${context.prefixName}_${props.field.id}`
            : props.field.id;
          return (
            <div className='form-row'>
              <label htmlFor={htmlFor}>{props.title}</label>
              <div className='form-ctrl'>
                <FieldElement
                  {...props.field}
                  formikProps={props.formikProps}
                />
              </div>
            </div>
          );
        }}
      </FeatureSectionContext.Consumer>
    );
  } else {
    return <GenericFormComponent {...props} />;
  }
};
