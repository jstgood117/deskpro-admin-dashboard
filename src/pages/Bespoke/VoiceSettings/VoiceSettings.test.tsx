import React from 'react';
import { mount } from '../../../test/enzyme';
import VoiceSettingsPage from './VoiceSettings';

describe('VoiceSettingsPage', () => {

  const wrapper = () =>
    mount(
      <VoiceSettingsPage path='/voice/settings' />
    );

  it('should render settings form', () => {
    const root = wrapper();
    expect(root.find('h1').length).toEqual(1);
    expect(root.find('h1').text()).toEqual('Voice General Settings');
  });

  it('should generate feature-billing', () => {
    const root = wrapper();
    expect(root.find('div.feature-billing').length).toBeGreaterThan(0);
  });
});
