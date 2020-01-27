import React from 'react';
import Link from '../../../Link';

export const generateElementInfo = (props: any) => {

  if(!Array.isArray(props.info)) {
    return null;
  }

  return (
    <div className='element-info'>
      {props.info.map((info: any, index: number) => (
        <Link href={info.url} icon={info.icon} key={index}>
          {info.title}
        </Link>
      ))}
    </div>
  );
};