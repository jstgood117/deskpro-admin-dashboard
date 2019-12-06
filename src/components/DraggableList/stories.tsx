import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import DraggableList from './DraggableList';

storiesOf('DraggableList', module).add('default', () => {
  const initialState: string[] = [
    'admin.settings.draggable.from',
    'admin.settings.draggable.replyTo',
    'admin.settings.draggable.xOriginalFrom'
  ];
  const [SortList, SetList] = useState(initialState);
  return (
      <DraggableList
        items={SortList}
        SetList={(values: any) => {
          SetList(values);
        }}
      />
  );
});
