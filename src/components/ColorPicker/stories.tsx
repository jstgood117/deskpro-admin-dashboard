import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import ColorPicker from './ColorPicker';

const ColorPickerComponent: React.FC = () => {
  const [color, setColor] = useState('#C4C4C4');

  return <ColorPicker value={color} onChange={setColor} />;
};

storiesOf('ColorPicker', module).add('default', () => <ColorPickerComponent />);
