import React from 'react';
import classNames from 'classnames';

import { StdElementRow } from './StdElementRow';

const ElementGroup = (props: any) => {
  let visible = true;
  if (props.dependenceOn) {
    if (
      props.formikProps.values[props.dependenceOn.field] !==
      props.dependenceOn.value
    ) {
      visible = false;
    }
  }
  return visible ? (
    <div className={classNames('group-elements', props.className)}>
      {props.elements.map((element: any, i: number) => (
        <StdElementRow {...element} key={i} formikProps={props.formikProps} />
      ))}
    </div>
  ) : null;
};

export default ElementGroup;
