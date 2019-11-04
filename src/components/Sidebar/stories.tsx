import React from 'react';
import { storiesOf } from '@storybook/react';
import { IntlProvider } from 'react-intl';

import { testSidebarData, testTranslations } from '../../resources/constants';
import Sidebar from './Sidebar';
import { MemoryRouter } from 'react-router-dom';

storiesOf('Page',module)
	.add('Demo Sidebar', () => (
		<IntlProvider locale='en' messages={testTranslations}>
			<div style={{'width': '215px', 'height': '75vh', 'position': 'relative'}}>
				<MemoryRouter>
					<Sidebar data={testSidebarData}/>
				</MemoryRouter>
			</div>
		</IntlProvider>
	));