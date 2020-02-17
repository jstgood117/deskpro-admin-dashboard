import React, { ReactNode } from 'react';
import { mount, shallow } from '../../test/enzyme';

import SettingsData, { IProps } from './SettingsData';
import { IProps as ICalendarProps } from './AddCalendarForm';
import AddCalendarForm from './AddCalendarForm';

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
      type: 'holiday-list'
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
