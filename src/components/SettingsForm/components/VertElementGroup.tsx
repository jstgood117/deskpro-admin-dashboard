import * as React from 'react';

import FieldContainer from './FieldContainer';
import FieldElement from './FieldElement';
import { GenericFormComponent } from '../GenericFormComponent';
import { generateElementInfo } from './helpers/generateElementInfo';
import { generateTitleAndDescription } from './helpers/generateTitleAndDescription';

const VertElementGroup: React.FC = (props: any) => {
  // If props doesn't exist or if it does, its set to true
  const enabled =
    !props.showOn || props.formikProps.values[props.showOn] === true;

  console.log(props);

  return (
    <div className='vert-element-group'>
      <div className='form-item'>
        {props.field && (
          <FieldElement {...props.field} formikProps={props.formikProps} />
        )}
        {generateTitleAndDescription('group-details', props)}
        {generateElementInfo(props)}
      </div>
      <div style={{ paddingLeft: 30 }}>
        {enabled &&
          props.elements.map((element: any, i: number) =>
            element.type === 'field' ? (
              <FieldContainer
                {...element}
                key={i}
                formikProps={props.formikProps}
              />
            ) : (
              <GenericFormComponent
                {...element}
                key={i}
                formikProps={props.formikProps}
              />
            )
          )}
      </div>
    </div>
  );
};

export default VertElementGroup;
