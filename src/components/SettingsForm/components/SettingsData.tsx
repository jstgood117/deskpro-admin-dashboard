import React from 'react';

import SettingsData from '../../SettingsData';

const SettingsDataComponent = (props: any) => {
  return (
    <div className='settings-data'>
      <SettingsData {...props} />
    </div>
  );
};

export default SettingsDataComponent;
