import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import { SettingsData as SettingsDataHelper } from './Helpers';

describe('SettingsDataHelper', () => {
  let props: any;
  let mountedSettingsDataHelper: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedSettingsDataHelper) {
      mountedSettingsDataHelper = bShallow
        ? shallow(<SettingsDataHelper {...props} />)
        : mount(<SettingsDataHelper {...props} />);
    }
    return mountedSettingsDataHelper;
  };

  beforeEach(() => {
    props = {
      title: 'title',
      description: 'desc'
    };
    mountedSettingsDataHelper = undefined;
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
