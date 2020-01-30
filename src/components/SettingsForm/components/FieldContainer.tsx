import React from 'react';
import FieldElement from './FieldElement';

import { generateElementInfo } from './helpers/generateElementInfo';
import { generateTitleAndDescription } from './helpers/generateTitleAndDescription';

export const FieldContainer: React.FC = (props: any) => (
  <div className='field-container form-item'>
    <div className='group-details'>
      {generateTitleAndDescription('element-details', props)}
      <div className='element-context'>
        <FieldElement {...props.field} formikProps={props.formikProps} />
      </div>
    </div>
    {generateElementInfo(props)}
  </div>
);

export default FieldContainer;
