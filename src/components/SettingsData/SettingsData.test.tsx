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

  describe('SettingsData: header-card', () => {
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

  describe('SettingsData: header-medium-card', () => {
    beforeEach(() => {
      props = {
        type: 'header-medium-card'
      };
      mountedSettingsData = undefined;
    });
    it('always renders a <div>', () => {
      const elts = wrapper(false).find('div');
      expect(elts.length).toBeGreaterThan(0);
    });
  });

  describe('SettingsData: setting-info', () => {
    beforeEach(() => {
      props = {
        type: 'setting-info'
      };
      mountedSettingsData = undefined;
    });
    it('always renders a <div>', () => {
      const elts = wrapper(false).find('div');
      expect(elts.length).toBeGreaterThan(0);
    });
  });

  describe('SettingsData: setting-info-inUse', () => {
    beforeEach(() => {
      props = {
        type: 'setting-info-inUse'
      };
      mountedSettingsData = undefined;
    });
    it('always renders a <div>', () => {
      const elts = wrapper(false).find('div');
      expect(elts.length).toBeGreaterThan(0);
    });
  });

  describe('SettingsData: feature-billing', () => {
    beforeEach(() => {
      props = {
        type: 'feature-billing'
      };
      mountedSettingsData = undefined;
    });
    it('always renders a <div>', () => {
      const elts = wrapper(false).find('div');
      expect(elts.length).toBeGreaterThan(0);
    });
  });

  describe('SettingsData: reference-code-panel', () => {
    beforeEach(() => {
      props = {
        type: 'reference-code-panel'
      };
      mountedSettingsData = undefined;
    });
    it('always renders a <div>', () => {
      const elts = wrapper(false).find('div');
      expect(elts.length).toBeGreaterThan(0);
    });
  });
});
