import React from 'react';
import { storiesOf } from '@storybook/react';
import AgentSelector from './AgentSelector';
import { action } from '@storybook/addon-actions';

const avatarUrn =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80';
const names = ['Bruce Wayne', 'Clark Kent', 'Arthur Curry'];

const agents = Array.from(Array(10), (never, index) => ({
  id: `agent${index}`,
  avatar: !(index % 2) ? avatarUrn : '',
  name: names[index % 3]
}));

storiesOf('AgentSelector', module).add('default', () => (
  <AgentSelector
    agents={agents}
    description='Select agents to enable keyboard shortcut. Incomplete info.'
    onSelect={action('select')}
    selected={{ agent1: true }}
    title='Agent selector'
  />
));
