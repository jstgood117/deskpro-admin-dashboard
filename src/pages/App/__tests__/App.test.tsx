import React from 'react';
import { shallow } from '../../../test/enzyme';
import { WrapperType } from '../../../test/types';

import App from '../App';

import { useQuery } from '@apollo/react-hooks';

jest.mock('@apollo/react-hooks', () => ({
  useQuery: jest.fn(() => ({
    loading: false,
    error: null,
    data: []
  }))
}));

describe('App', () => {

  const wrapper = (): WrapperType => {
    return shallow(<App />);
  };

  test('Renders without crashing', () => {

    const appWrappper = wrapper().find('#app-container');
    expect(appWrappper.length).toBeGreaterThan(0);

  });

  test('Shows loading when query is loading', () => {

    (useQuery as jest.Mock).mockImplementation(jest.fn(() => ({
      loading: true,
      error: null,
      data: []
    })));

    const appWrappper = wrapper().find('#app-loading');
    expect(appWrappper.length).toBeGreaterThan(0);

  });

  test('Shows error when query has errors', () => {

    (useQuery as jest.Mock).mockImplementation(jest.fn(() => ({
      loading: false,
      error: true,
      data: []
    })));

    const appWrappper = wrapper().find('#app-error');
    expect(appWrappper.length).toBeGreaterThan(0);

  });
});