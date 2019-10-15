import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { IntlProvider } from 'react-intl';

import SidebarItem from './SidebarItem';

const testData = {
	'itemName': 'test',
	'url': '/dashboard',
}
const testData2 = {
	'itemName': 'test',
	'url': '/iframe.html',
}
const testTranslations = {
  test: "Test",
}


storiesOf('SidebarItem',module)
	.addDecorator(checkA11y)
	.add('normal link', () => (
		<IntlProvider locale='en' messages={testTranslations}>
			<SidebarItem key={0} path='/' {...testData}></SidebarItem>
		</IntlProvider>
	))
	.add('active link', () => (
		<IntlProvider locale='en' messages={testTranslations}>
			<SidebarItem key={0} path='/iframe.html' {...testData2}></SidebarItem>
		</IntlProvider>
	));