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

/*
  let groups = [];

  Array.from(props.elements || []).forEach((el: any) => {
    //console.log(el.type, el);
  });

  const countVertGroups = props.elements.filter(
    (d: any) => d.type === 'vertical_group'
  ).length;

  if (countVertGroups > 1) {
    console.log(countVertGroups)
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
*/
