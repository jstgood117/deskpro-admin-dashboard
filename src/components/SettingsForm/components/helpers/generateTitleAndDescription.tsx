import React from 'react';

export const generateTitleAndDescription = (className: string, props: any) => {

  if(!props.title && !props.description) {
    return null;
  }

  return (
    <div className='element-details'>
      {props.title && <label>{props.title}</label>}
      {props.description && <p>{props.description}</p>}
    </div>
  );
};