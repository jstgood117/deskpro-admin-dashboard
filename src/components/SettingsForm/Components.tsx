import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import Toggle from '../../components/Toggle';
import Input from '../../components/Input';

const Group = styled.div`
  &.hidden {
    display:none;
  }
`;

export const MainElement = (props: any) => {

  switch (props.type) {
    case 'feature_section': return <FeatureSection {...props} />;
    case 'page_section': return <PageSection {...props} />;
    case 'group': return <ElementGroup {...props} />;
    case 'vertical_group': return <VertElementGroup {...props} />;
    case 'field': throw Error('Fields must be in a container');
    default: return null;
  }
};

export const PageSection = (props: any) => {
  return (
    <div className='form-row'>
      <label>{props.title}</label>
      <div className='form-ctrl'>
        <ElementGroup {...props} />
      </div>
    </div>
  );
};

export const StdElementRow = (props: any) => {
  if (props.type === 'field') {
    return (
      <div className='form-row'>
        <label>{props.title}</label>
        <div className='form-ctrl'>
          <FieldElement {...props.field} formikProps={props.formikProps} />
        </div>
      </div>
    );
  } else {
    return <MainElement {...props} />;
  }
};

export const FeatureSection = (props: any) => (
  <div className='feature-section'>
    <h1>{props.title}</h1>
    <div className='content'>
      {props.elements.map(
        (element: any, i: number) => (
          <StdElementRow
            key={i}
            {...element}
            formikProps={props.formikProps}
          />
        ))}
    </div>
  </div>
);

export const ElementGroup = (props: any) => {

  // If props doesn't exist or if it does, its set to true
  const enabled = !props.showOn || props.formikProps.values[props.showOn] === true;
  return (
    <Group className={classNames({ hidden: !enabled })}>
      {props.elements.map(
        (element: any, i: number) => (
          <StdElementRow
            {...element}
            key={i}
            formikProps={props.formikProps}
          />
        ))
      }
    </Group>
  );
};

export const VertElementGroup = (props: any) => {

  // If props doesn't exist or if it does, its set to true
  const enabled = !props.showOn || props.formikProps.values[props.showOn] === true;

  return (
    <Group className={classNames({ hidden: !enabled })}>
      <div className='horizontal-form'>
        {props.elements.map((element: any, i: number) => {
          if (element.type === 'field') {
            return (
              <div key={i}>
                <div className='left-col'>
                  <label>{element.title}</label>
                </div>
                <div className='right-col'>
                  <FieldElement
                    {...element.field}
                    formikProps={props.formikProps}
                  />
                </div>
              </div>
            );
          } else {
            return (
              <MainElement
                {...element}
                formikProps={props.formikProps}
              />
            ) ;
          }
        })}
      </div>
    </Group>
  );
};

export const FieldElement = (props: any) => {

  switch (props.type) {
    case 'toggle': return (
      <Toggle
        id={props.id}
        size='medium'
        checked={props.formikProps.values[props.id]}
        onChange={props.formikProps.handleChange}
      />
    );
    case 'input': return (
      <Input
        id={props.id}
        name={props.id}
        value={props.formikProps.values[props.id]}
        inputType='primary'
        onChange={(event => {
          props.formikProps.handleChange(event);
        })}
      />
    );
    default: return null;
  }
};
