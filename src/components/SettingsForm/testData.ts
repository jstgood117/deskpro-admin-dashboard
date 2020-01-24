import brand1 from '../../assets/brands/brand1.png';
import brand2 from '../../assets/brands/brand2.png';

export const uiSchema = {
  elements: [
    {
      title: 'Agent Settings',
      type: 'feature_section',
      elements: [
        {
          title: 'Agent Security Settings',
          type: 'page_section',
          elements: [
            {
              type: 'field',
              field: {
                type: 'toggle',
                id: 'agent_settings_security_enabled'
              }
            },
            {
              type: 'vertical_group',
              title: 'Idle Timeout',
              tooltip:
                'Enable this to log out agents who are idle. Otherwise, sessions will be kept alive if Deskpro is open in a browser window, even if the agent is not doing anything.',
              showOn: 'agent_settings_security_enabled',
              description:
                'Enable this to log out agents who are idle. Otherwise, sessions will be kept alive if Deskpro is open in a browser window, even if the agent is not doing anything.',
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
              type: 'field',
              field: {
                type: 'toggle',
                id: 'admin_settings_security_enabled'
              }
            },
            {
              type: 'vertical_group',
              title: 'Admin authentication',
              tooltip: 'Admin authentication',
              description:
                'Administrators will be required to authenticate themselves when accessing the admin area of Deskpro.',
              showOn: 'admin_settings_security_enabled',
              elements: [
                {
                  type: 'field',
                  field: {
                    type: 'toggle',
                    id: 'admin_settings_security_idle_timeout_enabled'
                  }
                },
                {
                  type: 'vertical_group',
                  title: 'Idle Timeout',
                  tooltip: 'Idle Timeout',
                  showOn: 'admin_settings_security_idle_timeout_enabled',
                  description:
                    'Log out admins who are inactive. Admins will be logged out when the admin idle timeout elapses.',
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
              type: 'field',
              field: {
                type: 'toggle',
                id: 'agent_notifications_enabled'
              }
            },
            {
              type: 'vertical_group',
              title: 'Email Subscriptons',
              showOn: 'agent_notifications_enabled',
              description:
                'Allow agents to subscribe to email notifications (the ones set in the Ticket Notifications and Other Notifications tabs in Agents, or in the agent’s preferences).',
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
              type: 'field',
              field: {
                type: 'toggle',
                id: 'agent_keyboard_shortcuts_enabled'
              }
            },
            {
              type: 'vertical_group',
              title: 'Keyboard Shortcuts',
              description: 'Allow agent to use keyboard shortcuts. ',
              showOn: 'agent_keyboard_shortcuts_enabled',
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
              type: 'field',
              field: {
                type: 'toggle',
                id: 'forwards_out_of_helpdesk_enabled'
              }
            },
            {
              type: 'vertical_group',
              title: 'Default email account',
              showOn: 'forwards_out_of_helpdesk_enabled',
              description:
                'Deskpro sends a number of non-ticket related emails such as password reset links, welcome emails, or login alerts. This option defines which email account to use for these types of emails.\n\nSince these emails are not directly related to communication between users and agents, some helpdesks may wish to configure a no-reply address instead.',
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
  brand2_default_email_account: ''
};
