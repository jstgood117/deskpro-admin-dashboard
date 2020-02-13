import React from 'react';
import classNames from 'classnames';

import ElementGroup from './ElementGroup';
import SettingsInfo from './SettingsInfo';
import Tooltip from '../../Tooltip';
import Icon from '../../Icon';
import { generateElementInfo } from './helpers/generateElementInfo';

const PageSection = (props: any) => {
  const infoIcon =
    props.settingsInfo && !props.formikProps.values[props.settingsInfo.showOn];

  return (
    <div className={classNames('form-row', 'page-section', props.className)}>
      <label>
        {props.title}
        {infoIcon && (
          <Tooltip
            content={props.settingsInfo.tooltip}
            styleType='light'
            placement='bottom-start'
            distance={0}
          >
            <span
              className='kanban'
              onClick={() =>
                props.formikProps.setFieldValue(props.settingsInfo.showOn, true)
              }
            >
              <Icon name='info-text' />
            </span>
          </Tooltip>
        )}
      </label>
      <div className='form-ctrl'>
        {props.settingsInfo && (
          <SettingsInfo {...props.settingsInfo} formikProps={props.formikProps} />
        )}
        {props.settingsInfo && (
          <div className='settings-info-button'>
            {generateElementInfo(props.settingsInfo)}
          </div>
        )}
        <ElementGroup {...props} />
      </div>
    </div >
  );
};

export default PageSection;
