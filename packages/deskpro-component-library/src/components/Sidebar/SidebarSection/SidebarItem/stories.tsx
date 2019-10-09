import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import SidebarItem from './SidebarItem';

const testData = {
	'navItemName': 'Dashboard',
	'url': '/dashboard',
}
const testData2 = {
	'navItemName': 'ActivePage',
	'url': '/iframe.html',
}

storiesOf('SidebarItem',module)
	.addDecorator(checkA11y)
	.add('with local mocked data', () => (
		<SidebarItem key={0} navData={testData}></SidebarItem>
	))
	.add('active', () => (
		<SidebarItem key={0} navData={testData2}></SidebarItem>
	));