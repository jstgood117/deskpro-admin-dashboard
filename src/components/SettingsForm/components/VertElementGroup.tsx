import * as React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

import FieldElement from './FieldElement';
import { GenericFormComponent } from '../GenericFormComponent';

const Group = styled.div`
  /* position: relative; */
  padding-left: 45px;
  & .hidden {
    display: none;
  }
`;

const VertElementGroup = (props: any) => {
  // If props doesn't exist or if it does, its set to true
  const enabled =
    !props.showOn || props.formikProps.values[props.showOn] === true;

  return (
    <Group>
      <div className='horizontal-form'>
        <div className='group-details'>
          {props.title && <label>{props.title}</label>}
          {props.description && <p>{props.description}</p>}
        </div>
        {props.elements.map((element: any, i: number) => {
          if (element.type === 'field') {
            return (
              <div className={classNames({ hidden: !enabled })} key={i}>
                <div className='element-details'>
                  {element.title && <label>{element.title}</label>}
                  {element.description && <p>{element.description}</p>}
                </div>
                <div className='element-context'>
                  <FieldElement
                    {...element.field}
                    formikProps={props.formikProps}
                  />
                </div>
              </div>
            );
          } else {
            return (
              <div className={classNames({ hidden: !enabled })} key={i}>
                {element.title && <label>{element.title}</label>}
                {element.description && <p>{element.description}</p>}
                <GenericFormComponent
                  {...element}
                  formikProps={props.formikProps}
                />
              </div>
            );
          }
        })}
      </div>
    </Group>
  );
};

export default VertElementGroup;
