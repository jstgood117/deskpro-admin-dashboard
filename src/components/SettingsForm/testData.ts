import brand1 from '../../assets/brands/brand1.png';
import brand2 from '../../assets/brands/brand2.png';
import { API_SettingsUiElement } from '../../codegen/types';

export const uiSchema: {
  elements: API_SettingsUiElement & { type: string }[];
} = {
  elements: [
    {
      title: 'Agent Settings',
      type: 'feature_section',
      icon: 'down',
      elements: [
        {
          title: 'Agent Security Settings',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              title: 'Idle Timeout',
              tooltip:
                'Enable this to log out agents who are idle. Otherwise, sessions will be kept alive if Deskpro is open in a browser window, even if the agent is not doing anything.',
              showOn: 'agent_settings_security_enabled',
              description:
                'Enable this to log out agents who are idle. Otherwise, sessions will be kept alive if Deskpro is open in a browser window, even if the agent is not doing anything.',
              field: {
                type: 'toggle',
                id: 'agent_settings_security_enabled'
              },
              info: [
                {
                  type: 'button',
                  title: 'Idle timeout',
                  url: 'http://www.test.com',
                  icon: 'menu'
                },
                {
                  type: 'button',
                  title: 'Stay logged in when browser closed',
                  url: 'http://www.test.com',
                  icon: 'view'
                }
              ],
              elements: [
                {
                  type: 'field',
                  title: 'Agent Timeout',
                  tooltip: 'Agent Timeout',
                  field: {
                    type: 'input',
                    id: 'agent_settings_security_idle_timeout'
                  },
                  info: [
                    {
                      type: 'button',
                      title: 'Idle timeout',
                      url: 'http://www.test.com',
                      icon: 'menu'
                    },
                    {
                      type: 'button',
                      title: 'Stay logged in when browser closed',
                      url: 'http://www.test.com',
                      icon: 'view'
                    }
                  ]
                },
                {
                  type: 'field',
                  title: 'Send idle agent who have been timed out to ',
                  tooltip: 'Send idle agent who have been timed out to ',
                  field: {
                    type: 'input',
                    id: 'agent_settings_security_idle_timeout_action'
                  }
                },
                {
                  type: 'field',
                  title: 'Agent IP Whitelisting',
                  tooltip: 'Agent IP Whitelisting',
                  description:
                    'When enabled, agents can only log in from IP addresses that have been marked as trusted. Specify the IP addresses manually or allow agent to authenticate IP address using email. ',
                  field: {
                    type: 'input',
                    id: 'agent_settings_security_whitelist'
                  },
                  info: [
                    {
                      type: 'button',
                      title: 'IP Whitelisting',
                      url: 'http://www.test.com',
                      icon: 'chat'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'page_section',
          title: 'Admin Security Settings',
          elements: [
            {
              type: 'vertical_group',
              title: 'Admin authentication',
              tooltip: 'Admin authentication',
              description:
                'Administrators will be required to authenticate themselves when accessing the admin area of Deskpro.',
              showOn: 'admin_settings_security_enabled',
              field: {
                type: 'toggle',
                id: 'admin_settings_security_enabled'
              },
              elements: [
                {
                  type: 'vertical_group',
                  title: 'Idle Timeout',
                  tooltip: 'Idle Timeout',
                  showOn: 'admin_settings_security_idle_timeout_enabled',
                  description:
                    'Log out admins who are inactive. Admins will be logged out when the admin idle timeout elapses.',
                  field: {
                    type: 'toggle',
                    id: 'admin_settings_security_idle_timeout_enabled'
                  },
                  elements: [
                    {
                      type: 'field',
                      title: 'Admin Idle Timeout',
                      tooltip: 'Admin Idle Timeout',
                      field: {
                        type: 'input',
                        id: 'admin_settings_security_idle_timeout'
                      }
                    }
                  ]
                },
                {
                  type: 'field',
                  title: 'Admin IP Whitelisting',
                  tooltip: 'Admin IP Whitelisting',
                  description:
                    'When enabled, admins can only log in from trusted IP addresses.',
                  field: {
                    type: 'input',
                    id: 'admin_settings_security_whitelist'
                  }
                }
              ]
            }
          ]
        },
        {
          type: 'page_section',
          title: 'Agent Notifications',
          elements: [
            {
              type: 'vertical_group',
              title: 'Email Subscriptons',
              showOn: 'agent_notifications_enabled',
              description:
                'Allow agents to subscribe to email notifications (the ones set in the Ticket Notifications and Other Notifications tabs in Agents, or in the agent’s preferences).',
              field: {
                type: 'toggle',
                id: 'agent_notifications_enabled'
              },
              elements: [
                {
                  type: 'field',
                  field: {
                    editable: true,
                    type: 'profiles',
                    title: 'Agents',
                    max: 200,
                    id: 'agent_email_subscriptions'
                  }
                }
              ]
            }
          ]
        },
        {
          type: 'page_section',
          title: 'Keyboard Shortcuts',
          elements: [
            {
              type: 'vertical_group',
              title: 'Keyboard Shortcuts',
              description: 'Allow agent to use keyboard shortcuts. ',
              showOn: 'agent_keyboard_shortcuts_enabled',
              field: {
                type: 'toggle',
                id: 'agent_keyboard_shortcuts_enabled'
              },
              elements: [
                {
                  type: 'field',
                  field: {
                    editable: true,
                    type: 'profiles',
                    title: 'Agents',
                    max: 200,
                    id: 'agent_keyboard_shortcuts'
                  }
                }
              ]
            }
          ]
        },
        {
          type: 'page_section',
          title: 'Forwards out of Helpdesk',
          elements: [
            {
              type: 'vertical_group',
              title: 'Default email account',
              showOn: 'forwards_out_of_helpdesk_enabled',
              description:
                'Deskpro sends a number of non-ticket related emails such as password reset links, welcome emails, or login alerts. This option defines which email account to use for these types of emails.\n\nSince these emails are not directly related to communication between users and agents, some helpdesks may wish to configure a no-reply address instead.',
              field: {
                type: 'toggle',
                id: 'forwards_out_of_helpdesk_enabled'
              },
              elements: [
                {
                  type: 'tabs_section',
                  allowExpanded: true,
                  title: 'Brand',
                  tabs: [
                    {
                      id: 'brand1',
                      iconUrn: brand1,
                      title: 'Brand 1'
                    },
                    {
                      id: 'brand2',
                      iconUrn: brand2,
                      title: 'Brand 2'
                    }
                  ],
                  elements: [
                    {
                      type: 'vertical_group',
                      elements: [
                        {
                          type: 'field',
                          title: 'Default email account',
                          field: {
                            type: 'input',
                            id: 'brand1_default_email_account'
                          }
                        }
                      ]
                    },
                    {
                      type: 'vertical_group',
                      elements: [
                        {
                          type: 'field',
                          title: 'Default email account',
                          field: {
                            type: 'input',
                            id: 'brand2_default_email_account'
                          }
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
          title: 'Help Center',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              title: 'Knowledgebase',
              showOn: 'agent_settings_help_center_knowledgebase',
              description:
                'When enabled, the Knowledgebase section of your Help Center will be accessible. Users will be able to view and subscribe to articles.',
              field: {
                type: 'toggle',
                id: 'agent_settings_help_center_knowledgebase'
              },
              elements: [],
              articles: 'featuredArticles'
            },
            {
              type: 'vertical_group',
              title: 'News',
              showOn: 'agent_settings_help_center_news',
              description:
                'When enabled, the News section of your Help Center will be accessible. Users will be able to view and subscribe to News posts.',
              field: {
                type: 'toggle',
                id: 'agent_settings_help_center_news'
              },
              elements: [],
              articles: 'featuredArticles'
            },
            {
              type: 'vertical_group',
              title: 'Downloads',
              showOn: 'agent_settings_help_center_downloads',
              description:
                'When enabled, the Downloads section of your Help Center will be accessible. Users will be able to view and subscribe to documents.',
              field: {
                type: 'toggle',
                id: 'agent_settings_help_center_downloads'
              },
              elements: [],
              articles: 'featuredArticles'
            },
            {
              type: 'vertical_group',
              title: 'Community',
              showOn: 'agent_settings_help_center_community',
              description:
                'When enabled, the Community section of your Help Center will be accessible. Users will be able to view and subscribe to Topics.',
              field: {
                type: 'toggle',
                id: 'agent_settings_help_center_community'
              },
              elements: [],
              articles: 'featuredArticles'
            }
          ]
        },
        {
          type: 'page_section',
          title: 'Testing',
          elements: [
            {
              type: 'field',
              title: 'List of strings',
              field: {
                type: 'stringlist',
                id: 'test_list_of_strings'
              }
            },
            {
              type: 'field',
              title: 'Unit option',
              field: {
                type: 'units',
                id: 'test_unit_value',
                optionId: 'test_unit_option',
                options: [
                  { value: 'minutes', label: 'minutes' },
                  { value: 'hours', label: 'hours' },
                  { value: 'seconds', label: 'seconds' }
                ]
              }
            }
          ]
        },
        {
          type: 'page_section',
          title: 'Checking the checkbox',
          elements: [
            {
              type: 'group',
              elements: [
                {
                  type: 'field',
                  field: {
                    type: 'checkbox',
                    id: 'test_unit_checkbox_1',
                    value: 'admin'
                  }
                },
                {
                  type: 'horizontal_group',
                  elements: [
                    {
                      type: 'label',
                      label: 'Testing this out'
                    },
                    {
                      type: 'field',
                      field: {
                        type: 'input',
                        id: 'test_unit_another_input_1'
                      }
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
                    id: 'test_unit_checkbox_2',
                    value: 'stuff'
                  }
                },
                {
                  type: 'horizontal_group',
                  elements: [
                    {
                      type: 'label',
                      label: 'Testing this out'
                    },
                    {
                      type: 'field',
                      field: {
                        type: 'input',
                        id: 'test_unit_another_input_2'
                      }
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

export const jsonSchema = {
  agent_settings_security_enabled: true,
  agent_settings_security_idle_timeout: '100',
  agent_settings_security_idle_timeout_action: '1000',
  agent_settings_security_whitelist: '',
  admin_settings_security_enabled: true,
  admin_settings_security_idle_timeout_enabled: true,
  admin_settings_security_idle_timeout: '200',
  admin_settings_security_whitelist: '',
  agent_notifications_enabled: true,
  agent_keyboard_shortcuts_enabled: true,
  forwards_out_of_helpdesk_enabled: true,
  agent_email_subscriptions: [
    { name: 'Arthur Curry' },
    { name: 'Bruce Wayne' },
    { name: 'Clark Kent' },
    { name: 'Diana Prince' },
    { name: 'Harleen Quinzel' },
    { name: 'Ignatius Ogilvy' },
    { name: 'Jason Todd' },
    { name: 'Pamela Lillian ' },
    { name: 'Selina Kyle' }
  ],
  agent_keyboard_shortcuts: [
    { name: 'Arthur Curry' },
    { name: 'Bruce Wayne' },
    { name: 'Clark Kent' },
    { name: 'Diana Prince' },
    { name: 'Harleen Quinzel' }
  ],
  brand1_default_email_account: 'support@brand1.deskpro.com',
  brand2_default_email_account: '',
  agent_settings_help_center_knowledgebase: true,
  agent_settings_help_center_news: true,
  agent_settings_help_center_downloads: true,
  agent_settings_help_center_community: true,
  test_list_of_strings: [] as string[],
  test_unit_value: '',
  test_unit_option: 'minutes',
  test_unit_checkbox_1: ['admin'],
  test_unit_another_input_1: 'another',
  test_unit_checkbox_2: ['stuff'],
  test_unit_another_input_2: 'hello'
};

export const validationSchema = {
  type: 'object',
  properties: {
    agent_settings_security_enabled: {
      type: 'boolean'
    },
    agent_settings_security_idle_timeout: {
      type: 'string',
      pattern: '^[0-9]*$',
      when: {
        agent_settings_security_enabled: {
          is: true,
          then: {
            required: true
          }
        }
      }
    },
    agent_settings_security_idle_timeout_action: {
      type: 'string'
    },
    agent_settings_security_whitelist: {
      type: 'string',
      pattern: '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$'
    },
    admin_settings_security_enabled: {
      type: 'boolean'
    },
    admin_settings_security_idle_timeout_enabled: {
      type: 'string'
    },
    admin_settings_security_idle_timeout: {
      type: 'string'
    },
    admin_settings_security_whitelist: {
      type: 'string',
      pattern: '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$'
    },
    agent_notifications_enabled: {
      type: 'boolean'
    },
    agent_keyboard_shortcuts_enabled: {
      type: 'boolean'
    },
    forwards_out_of_helpdesk_enabled: {
      type: 'boolean'
    },
    agent_email_subscriptions: {
      type: 'array'
    },
    agent_keyboard_shortcuts: {
      type: 'array'
    },
    brand1_default_email_account: {
      type: 'string',
      format: 'email'
    },
    brand2_default_email_account: {
      type: 'string',
      format: 'email'
    },
    agent_settings_help_center_knowledgebase: {
      type: 'boolean'
    },
    agent_settings_help_center_news: {
      type: 'boolean'
    },
    agent_settings_help_center_downloads: {
      type: 'boolean'
    },
    agent_settings_help_center_community: {
      type: 'boolean'
    },
    test_list_of_strings: {
      type: 'array'
    },
    test_unit_value: {
      type: 'string'
    },
    test_unit_option: {
      type: 'string'
    },
    test_unit_checkbox_1: {
      type: 'array'
    },
    test_unit_another_input_1: {
      type: 'string'
    },
    test_unit_checkbox_2: {
      type: 'array'
    },
    test_unit_another_input_2: {
      type: 'string'
    },
  },
};

export const validationConfig = {
  errMessages: {
    agent_settings_security_idle_timeout: {
      required: 'validation.required',
      pattern: 'validation.numberNotValid'
    },
    agent_settings_security_whitelist: {
      pattern: 'agent.settings.security_whitelist'
    }
  }
};