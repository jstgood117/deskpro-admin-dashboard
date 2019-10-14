import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import SidebarSection from './SidebarSection';

const testData = {
	'sectionName': 'Setup',
	'navItems': [
		{
			'navItemName': 'Item1',
			'url': '/item1',
		},			
		{
			'navItemName': 'Item2',
			'url': '/item2',
		},			
		{
			'navItemName': 'SubMenu',
			'navItems': [
				{
					'navItemName': 'SubItem1',
					'url': '/subitem1',
				},			
				{
					'navItemName': 'SubItem2',
					'url': '/subitem2',
				},			
				{
					'navItemName': 'SubItem3',
					'url': '/subitem3',
				},			
				{
					'navItemName': 'SubItem4',
					'url': '/subitem4',
				},			
			]
		},			
		{
			'navItemName': 'Item3',
			'url': '/item3',
		},			
	]
}

storiesOf('SidebarSection',module)
	.addDecorator(checkA11y)
	.add('with dummy data', () => (
		<SidebarSection key={0} {...testData}></SidebarSection>
	));