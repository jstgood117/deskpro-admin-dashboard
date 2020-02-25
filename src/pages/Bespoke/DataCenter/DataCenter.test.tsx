import React from 'react';
import { mount } from '../../../test/enzyme';
import DataCenterPage from './index';

describe('DataCenterPage', () => {

  const wrapper = () =>
    mount(
      <DataCenterPage path='/data-center' />
    );

  it('should render settings form', () => {
    const root = wrapper();
    expect(root.find('h1').length).toEqual(1);
    expect(root.find('h1').text()).toEqual('Data Center');
  });

  it('should generate selectbox', () => {
    const root = wrapper();
    expect(root.find('div.select__control').length).toBeGreaterThan(0);
  });
});
