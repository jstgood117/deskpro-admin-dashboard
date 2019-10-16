import React from 'react';
import { storiesOf } from '@storybook/react';

import Dropdown from './Dropdown';

export interface IProps {
  label: string;
  items: Array<Object>;
}

const DropdownItems = [
  { link: 'Link1' },
  { link: 'Link2' },
  { link: 'Link3' },
  { link: 'Link4' }
];

storiesOf('Dropdown', module).add('Default', () => (
  <Dropdown label="Dropdown" items={DropdownItems} />
));
