import React from 'react';

import Profiles from './index';

import { mount, shallow } from '../../test/enzyme';
import { WrapperType } from '../../test/types';

describe('Profiles', () => {
  const wrapper = (bShallow: boolean, props: any): WrapperType => {
    if (bShallow) {
      return shallow(<Profiles {...props} />);
    }

    return mount(<Profiles {...props} />);
  };

  it('should generate edit button once both `editable` and `onEditClick` passed', () => {
    const onEditClick = jest.fn();
    const root = wrapper(false, {
      editable: true,
      onEditClick,
      profiles: [],
      title: 'test'
    });
    expect(root.find('button').length).toEqual(1);

    root.find('button').simulate('click');
    expect(onEditClick).toBeCalledTimes(1);
  });

  it('should generate no edit button', () => {
    const root = wrapper(false, {
      profiles: [],
      title: 'test'
    });
    expect(root.find('button').length).toEqual(0);
  });

  it('should generate not more than 6 avatars', () => {
    const root = wrapper(false, {
      profiles: Array.from(Array(20), () => ({
        name: 'test',
        avatarUrn: 'test'
      }))
    });
    expect(root.find('img').length).toEqual(6);
  });
});
