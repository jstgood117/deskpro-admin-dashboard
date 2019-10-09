import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './Header';

storiesOf('Header',module)
	.add('with text', () => (
		<Header>Hello Header</Header>
	));
