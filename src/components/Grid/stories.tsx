import React from 'react';
import { storiesOf } from '@storybook/react';

import Grid from './Grid';

storiesOf('Grid',module)
	.add('simple', () => (
		<Grid>
			<div>I'm the sidebar</div>
			<div>I'm the main page</div>
		</Grid>
	));
