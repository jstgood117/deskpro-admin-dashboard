
import React from 'react';
import { AppWrap } from '../AppWrap';
import { mount, shallow } from '../test/enzyme';
import { WrapperType } from '../test/types';

import { generateConfig } from '../config';

jest.mock('../config', () => ({
  generateConfig: jest.fn(() => ({
    apiUrl: '/graphql'
  }))
}));

describe('App', () => {
  const wrapper = (bShallow: boolean): WrapperType => {
    return bShallow
      ? shallow(<AppWrap />)
      : mount(<AppWrap />);
  };

   test('Renders without crashing', () => {

    const elts = wrapper(true);
    expect(elts.find('#app-wrap').length).toEqual(1);
  });
});