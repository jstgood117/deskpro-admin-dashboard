import React from 'react';
import { Navigation } from 'desktop-component-library';

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

const AdminNav: React.SFC = () => (
  <Navigation navData={testData}></Navigation>
);

export default AdminNav;
