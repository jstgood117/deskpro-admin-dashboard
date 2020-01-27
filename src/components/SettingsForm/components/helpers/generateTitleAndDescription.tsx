import React from 'react';
import settingsImages from '../../../SettingsImages/SettingsImages';

export const generateTitleAndDescription = (className: string, props: any) => {
  if (!props.title && !props.description) {
    return null;
  }

  return (
    <div className={className}>
      <div className='element-details'>
        {props.title && <label>{props.title}</label>}
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
