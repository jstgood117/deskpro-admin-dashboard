import * as React from 'react';
import styled from 'styled-components';

import { GenericFormComponent } from '../GenericFormComponent';
import FieldContainer from './FieldContainer';

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
