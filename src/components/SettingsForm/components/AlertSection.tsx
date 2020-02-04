import React from 'react';

import Alert from '../../Alert';

const AlertSection = (props: any) => {
  return (
    <div className='alert-section'>
      <Alert color={props.color}>{props.description}</Alert>
    </div>
  );
};

export default AlertSection;
