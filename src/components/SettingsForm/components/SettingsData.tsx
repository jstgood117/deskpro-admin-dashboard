import React from 'react';

import { HeaderCard } from '../../SettingsData/Helpers';

const SettingsDataComponent = (props: any) => {
  return (
    <div className='settings-data'>
      {props.type === 'header-card' && (
        <div style={{ height: 167, maxWidth: 974 }}>
          <HeaderCard />
        </div>
      )}
    </div>
  );
};

export default SettingsDataComponent;
