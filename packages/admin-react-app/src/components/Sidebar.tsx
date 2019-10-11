import React, { SFC } from 'react';
import { Sidebar } from 'deskpro-component-library';

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
	{
		'sectionName': 'Agents',
		'navItems': [
			{
				'navItemName': 'Agent',
				'url': '/agent',
			},			
		]
	},
]

const SidebarWrapper: SFC = () => (
  <Sidebar navData={testData} />
);

export default SidebarWrapper;
