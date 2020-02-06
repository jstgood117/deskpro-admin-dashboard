import React from 'react';
import classNames from 'classnames';

import Alert from '../../Alert';

const AlertSection = (props: any) => {
  return (
    <div className={classNames('alert-section', props.className)}>
      <Alert color={props.color}>{props.description}</Alert>
    </div>
  );
};

export default AlertSection;
