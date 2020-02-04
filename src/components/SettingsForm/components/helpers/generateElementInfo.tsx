import React from 'react';
import Link from '../../../Link';

export const generateElementInfo = (props: any) => {
  if (!Array.isArray(props.info)) {
    return null;
  }

  return (
    <div className='element-info'>
      {props.info.map((info: any, index: number) => (
        <Link className='element-info-link' href={info.url} icon={info.icon} key={index}>
          {info.title}
        </Link>
      ))}
    </div>
  );
};
