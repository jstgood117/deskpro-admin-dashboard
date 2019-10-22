import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './Card';
import UserDefaultCard from './UserDefaultCard';

const userDetails = {
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

storiesOf('Card', module)
  .add('card-atom', () => (
    <div style={{ width: 175, height: 230 }}>
      <Card />
    </div>
  ))
  .add('default1 card without dummy data', () => (
    <UserDefaultCard
      checkbox={false}
      styleType="default1"
      userDetails={userDetails}
    />
  ))
  .add('default2 card with dummy data', () => (
    <UserDefaultCard
      checkbox={true}
      styleType="default2"
      userDetails={userDetails}
    />
  ));
