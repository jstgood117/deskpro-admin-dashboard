import React from 'react';
import classNames from 'classnames';
import Markdown from 'react-markdown';
import settingsImages from '../../../SettingsImages/SettingsImages';

import Tooltip from '../../../Tooltip';
import Icon from '../../../Icon';

export const generateTitleAndDescription = (className: string, props: any) => {
  if (!props.title && !props.description) {
    return null;
  }

  let htmlFor = '';
  if (className === 'group-details') {
    htmlFor = props.showOn;
  } else if (className === 'element-details') {
    htmlFor = props.field.id;
  }

  return (
    <div
      className={classNames(className, { 'feature-articles': props.articles })}
    >
      <div className='element-details'>
        <div className='element-details-label'>
          {props.title && <label htmlFor={htmlFor}>{props.title}</label>}
          {props.tooltip && (
            <Tooltip
              content={props.tooltip}
              styleType='light'
              placement='bottom-start'
              distance={0}
            >
              <span
                style={{
                  paddingLeft: 4
                }}
              >
                <Icon name='info-question-text' />
              </span>
            </Tooltip>
          )}
        </div>
        {props.description && (
          <p className='description'>
            <Markdown>{props.description}</Markdown>
          </p>
        )}
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
