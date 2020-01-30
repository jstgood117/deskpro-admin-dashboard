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

  return (
    <div className='vert-element-group'>
      <div className='form-item'>
        {props.field && (
          <div style={{ marginRight: 20 }}>
            <FieldElement {...props.field} formikProps={props.formikProps} />
          </div>
        )}
        {generateTitleAndDescription('group-details', props)}
        {generateElementInfo(props)}
      </div>
      <div style={{ paddingLeft: 45 }}>
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
