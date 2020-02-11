import React from 'react';
import classNames from 'classnames';
import Markdown from 'react-markdown';
import settingsImages from '../../../SettingsImages/SettingsImages';

import Tooltip from '../../../Tooltip';
import Icon from '../../../Icon';

import FeatureSectionContext from '../../contexts/FeatureSectionContext';

export const generateTitleAndDescription = (className: string, props: any) => {
  if (!props.title && !props.description) {
    return null;
  }

  return (
    <FeatureSectionContext.Consumer>
      {context => {
        let propId = '';
        if (className === 'group-details') {
          propId = props.showOn;
        } else if (className === 'element-details') {
          propId = props.field && props.field.id;
        }
        const htmlFor = context.prefixName
          ? `${context.prefixName}_${propId}`
          : propId;
        return (
          <div
            className={classNames(className, {
              'feature-articles': props.articles
            })}
          >
            <div className='element-details'>
              {props.title && (
                <div className='element-details-label'>
                  <label htmlFor={htmlFor}>{props.title}</label>
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
              )}
              {props.description && (
                <div className='description'>
                  <Markdown>{props.description}</Markdown>
                </div>
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
      }}
    </FeatureSectionContext.Consumer>
  );
};
