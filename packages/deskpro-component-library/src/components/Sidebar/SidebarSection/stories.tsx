import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import SidebarSection from './SidebarSection';

const testData = {
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
}

storiesOf('SidebarSection',module)
	.addDecorator(checkA11y)
	.add('with local mocked data', () => (
		<SidebarSection key={0} navData={testData}></SidebarSection>
	));