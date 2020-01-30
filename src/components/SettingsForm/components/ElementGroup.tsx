import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import { StdElementRow } from './StdElementRow';

const ElementGroup = (props: any) => {
  const countVertGroups = props.elements.filter((d: any) => d.type === 'vertical_group').length;

  if (countVertGroups > 1) {
    const elements = _.range(0, countVertGroups * 2, 2).map(index =>
      props.elements.slice(index, index + 2)
    );
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {elements.map(([field, group], i) => {
          return (
            <div key={i} className='group-elements'>
              <StdElementRow {...field} formikProps={props.formikProps} />
              <StdElementRow {...group} formikProps={props.formikProps} />
            </div>
          );
        })}
      </div>
    );
  }
  const hasGroups = props.elements.filter((d: any) => d.type === 'group').length > 0;

  return (
    <div className={classNames('group-elements', { 'column-groups': hasGroups })}>
      {props.elements.map((element: any, i: number) => (
        <StdElementRow {...element} key={i} formikProps={props.formikProps} />
      ))}
    </div>
  );
};

export default ElementGroup;
