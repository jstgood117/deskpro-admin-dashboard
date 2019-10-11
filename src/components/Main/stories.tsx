import React from 'react';
import { storiesOf } from '@storybook/react';

import Main from './Main';

storiesOf('Main',module)
	.add('with text', () => (
		<Main>Hello Main</Main>
	));
