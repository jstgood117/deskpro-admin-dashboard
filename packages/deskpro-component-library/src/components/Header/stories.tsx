import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './Header';

storiesOf('Header',module)
	.add('with text', () => (
		<Header>
			<h1>Header</h1>
			<p>with text</p>
		</Header>
	));
