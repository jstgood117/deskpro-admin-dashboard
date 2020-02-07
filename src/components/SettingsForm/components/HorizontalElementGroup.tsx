import * as React from 'react';
import styled from 'styled-components';

import { GenericFormComponent } from '../GenericFormComponent';
import { generateElementInfo } from './helpers/generateElementInfo';
import FieldContainer from './FieldContainer';

const HozizontalGroup = styled.div`
  margin-bottom: 16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 685px;
  box-sizing: border-box;
  & .hidden {
    display: none;
  }
`;

const HozizontalGroupCol = styled.div`
  margin-bottom: 0px;
  & .field-container {
    margin: 0 8px 0 0 !important;
    min-width: 223px;
    input {
      margin: 0;
    }
    label {
      margin: 0;
    }
  }
  & .hidden {
    display: none;
  }
`;

const HorizontalElementGroup: React.FC = (props: any) => {
  const enabled =
    !props.showOn || props.formikProps.values[props.showOn] === true;

  return (
    <div className='horz-element-group'>
      <HozizontalGroup>
        {enabled &&
          props.elements.map((element: any, i: number) => (
            <HozizontalGroupCol key={i}>
              {element.type === 'field' ? (
                <FieldContainer {...element} formikProps={props.formikProps} />
              ) : (
                  <GenericFormComponent
                    {...element}
                    formikProps={props.formikProps}
                  />
                )}
            </HozizontalGroupCol>
          ))}
      </HozizontalGroup>
      {generateElementInfo(props)}
    </div>
  );
};

export default HorizontalElementGroup;
