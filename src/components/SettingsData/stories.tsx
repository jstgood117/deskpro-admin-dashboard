import React from 'react';
import { storiesOf } from '@storybook/react';

import SettingsData from './SettingsData';
import { IHolidayList } from './HolidayList';

const holidayList: IHolidayList[] = [
  {
    year: 2020,
    holidays: [
      { date: '1 January', day: 'Wednesday', comment: 'New Years day' },
      { date: '10 April', day: 'Friday', comment: 'Good Friday' },
      { date: '13 April', day: 'Monday', comment: 'Easter Monday' },
      {
        date: '8 May',
        day: 'Friday',
        comment: 'Early May bank holiday(VE day)'
      },
      { date: '25 May', day: 'Monday', comment: 'Spring bank holiday' }
    ]
  },
  {
    year: 2019,
    holidays: [
      { date: '1 January', day: 'Wednesday', comment: 'New Years day' },
      { date: '10 April', day: 'Friday', comment: 'Good Friday' },
      { date: '13 April', day: 'Monday', comment: 'Easter Monday' },
      {
        date: '8 May',
        day: 'Friday',
        comment: 'Early May bank holiday(VE day)'
      },
      { date: '25 May', day: 'Monday', comment: 'Spring bank holiday' }
    ]
  }
];

storiesOf('Settings Data', module)
  .add('header-card', () => (
    <div style={{ height: 167, maxWidth: 974 }}>
      <SettingsData type='header-card' />
    </div>
  ))
  .add('header-medium-card', () => (
    <div style={{ height: 167, maxWidth: 728 }}>
      <SettingsData type='header-medium-card' />
    </div>
  ))
  .add('setting-info', () => (
    <div style={{ maxWidth: 728 }}>
      <SettingsData
        type='setting-info'
        props={{
          text: 'setting-info'
        }}
      />
    </div>
  ))
  .add('feature-billing', () => (
    <div style={{ height: 80, maxWidth: 722 }}>
      <SettingsData type='feature-billing' />
    </div>
  ))
  .add('reference-code-panel', () => (
    <div style={{ maxWidth: 699 }}>
      <SettingsData type='reference-code-panel' />
    </div>
  ))
  .add('holiday-list', () => (
    <SettingsData
      type='holiday-list'
      props={{
        data: holidayList
      }}
    />
  ));
