import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { IntlProvider } from 'react-intl';

import DraggableList from './DraggableList';
import { testTranslations } from '../../resources/constants/constants';

storiesOf('DraggableList', module).add('default', () => {
  const initialState: string[] = [
    'admin.settings.draggable.from',
    'admin.settings.draggable.replyTo',
    'admin.settings.draggable.xOriginalFrom'
  ];
  const [SortList, SetList] = useState(initialState);
  return (
    <IntlProvider locale='en' messages={testTranslations}>
      <DraggableList
        items={SortList}
        SetList={(values: any) => {
          SetList(values);
        }}
      />
    </IntlProvider>
  );
});
