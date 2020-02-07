import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import BinaryButton from './BinaryButton';

storiesOf('BinaryButton', module).add('default', () => {
  const [selected, select] = useState(undefined);
  return <BinaryButton select={select} selected={selected}/>;
});
