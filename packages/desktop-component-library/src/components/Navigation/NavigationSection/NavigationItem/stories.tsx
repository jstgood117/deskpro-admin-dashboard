import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import NavigationItem from './NavigationItem';

const testData = {
	'navItemName': 'Dashboard',
	'url': '/dashboard',
}
const testData2 = {
	'navItemName': 'ActivePage',
	'url': '/iframe.html',
}

storiesOf('NavigationItem',module)
	.addDecorator(checkA11y)
	.add('with local mocked data', () => (
		<NavigationItem key={0} navData={testData}></NavigationItem>
	))
	.add('active', () => (
		<NavigationItem key={0} navData={testData2}></NavigationItem>
	));