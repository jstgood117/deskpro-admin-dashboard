import * as React from 'react';

import ElementGroup from './ElementGroup';

const PageSection = (props: any) => {
  return (
    <div className='form-row'>
      <label>{props.title}</label>
      <div className='form-ctrl'>
        <ElementGroup {...props} />
      </div>
    </div>
  );
};

export default PageSection;
