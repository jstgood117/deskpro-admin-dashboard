import React from 'react';

import { SettingsData, HeaderCard } from '../../SettingsData/Helpers';

import FeatureSectionContext from '../contexts/FeatureSectionContext';

const SettingsDataComponent = (props: any) => {
  return (
    <FeatureSectionContext.Consumer>
      {context => {
        const id = context.prefixName
          ? `${context.prefixName}_${props.id}`
          : props.id;
        const checked = !!props.formikProps.values[id];
        return (
          <div className='settings-data'>
            {props.type === 'header-card' ? (
              <div style={{ height: 167, maxWidth: 974 }}>
                <HeaderCard />
              </div>
            ) : (
              <SettingsData
                {...props}
                id={id}
                checked={checked}
                onChange={(value: any) =>
                  props.formikProps.setValue(props.id, value)
                }
              />
            )}
          </div>
        );
      }}
    </FeatureSectionContext.Consumer>
  );
};

export default SettingsDataComponent;
