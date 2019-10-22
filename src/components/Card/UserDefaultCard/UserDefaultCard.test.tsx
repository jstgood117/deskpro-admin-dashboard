import React from 'react';
import { mount, shallow } from '../../../test/enzyme';

import UserDefaultCard, { IProps } from './UserDefaultCard';

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
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  avatarWidth: 70,
  avatarHeight: 70
};

describe('Card', () => {
  let props: IProps;
  let mountedUserDefaultCard: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedUserDefaultCard) {
      mountedUserDefaultCard = bShallow
        ? shallow(<UserDefaultCard {...props} />)
        : mount(<UserDefaultCard {...props} />);
    }
    return mountedUserDefaultCard;
  };

  beforeEach(() => {
    props = {
      checkbox: true,
      userDetails: userDetails
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
