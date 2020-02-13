import React from 'react';
import classNames from 'classnames';

import ElementGroup from './ElementGroup';
import SettingsInfo from './SettingsInfo';
import Icon from '../../Icon';

const PageSection = (props: any) => {
  const kanbanIcon =
    props.settingsInfo && !props.formikProps.values[props.settingsInfo.showOn];

  return (
    <div className={classNames('form-row', 'page-section', props.className)}>
      <label>
        {props.title}
        {kanbanIcon && (
          <span
            className='kanban'
            onClick={() =>
              props.formikProps.setFieldValue(props.settingsInfo.showOn, true)
            }
          >
            <Icon name='kanban' />
          </span>
        )}
      </label>
      <div className='form-ctrl'>
        {props.settingsInfo && (
          <SettingsInfo {...props.settingsInfo} formikProps={props.formikProps} />
        )}
        <ElementGroup {...props} />
      </div>
    </div>
  );
};

export default PageSection;
