import React from 'react';
import FieldElement from './FieldElement';

import { generateElementInfo } from './helpers/generateElementInfo';
import { generateTitleAndDescription } from './helpers/generateTitleAndDescription';


export const FieldContainer: React.FC = (props: any) => (
  <div className='field-container'>
    {generateTitleAndDescription('element-details', props)}
    <div className='element-context'>
      <FieldElement {...props.field} formikProps={props.formikProps} />
    </div>
    {generateElementInfo(props)}
  </div>
);

export default FieldContainer;
