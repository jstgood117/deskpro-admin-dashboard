import React from 'react';
import { mount, shallow } from '../../../test/enzyme';

import KanbanViewCard, { IProps } from './KanbanViewCard';

const cardDetails = {
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

describe('Card', () => {
  let props: IProps;
  let mountedKanbanViewCard: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedKanbanViewCard) {
      mountedKanbanViewCard = bShallow
        ? shallow(<KanbanViewCard {...props} />)
        : mount(<KanbanViewCard {...props} />);
    }
    return mountedKanbanViewCard;
  };

  beforeEach(() => {
    props = {
      checkbox: true,
      cardDetails,
      styleType: 'view1'
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
