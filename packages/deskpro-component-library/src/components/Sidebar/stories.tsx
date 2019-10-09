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
			},			
		]
	},
]

storiesOf('Sidebar',module)
/*	.add('get nav items data', graphiql(`{
			user(id: "1") {
				name
			}
		}`)) */
	.add('with local mocked data', () => (
		<Sidebar navData={testData}></Sidebar>
	));