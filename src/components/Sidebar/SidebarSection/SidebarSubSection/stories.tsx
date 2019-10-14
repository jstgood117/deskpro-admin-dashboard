import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import SidebarSubSection from './SidebarSubSection';

const testData = {
	navItemName: 'item1',
	url: '/item1',
	navItems: [
		{
			navItemName: 'sub-item1',
			url: '/subitem1',		
		},
		{
			navItemName: 'sub-item2',
			url: '/subitem2',		
		},
	],
}

storiesOf('SidebarSubSection',module)
	.add('with dummy data', () => (
		<div><SidebarSubSection key={0} path='/' {...testData} /></div>
	));