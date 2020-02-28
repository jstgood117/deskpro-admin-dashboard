import { IHolidayList } from './../../SettingsData/HolidayList';
import { API_SettingsUiElement } from '../../../codegen/types';

const data: IHolidayList[] = [
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

export const uiSchema: {
  elements: API_SettingsUiElement & { type: string }[];
} = {
  elements: [
    {
      type: 'feature_section',
      title: 'Business Hours',
      elements: [
        {
          title: 'Default Working Hours',
          type: 'page_section',
          className: 'business-hour',
          elements: [
            {
              type: 'vertical_group',
              className: 'setting-info',
              elements: [
                {
                  type: 'field',
                  className: 'reference-panel',
                  field: {
                    type: 'settingInfo',
                    text:
                      'The default working hours can be applied to SLAs and triggers.'
                  }
                }
              ]
            },
            {
              type: 'vertical_group',
              className: 'time-setting',
              elements: [
                {
                  type: 'horizontal_group',
                  elements: [
                    {
                      type: 'field',
                      title: 'Time',
                      className: 'time',
                      field: {
                        id: 'business_hours_time',
                        type: 'singleSelect',
                        placeholder: '',
                        selectType: 'primary',
                        options: [
                          {
                            label: '09:00 to 17:00',
                            value: '09:00 to 17:00'
                          }
                        ]
                      }
                    },
                    {
                      type: 'field',
                      className: 'timezone',
                      title: 'Timezone',
                      field: {
                        id: 'business_hours_timezone',
                        type: 'singleSelect',
                        placeholder: '',
                        selectType: 'primary',
                        options: [
                          {
                            label: 'UTC',
                            value: 'UTC'
                          },
                          {
                            label: 'CEST',
                            value: 'CEST'
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              type: 'vertical_group',
              className: 'work-days',
              title: 'Work Days',
              elements: [
                {
                  type: 'group',
                  elements: [
                    {
                      type: 'field',
                      field: {
                        type: 'checkbox',
                        id: 'business_hours_monday',
                        value: 'monday'
                      }
                    },
                    {
                      type: 'horizontal_group',
                      elements: [
                        {
                          type: 'label',
                          label: 'Monday',
                          id: 'business_hours_monday'
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'group',
                  elements: [
                    {
                      type: 'field',
                      field: {
                        type: 'checkbox',
                        id: 'business_hours_tuesday',
                        value: 'tuesday'
                      }
                    },
                    {
                      type: 'horizontal_group',
                      elements: [
                        {
                          type: 'label',
                          label: 'Tuesday',
                          id: 'business_hours_tuesday'
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'group',
                  elements: [
                    {
                      type: 'field',
                      field: {
                        type: 'checkbox',
                        id: 'business_hours_wednesday',
                        value: 'wednesday'
                      }
                    },
                    {
                      type: 'horizontal_group',
                      elements: [
                        {
                          type: 'label',
                          label: 'Wednesday',
                          id: 'business_hours_wednesday'
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'group',
                  elements: [
                    {
                      type: 'field',
                      field: {
                        type: 'checkbox',
                        id: 'business_hours_thursday',
                        value: 'thursday'
                      }
                    },
                    {
                      type: 'horizontal_group',
                      elements: [
                        {
                          type: 'label',
                          label: 'Thursday',
                          id: 'business_hours_thursday'
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'group',
                  elements: [
                    {
                      type: 'field',
                      field: {
                        type: 'checkbox',
                        id: 'business_hours_friday',
                        value: 'friday'
                      }
                    },
                    {
                      type: 'horizontal_group',
                      elements: [
                        {
                          type: 'label',
                          label: 'Friday',
                          id: 'business_hours_friday'
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'group',
                  elements: [
                    {
                      type: 'field',
                      field: {
                        type: 'checkbox',
                        id: 'business_hours_saturday',
                        value: 'saturday'
                      }
                    },
                    {
                      type: 'horizontal_group',
                      elements: [
                        {
                          type: 'label',
                          label: 'Saturday',
                          id: 'business_hours_saturday'
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'group',
                  elements: [
                    {
                      type: 'field',
                      field: {
                        type: 'checkbox',
                        id: 'business_hours_sunday',
                        value: 'sunday'
                      }
                    },
                    {
                      type: 'horizontal_group',
                      elements: [
                        {
                          type: 'label',
                          label: 'Sunday',
                          id: 'business_hours_sunday'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Holidays',
          className: 'holidays',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              description:
                'Holidays are days when thr helpdesk is closed & agents are unavailable to repond to users.',
              className: 'button-group',
              elements: [
                {
                  type: 'field',
                  className: 'holiday-btn',
                  field: {
                    type: 'button',
                    icon: 'plus',
                    text: 'Add new holiday'
                  }
                },
                {
                  type: 'field',
                  className: 'calendar-btn',
                  field: {
                    type: 'addCalendarButton',
                    icon: 'calendar',
                    text: 'Add calender',
                    id: 'business_hours_add_calendar_form'
                  }
                }
              ]
            },
            {
              type: 'vertical_group',
              title: '',
              description: 'Set which agents can use the Tasks.',
              className: 'calendar-setting',
              elements: [
                {
                  info: [
                    {
                      type: 'button',
                      title: 'Syncing Calendars',
                      url: 'http://www.test.com',
                      icon: 'guide'
                    }
                  ],
                  type: 'field',
                  className: 'calendars',
                  field: {
                    className: 'sync-calendars',
                    type: 'stringlist',
                    id: 'business_hours_sync_calendars',
                    title: 'Synced calendars'
                  }
                },
                {
                  type: 'field',
                  className: 'holidays',
                  field: {
                    type: 'holidayList',
                    title: 'Synced calendars',
                    id: 'business_hours_sync_calendars_data'
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const jsonSchema: any = {
  business_hours_monday: ['monday'],
  business_hours_tuesday: ['tuesday'],
  business_hours_wednesday: ['wednesday'],
  business_hours_thursday: ['thursday'],
  business_hours_friday: ['friday'],
  business_hours_saturday: [],
  business_hours_sunday: [],
  business_hours_sync_calendars: [
    'https://webhooks.gettimely.com/calendar/feed/37firebnow-alsjd39-bsdnfos-suwheibjosin938475shdbv.ics'
  ],
  business_hours_time: [
    {
      label: '09:00 to 17:00',
      value: '09:00 to 17:00'
    }
  ],
  business_hours_timezone: [
    {
      label: 'CEST',
      value: 'CEST'
    }
  ],
  business_hours_sync_calendars_data: data,
  business_hours_add_calendar_form: 'default value'
};

export const vaildationSchema = {
  type: 'object',
  properties: {}
};

export const validationConfig = {
  errMessages: {
    business_hours_add_calendar_form: {
      required: 'validation.required'
    }
  }
};
