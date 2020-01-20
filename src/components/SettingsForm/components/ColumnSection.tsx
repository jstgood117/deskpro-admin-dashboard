import * as React from 'react';

import ElementGroup from './ElementGroup';

const ColumnSection = (props: any) => {
  return (
    <div className='col'>
      <label>{props.title}</label>
      <div className='form-ctrl'>
        <ElementGroup {...props} />
      </div>
    </div>
  );
};

export default ColumnSection;
