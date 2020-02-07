import React from 'react';
import classNames from 'classnames';

import ElementGroup from './ElementGroup';

const PageSection = (props: any) => {
  return (
    <div className={classNames('form-row', 'page-section', props.className)}>
      <label>{props.title}</label>
      <div className='form-ctrl'>
        <ElementGroup {...props} />
      </div>
    </div>
  );
};

export default PageSection;
