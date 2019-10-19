import React from 'react';
import { storiesOf } from '@storybook/react';

import Dropdown from './Dropdown';
import { action } from '@storybook/addon-actions';

export interface IProps {
  label: string;
  items: Array<Object>;
}

const DropdownItems = [
  { id: 0, link: 'Link1' },
  { id: 1, link: 'Link2' },
  { id: 2, link: 'Link3' },
  { id: 3, link: 'Link4' }
];

storiesOf('Dropdown', module).add('Default', () => (
  <Dropdown
    label="Dropdown"
    items={DropdownItems}
    onChangeOption={action('clicked onChangeOption')}
  />
));
