import React from 'react';
import styled from 'styled-components';

import FieldElement from './FieldElement';
import { generateElementInfo } from './helpers/generateElementInfo';
import { generateTitleAndDescription } from './helpers/generateTitleAndDescription';

const SubText = styled.span`
  position: absolute;
  left: 50%;
  bottom: 16px;
  padding-left: 6px;
  padding-bottom: 4px;
`;
export const FieldContainer: React.FC = (props: any) => (
  <div className='field-container'>
    {generateTitleAndDescription('element-details', props)}
    <div className='element-context'>
      <FieldElement {...props.field} formikProps={props.formikProps} />
    </div>
    {props.field.subText && <SubText>{props.field.subText}</SubText>}
    {generateElementInfo(props)}
  </div>
);

export default FieldContainer;
