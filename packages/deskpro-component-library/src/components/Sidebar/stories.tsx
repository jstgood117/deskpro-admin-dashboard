import React from 'react';
import { storiesOf } from '@storybook/react';
//import { checkA11y } from '@storybook/addon-a11y';
//import { setupGraphiQL } from '@storybook/addon-graphql';

import Sidebar from './Sidebar';

//const graphiql = setupGraphiQL({ url: 'http://localhost:3000/graphql' });
const testData = [
	{
		'sectionName': 'Setup',
		'navItems': [
			{
				'navItemName': 'Dashboard',
				'url': '/dashboard',
			},			
			{
				'navItemName': 'Setup wizard',
				'url': '/setup-wizard',
			},			
			{
				'navItemName': 'Brands',
				'url': '/brands',
			},			
		]
	},
	{
		'sectionName': 'Channels',
		'navItems': [
			{
				'navItemName': 'Email',
				'url': '/email',
			},			
			{
				'navItemName': 'Forms',
				'url': '/forms',
			},			
			{
				'navItemName': 'Messenger',
				'url': '/messenger',
				'navItems': [
					{
						'navItemName': 'Setup',
						'url': '/messenger-setup',
					},			
					{
						'navItemName': 'Departments',
						'url': '/messenger-departments',
					},			
					{
						'navItemName': 'Queues',
						'url': '/messenger-queues',
					},			
				],
			},			
			{
				'navItemName': 'Social',
				'url': '/social',
			},			
			{
				'navItemName': 'Voice',
				'url': '/voice',
			},			
		]
	},
]

storiesOf('Sidebar',module)
	.add('with dummy data', () => (
		<Sidebar navData={testData}></Sidebar>
	));