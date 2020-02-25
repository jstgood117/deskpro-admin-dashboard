import React, { ReactNode } from 'react';
import { mount } from '../../test/enzyme';
import StandardSettingsPage from './StandardSettingsPage';
import SettingsForm from '../../components/SettingsForm';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

import { useQuery } from '@apollo/react-hooks';

jest.mock('@apollo/react-hooks', () => ({
  useQuery: jest.fn(() => ({
    loading: false,
    error: null,
    data: []
  }))
}));

jest.mock('react-dom', () => ({
  createPortal: (node: ReactNode) => node
}));

describe('StandardSettingsPage', () => {

  const wrapper = () => {
    return mount(
      <StandardSettingsPage path={'/'} />
    );
  };

  it('if loading, renders <Loading>', () => {

    (useQuery as jest.Mock).mockImplementation(jest.fn(() => ({
      loading: true,
      error: null,
      data: []
    })));

    const elts = wrapper().find(Loading);
    expect(elts.length).toBeGreaterThan(0);
  });

  it('if error, renders <Error>', () => {

    (useQuery as jest.Mock).mockImplementation(jest.fn(() => ({
      loading: false,
      error: true,
      data: []
    })));

    const elts = wrapper().find(Error);
    expect(elts.length).toBeGreaterThan(0);
  });

  it('if not loading and no error, renders <SettingsForm>', () => {

    (useQuery as jest.Mock).mockImplementation(jest.fn(() => ({
      loading: false,
      error: false,
      data: []
    })));

    const elts = wrapper().find(SettingsForm);
    expect(elts.length).toBeGreaterThan(0);
  });
});