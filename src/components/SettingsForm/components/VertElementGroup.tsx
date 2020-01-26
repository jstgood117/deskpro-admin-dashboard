import * as React from 'react';
import styled from 'styled-components';

import FieldElement from './FieldElement';
import { GenericFormComponent } from '../GenericFormComponent';
import Link from '../../Link';
import settingsImages from '../../SettingsImages/SettingsImages';

const Group = styled.div`
  position: relative;
  padding-left: 45px;
  & .hidden {
    display: none;
  }
`;

const GroupDetails: React.FC = (props: any) => (
  <div className='group-details'>
    <div>
      {props.title && <label>{props.title}</label>}
      {props.description && <p>{props.description}</p>}
    </div>
    {props.articles && (
      <div className='group-articles'>
        <img
          alt='Featured articles example'
          src={settingsImages[props.articles]}
        />
      </div>
    )}
  </div>
);

const FieldContainer: React.FC = (props: any) => (
  <div className='field-container'>
    <div className='element-details'>
      {props.title && <label>{props.title}</label>}
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
