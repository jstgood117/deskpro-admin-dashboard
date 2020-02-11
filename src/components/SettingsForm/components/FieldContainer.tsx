import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

import FieldElement from './FieldElement';
import { generateElementInfo } from './helpers/generateElementInfo';
import { generateTitleAndDescription } from './helpers/generateTitleAndDescription';

const SubText = styled.span`
  position: absolute;
  left: 50%;
  top: 35px;
  padding-left: 6px;
  padding-bottom: 4px;
`;

export const FieldContainer: React.FC = (props: any) => (
  <div className={classNames('field-container form-item', props.className)}>
    <div className='group-details'>
      {generateTitleAndDescription('element-details', props)}
      <div className='element-context'>
        <FieldElement {...props.field} formikProps={props.formikProps} />
      </div>
    </div>
    {props.field && props.field.subText && <SubText>{props.field.subText}</SubText>}
    {generateElementInfo(props)}
  </div>
);

export default FieldContainer;
