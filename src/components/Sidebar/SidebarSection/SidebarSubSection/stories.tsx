import React from 'react';
import { storiesOf } from '@storybook/react';
import { IntlProvider } from 'react-intl';

import SidebarSubSection from './SidebarSubSection';

const testData = {
	itemName: 'item1',
	url: '/item1',
	navItems: [
		{
			itemName: 'sub-item1',
			url: '/subitem1',		
		},
		{
			itemName: 'sub-item2',
			url: '/subitem2',		
		},
	],
}
const testTranslations = {
  test: "Test",
}

storiesOf('SidebarSubSection',module)
	.add('with dummy data', () => (
		<IntlProvider locale='en' messages={testTranslations}>
			<div><SidebarSubSection key={0} path='/' {...testData} /></div>
		</IntlProvider>
	));