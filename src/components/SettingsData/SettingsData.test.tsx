import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import SettingsData from './SettingsData';

describe('SettingsData', () => {
  let props: any;
  let mountedSettingsData: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedSettingsData) {
      mountedSettingsData = bShallow
        ? shallow(<SettingsData {...props} />)
        : mount(<SettingsData {...props} />);
    }
    return mountedSettingsData;
  };

  beforeEach(() => {
    props = {
      type: 'header-card'
    };
    mountedSettingsData = undefined;
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
