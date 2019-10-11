import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import SidebarSubSection from './SidebarSubSection';

const testData = {
	'navItemName': 'Dashboard',
	'url': '/dashboard',
}
const testData2 = {
	'navItemName': 'ActivePage',
	'url': '/iframe.html',
}

storiesOf('SidebarSubSection',module)
	.addDecorator(checkA11y)
	.add('with local mocked data', () => (
		<SidebarSubSection key={0} {...testData}></SidebarSubSection>
	))
	.add('active', () => (
		<SidebarSubSection key={0} {...testData2}></SidebarSubSection>
	));