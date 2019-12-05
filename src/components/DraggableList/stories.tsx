import React from 'react';
import { storiesOf } from '@storybook/react';
import { IntlProvider } from 'react-intl';

import DraggableList from './DraggableList';
import { testTranslations } from '../../resources/constants/constants';

storiesOf('DraggableList', module).add('default', () => (
  <IntlProvider locale='en' messages={testTranslations}>
    <DraggableList />
  </IntlProvider>
));
