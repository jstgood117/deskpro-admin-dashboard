import React from 'react';
import settingsImages from '../../../SettingsImages/SettingsImages';

import Tooltip from '../../../Tooltip';
import Icon from '../../../Icon';

export const generateTitleAndDescription = (className: string, props: any) => {

  if (!props.title && !props.description) {
    return null;
  }

  return (
    <div className={className}>
      <div className='element-details'>
        {props.title && <label>{props.title}</label>}
        {props.tooltip && (
          <Tooltip
            content={props.tooltip}
            styleType='light'
            placement='bottom-start'
            distance={0}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                paddingLeft: '4px',
                transform: 'translateY(2px)'
              }}
            >
              <Icon name='info-question-text' />
            </span>
          </Tooltip>
        )}
        {props.description && <p>{props.description}</p>}
      </div>
      {props.articles && (
        <div className='group-articles'>
          <img
            alt='Featured articles example'
            src={settingsImages[props.articles]}
          />
        </div>
      )}
    </div>
  );
};
