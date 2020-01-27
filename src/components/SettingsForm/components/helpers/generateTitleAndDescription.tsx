import React from 'react';
import Tooltip from '../../../Tooltip';
import Icon from '../../../Icon';

export const generateTitleAndDescription = (className: string, props: any) => {

  if (!props.title && !props.description) {
    return null;
  }

  return (
    <div className='element-details'>
      <div className='title'>
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
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '4px'
              }}
            >
              <Icon name='info-question-text' />
            </span>
          </Tooltip>
        )}
      </div>
      {props.description && <p>{props.description}</p>}
    </div>
  );
};