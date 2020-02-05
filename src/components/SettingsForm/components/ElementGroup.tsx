import React from 'react';

import { StdElementRow } from './StdElementRow';

const ElementGroup = (props: any) => {
  return (
    <div className='group-elements'>
      {props.elements.map((element: any, i: number) => (
        <StdElementRow {...element} key={i} formikProps={props.formikProps} />
      ))}
    </div>
  );
};

export default ElementGroup;
