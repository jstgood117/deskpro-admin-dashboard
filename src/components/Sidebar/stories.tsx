import React from 'react';
import { storiesOf } from '@storybook/react';
//import { checkA11y } from '@storybook/addon-a11y';

import { testSidebarData } from '../../resources/constants';
import Sidebar from './Sidebar';

storiesOf('Sidebar',module)
	.add('with dummy data', () => (
		<Sidebar path='/' data={testSidebarData}></Sidebar>
	));