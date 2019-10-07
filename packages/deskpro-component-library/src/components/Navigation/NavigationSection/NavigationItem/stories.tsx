import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import NavigationItem from './NavigationItem';

const testData = {
	'navItemName': 'Dashboard',
	'url': '/dashboard',
}

storiesOf('NavigationItem',module)
	.addDecorator(checkA11y)
	.add('with local mocked data', () => (
		<NavigationItem key={0} navData={testData}></NavigationItem>
));