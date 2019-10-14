import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import Icon from './Icon';

storiesOf('Icon',module)
	.addDecorator(checkA11y)
	.add('Setup', () => (
		<Icon name='Setup' />
	))
	.add('Channels', () => (
		<Icon name='Channels' />
	))
	.add('Agents', () => (
		<Icon name='Agents' />
	))
	.add('Help', () => (
		<Icon name='Help' />
	));
