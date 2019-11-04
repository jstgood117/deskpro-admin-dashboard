import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Toggle from './Toggle';

const ToggleComponent: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Toggle
      checked={checked}
      value='checked'
      onChange={event => setChecked(event.target.checked)}
    />
  );
};

storiesOf('Toggle', module).add('toggle', () => <ToggleComponent />);