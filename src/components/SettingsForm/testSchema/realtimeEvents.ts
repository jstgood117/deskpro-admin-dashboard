import { API_SettingsUiElement } from '../../../codegen/types';

export const uiSchema: {
  elements: API_SettingsUiElement & { type: string }[];
} = {
  elements: [
    {
      type: 'feature_section',
      brandButtonGroup: false,
      field: {
        type: 'singleSelect',
        selectType: 'large',
        options: [
          {
            label: 'RealTime Events',
            value: 'RealTime Events'
          }
        ]
      },
      elements: [
        {
          title: 'Method',
          type: 'page_section',
          className: 'method',
          elements: [
            {
              type: 'vertical_group',
              className: 'method',
              description:
                'Many actions performed in the helpdesk cause events to propagate to all online users. For example, if you change the urgency on a ticket, your colleagues will see the urgency change on their screens too. This happens without them needing to refresh the page. This "realtime" functionality is a core feature of Deskpro. [How do I imporve realtime performance](https://test.url)',
              elements: [
                {
                  type: 'field',
                  className: 'method-name deskpro',
                  field: {
                    type: 'radio',
                    id: 'realtime_events_method_name',
                    label: 'Deskpro Notification Service',
                    value: 'deskpro'
                  },
                  info: [
                    {
                      type: 'button',
                      title: 'Deskpro Notification Service',
                      url: 'http://www.test.com',
                      icon: 'external-link',
                      className: 'deskpro'
                    }
                  ]
                },
                {
                  type: 'group',
                  className: 'group-deskpro',
                  dependenceOn: {
                    field: 'realtime_events_method_name',
                    value: 'deskpro'
                  },
                  elements: [
                    {
                      type: 'field',
                      title: 'Secret',
                      field: {
                        type: 'input',
                        id: 'realtime_events_method_deskpro_secret'
                      }
                    },
                    {
                      type: 'field',
                      title: 'Host',
                      field: {
                        type: 'input',
                        id: 'realtime_events_method_deskpro_host'
                      }
                    },
                    {
                      type: 'field',
                      title: 'Port',
                      field: {
                        type: 'input',
                        id: 'realtime_events_method_deskpro_port',
                        placeholder: '0'
                      }
                    },
                    {
                      type: 'group',
                      className: 'deskpro-secure',
                      elements: [
                        {
                          type: 'field',
                          field: {
                            type: 'checkbox',
                            id: 'realtime_events_method_deskpro_secure',
                            value: 'yes'
                          }
                        },
                        {
                          type: 'horizontal_group',
                          elements: [
                            {
                              type: 'label',
                              label: 'Secure'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: 'button',
                      styleType: 'secondary',
                      size: 'small',
                      className: 'test-pusher-settings',
                      icon: 'menu',
                      text: 'Test Pusher Settings'
                    }
                  ]
                },
                {
                  type: 'field',
                  className: 'method-name polling',
                  field: {
                    type: 'radio',
                    id: 'realtime_events_method_name',
                    label: 'Polling',
                    value: 'polling'
                  }
                },
                {
                  type: 'field',
                  className: 'method-name pusher',
                  field: {
                    type: 'radio',
                    id: 'realtime_events_method_name',
                    label: 'Pusher',
                    value: 'pusher'
                  },
                  info: [
                    {
                      type: 'button',
                      title: 'Pusher',
                      url: 'http://www.test.com',
                      icon: 'external-link',
                      className: 'pusher'
                    }
                  ]
                },
                {
                  type: 'group',
                  className: 'group-pusher',
                  dependenceOn: {
                    field: 'realtime_events_method_name',
                    value: 'pusher'
                  },
                  elements: [
                    {
                      type: 'field',
                      title: 'Pusher app ID',
                      field: {
                        type: 'input',
                        id: 'realtime_events_method_pusher_id'
                      }
                    },
                    {
                      type: 'field',
                      title: 'Pusher app key',
                      field: {
                        type: 'input',
                        id: 'realtime_events_method_pusher_app_key'
                      }
                    },
                    {
                      type: 'field',
                      title: 'Pusher app secret',
                      field: {
                        type: 'input',
                        id: 'realtime_events_method_pusher_secret_key'
                      }
                    },
                    {
                      type: 'field',
                      title: 'Pusher cluster',
                      className: 'pusher-cluster',
                      field: {
                        id: 'realtime_events_method_pusher_cluster',
                        type: 'singleSelect',
                        selectType: 'primary',
                        options: [
                          {
                            label: 'mt1 (us-west-1)',
                            value: 'mt1 (us-west-1)'
                          },
                          {
                            label: 'mt2 (us-west-1)',
                            value: 'mt2 (us-west-1)'
                          },
                          {
                            label: 'mt3 (us-west-1)',
                            value: 'mt3 (us-west-1)'
                          }
                        ]
                      }
                    },
                    {
                      type: 'button',
                      styleType: 'secondary',
                      size: 'small',
                      className: 'test-pusher-settings',
                      icon: 'menu',
                      text: 'Test Pusher Settings'
                    }
                  ]
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
  realtime_events_method_name: 'polling',
  realtime_events_method_deskpro_secret: '',
  realtime_events_method_deskpro_host: '',
  realtime_events_method_deskpro_port: '',
  realtime_events_method_deskpro_secure: ['yes'],
  realtime_events_method_pusher_id: '',
  realtime_events_method_pusher_app_key: '',
  realtime_events_method_pusher_secret_key: '',
  realtime_events_method_pusher_cluster: {
    label: 'mt1 (us-west-1)',
    value: 'mt1 (us-west-1)'
  }
};
