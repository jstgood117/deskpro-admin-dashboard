import React from 'react';
import { storiesOf } from '@storybook/react';
import AgentSelector from './AgentSelector';
import { action } from '@storybook/addon-actions';

const avatarUrn =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80';
const names = ['Bruce Wayne', 'Clark Kent', 'Arthur Curry'];

const AGENTS_COUNT = 10;

const agents = Array.from(Array(AGENTS_COUNT), (never, index) => ({
  id: `agent${index}`,
  avatar: !(index % 2) ? avatarUrn : '',
  name: names[index % 3]
}));

const AgentSelectorComponent: React.FC<any> = props => {
  const [selected, setSelected] = React.useState({ agent1: true });
  return (
    <div style={{ maxHeight: 800, display: 'flex' }}>
      <AgentSelector
        selected={selected}
        onSelect={setSelected}
        onSave={action('onSave')}
        onCancel={action('onCancel')}
        {...props}
      />
    </div>
  );
};

storiesOf('AgentSelector', module).add('default', () => (
  <AgentSelectorComponent
    agents={agents}
    restricted={{ agent2: true }}
    description='Select agents to enable keyboard shortcut. Incomplete info.'
    title='Agent selector'
  />
));
