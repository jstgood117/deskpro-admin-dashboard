import * as React from 'react';
import styled from 'styled-components';

import FieldElement from './FieldElement';
import { GenericFormComponent } from '../GenericFormComponent';
import Link from '../../Link';
import Tooltip from '../../Tooltip';
import Icon from '../../Icon';

const Group = styled.div`
  position: relative;
  padding-left: 45px;
  & .hidden {
    display: none;
  }
`;

const StyledTooltip: React.FC = (props: any) => (
  <Tooltip
    content={props.tooltip}
    styleType='light'
    placement='bottom-start'
    distance={0}
  >
    <span
      style={{
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '4px'
      }}
    >
      <Icon name='info-question-text' />
    </span>
  </Tooltip>
);

const GroupDetails: React.FC = (props: any) => (
  <div className='group-details'>
    <div className='title'>
      {props.title && <label>{props.title}</label>}
      {props.tooltip && <StyledTooltip {...props} />}
    </div>
    {props.description && <p>{props.description}</p>}
  </div>
);

const FieldContainer: React.FC = (props: any) => (
  <div className='field-container'>
    <div className='element-details'>
      <div className='title'>
        {props.title && <label>{props.title}</label>}
        {props.tooltip && <StyledTooltip {...props} />}
      </div>
      {props.description && <p>{props.description}</p>}
    </div>
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

const VertElementGroup: React.FC = (props: any) => {
  // If props doesn't exist or if it does, its set to true
  const enabled =
    !props.showOn || props.formikProps.values[props.showOn] === true;

  return (
    <Group>
      <GroupDetails {...props} />
      {Array.isArray(props.info) && (
        <div className='group-info'>
          {props.info.map((info: any, index: number) => (
            <Link href={info.url} icon={info.icon} key={index}>
              {info.title}
            </Link>
          ))}
        </div>
      )}
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
    </Group>
  );
};

export default VertElementGroup;
