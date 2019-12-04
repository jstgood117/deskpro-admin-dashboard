import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Toggle from './Toggle';
import { ISizeTypes } from '../../resources/interfaces';

const ToggleComponent: React.FC<{ size: ISizeTypes }> = props => {
  const [checked, setChecked] = useState(false);

  return (
    <Toggle
      checked={checked}
      value='checked'
      onChange={event => setChecked(event.target.checked)}
      size={props.size}
    />
  );
};

storiesOf('Toggle', module)
  .add('toggle-small', () => <ToggleComponent size='small' />)
  .add('toggle-medium', () => <ToggleComponent size='medium' />);
