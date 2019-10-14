import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import SidebarSection from './SidebarSection';

const testData = {
	'sectionName': 'Setup',
	'navItems': [
		{
			'itemName': 'Item1',
			'url': '/item1',
		},			
		{
			'itemName': 'Item2',
			'url': '/item2',
		},			
		{
			'itemName': 'SubMenu',
			'navItems': [
				{
					'itemName': 'SubItem1',
					'url': '/subitem1',
				},			
				{
					'itemName': 'SubItem2',
					'url': '/subitem2',
				},			
				{
					'itemName': 'SubItem3',
					'url': '/subitem3',
				},			
				{
					'itemName': 'SubItem4',
					'url': '/subitem4',
				},			
			]
		},			
		{
			'itemName': 'Item3',
			'url': '/item3',
		},			
	]
}

storiesOf('SidebarSection',module)
	.addDecorator(checkA11y)
	.add('with dummy data', () => (
		<SidebarSection key={0} path='/' {...testData}></SidebarSection>
	));