import * as React from 'react';
import styled from 'styled-components';

import FieldElement from './FieldElement';
import { GenericFormComponent } from '../GenericFormComponent';
import Link from '../../Link';

const HozizontalGroup = styled.div`
margin-bottom:8px;
position: relative;
padding-left: 45px;
display:grid;
grid-auto-flow: column;
align-items: center;
grid-gap:8px;
& .hidden {
  display: none;
}
`;

const HozizontalGroupCol = styled.div`
& .hidden {
  display: none;
}
`;

const FieldContainer: React.FC = (props: any) => (
  <div className='field-container'>
    { (props.title || props.description) && (
      <div className='element-details'>
        {props.title && <label>{props.title}</label>}
        {props.description && <p>{props.description}</p>}
      </div>
    )}
    <div className='element-context'>
      <FieldElement {...props.field} formikProps={props.formikProps} />
    </div>
    {Array.isArray(props.info) && (
      <div className='element-info'>
        {props.info.map((info: any, index: number) => (
          <Link href={info.url} icon={info.icon} key={index}>
            {info.title}
          </Link>
        ))}
      </div>
    )}
  </div>
);


const HorizontalElementGroup: React.FC = (props: any) => {

  const enabled =
    !props.showOn || props.formikProps.values[props.showOn] === true;

  return (
    <HozizontalGroup>
      {enabled &&
        props.elements.map((element: any, i: number) => (
          <HozizontalGroupCol key={i}>
            { element.type === 'field' ? (
              <FieldContainer
                {...element}
                formikProps={props.formikProps}
              />
            ) : (
              <GenericFormComponent
                {...element}
                formikProps={props.formikProps}
              />
            )}
          </HozizontalGroupCol>
        ))}
    </HozizontalGroup>
  );
};

export default HorizontalElementGroup;
