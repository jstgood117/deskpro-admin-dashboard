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
	.add('normal link', () => (
		<SidebarItem key={0} {...testData}></SidebarItem>
	))
	.add('active link', () => (
		<SidebarItem key={0} {...testData2}></SidebarItem>
	));