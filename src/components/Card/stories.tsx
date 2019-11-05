import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './Card';
import DefaultCard from './DefaultCard';
import KanbanViewCard from './KanbanViewCard';

const userDetails1 = {
  userName: 'Jone Doe',
  userNumber: '07200654321',
  userMail: 'jon.doe321@example.com',
  userTexts: [
    { text: 'A', color: '#77b0e8', textBackgroundColor: '#dfedfb' },
    { text: 'B', color: '#EC6C4E', textBackgroundColor: '#F9E6E1' },
    { text: 'C', color: '#F8AF3C', textBackgroundColor: '#FFF8E1' }
  ],
  avatar:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
};
const kanbanDetails1 = {
  userName: 'Anthony Martin',
  userNumber: '07400123451',
  userMail: 'anthony.martin@example.net',
  userTexts: [
    { text: 'A', color: '#77b0e8', textBackgroundColor: '#dfedfb' },
    { text: 'B', color: '#EC6C4E', textBackgroundColor: '#F9E6E1' },
    { text: 'C', color: '#F8AF3C', textBackgroundColor: '#FFF8E1' },
    { text: 'D', color: '#9384BD', textBackgroundColor: '#EBE4F2' },
    { text: 'E', color: '#8B9293', textBackgroundColor: '#F7F7F7' }
  ],
  avatar:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
};
const kanbanDetails2 = {
  userName: 'Anthony Martin',
  userNumber: '(+44)7400 123451',
  userMail: 'anthony.martin@example.net',
  userTexts: [
    { text: 'A', color: '#77b0e8', textBackgroundColor: '#dfedfb' },
    { text: 'B', color: '#EC6C4E', textBackgroundColor: '#F9E6E1' },
    { text: 'C', color: '#F8AF3C', textBackgroundColor: '#FFF8E1' },
    { text: 'D', color: '#9384BD', textBackgroundColor: '#EBE4F2' },
    { text: 'F', color: '#DF5E9C', textBackgroundColor: '#FAE8F0' }
  ],
  avatar:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
};
const kanbanDetails3 = {
  userName: 'Anthony Martin',
  userNumber: '(+44)7400 123451',
  userMail: 'anthony.martin@example.net',
  userTexts: [
    { text: 'A', color: '#77b0e8', textBackgroundColor: '#dfedfb' },
    { text: 'C', color: '#F8AF3C', textBackgroundColor: '#FFF8E1' },
    { text: 'E', color: '#8B9293', textBackgroundColor: '#F7F7F7' },
    { text: 'F', color: '#DF5E9C', textBackgroundColor: '#FAE8F0' },
    { text: 'G', color: '#54B162', textBackgroundColor: '#DAEEED' }
  ],
  avatar:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
};

storiesOf('Card', module)
  .add('card-atom', () => (
    <div style={{ width: 175, height: 230 }}>
      <Card />
    </div>
  ))
  .add('default1 card without dummy data', () => (
    <DefaultCard
      checkbox={false}
      styleType='default1'
      cardDetails={userDetails1}
    />
  ))
  .add('default2 card with dummy data', () => (
    <DefaultCard
      checkbox={true}
      styleType='default2'
      cardDetails={userDetails1}
    />
  ))
  .add('kanban-view 1 with dummy data', () => (
    <KanbanViewCard
      checkbox={false}
      styleType='view1'
      cardDetails={kanbanDetails1}
    />
  ))
  .add('kanban-view 2 with dummy data', () => (
    <KanbanViewCard
      checkbox={false}
      styleType='view2'
      cardDetails={kanbanDetails2}
    />
  ))
  .add('kanban-view 3 with dummy data', () => (
    <KanbanViewCard
      checkbox={true}
      styleType='view3'
      cardDetails={kanbanDetails3}
    />
  ));
