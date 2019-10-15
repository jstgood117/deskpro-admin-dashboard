import React from 'react';
import { storiesOf } from '@storybook/react';
import { IntlProvider } from 'react-intl';

import { testSidebarData, testTranslations } from '../../resources/constants';
import Sidebar from './Sidebar';

storiesOf('Sidebar',module)
	.add('with dummy data', () => (
		<IntlProvider locale='en' messages={testTranslations}>
			<Sidebar path='/' data={testSidebarData}></Sidebar>
		</IntlProvider>
	));