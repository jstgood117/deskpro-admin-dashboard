import React, { ReactNode } from 'react';
import { mount, shallow } from '../../test/enzyme';

import SettingsData, { IProps } from './SettingsData';
import { IProps as ICalendarProps } from './AddCalendarForm';
import AddCalendarForm from './AddCalendarForm';

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

describe('SettingsData-HolidayList', () => {
  let props: IProps;
  let mountedCode: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedCode) {
      mountedCode = bShallow
        ? shallow(<SettingsData {...props} />)
        : mount(<SettingsData {...props} />);
    }
    return mountedCode;
  };

  beforeEach(() => {
    props = {
      type: 'holiday-list',
      props: {
        data: [
          {
            year: 2020,
            holidays: [
              { date: '1 January', day: 'Wednesday', comment: 'New Years day' }
            ]
          }
        ]
      }
    };
  });
  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});

jest.mock('react-dom', () => ({
  createPortal: (node: ReactNode) => node
}));

describe('SettingsData-AddCalendarForm', () => {
  let props: ICalendarProps;
  let mountedCode: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedCode) {
      mountedCode = bShallow
        ? shallow(<AddCalendarForm {...props} />)
        : mount(<AddCalendarForm {...props} />);
    }
    return mountedCode;
  };

  beforeEach(() => {
    props = {
      icon: 'calendar',
      text: 'Add Calendar'
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
