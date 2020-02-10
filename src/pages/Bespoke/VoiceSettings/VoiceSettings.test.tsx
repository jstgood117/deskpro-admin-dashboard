import React from 'react';
import { mount, shallow } from 'enzyme';
import VoiceSettingsPage from './index';

describe('VoiceSettingsPage', () => {
  let mountedPage: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedPage) {
      mountedPage = bShallow
        ? shallow(<VoiceSettingsPage path='/voice/settings' />)
        : mount(<VoiceSettingsPage path='/voice/settings' />);
    }
    return mountedPage;
  };

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
