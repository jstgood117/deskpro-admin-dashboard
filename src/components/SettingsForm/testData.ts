export const uiSchema = {
  elements:[{
    'title': 'Agent Settings',
    'type': 'feature_section',
    'elements': [
      {
        'title': 'Agent Security Settings',
        'type': 'page_section',
        'elements': [
          {
            'type': 'field',
            'field': {
              'type': 'toggle',
              'id': 'agent_settings_security_enabled',
            }
          },
          {
            'type': 'vertical_group',
            'showOn': 'agent_settings_security_enabled',
            'elements': [
              {
                'type': 'vertical_group',
                'title': 'Idle Timeout',
                'description': 'Enable this to log out agents who are idle. Otherwise, sessions will be kept alive if Deskpro is open in a browser window, even if the agent is not doing anything.',
                'elements': [{
                  'type': 'field',
                  'title': 'Agent Timeout',
                  'field': {
                    'type': 'input',
                    'id': 'agent_settings_security_idle_timeout',
                  },
                },{
                  'type': 'field',
                  'title': 'Send idle agent who have been timed out to ',
                  'field': {
                    'type': 'input',
                    'id': 'agent_settings_security_idle_timeout_action'
                  }
                },{
                  'type': 'field',
                  'title': 'Agent IP Whitelisting',
                  'description': 'When enabled, agents can only log in from IP addresses that have been marked as trusted. Specify the IP addresses manually or allow agent to authenticate IP address using email. ',
                  'field': {
                    'type': 'input',
                    'id': 'agent_settings_security_whitelist'
                  }
                }]
              }
            ]
          }
        ]
      },
      {
        'type': 'page_section',
        'title': 'Admin Security Settings',
        'elements': [
          {
            'type': 'field',
            'field': {
              'type': 'toggle',
              'id': 'admin_settings_security_enabled',
            }
          },
          {
            'type': 'vertical_group',
            'title': 'Admin authentication',
            'description': 'Administrators will be required to authenticate themselves when accessing the admin area of Deskpro.',
            'showOn': 'admin_settings_security_enabled',
            'elements': [
              {
                'type': 'group',
                'elements': [{
                    'type': 'field',
                    'field': {
                      'type': 'toggle',
                      'id': 'admin_settings_security_idle_timeout_enabled',
                    }
                  }, {
                  'type': 'vertical_group',
                  'title':'Idle Timeout',
                  'description': 'Log out admins who are inactive. Admins will be logged out when the admin idle timeout elapses.',
                  'elements':[{
                    'type': 'field',
                    'title': 'Admin Idle Timeout',
                    'field': {
                      'type': 'input',
                      'id': 'admin_settings_security_idle_timeout'
                    }
                  }]
                },{
                  'type': 'field',
                  'title': 'Admin IP Whitelisting',
                  'description': 'When enabled, admins can only log in from trusted IP addresses.',
                  'field': {
                    'type': 'input',
                    'id': 'admin_settings_security_whitelist'
                  }
                }]
              }
            ]
          }
        ]
      },
      {
        'type': 'page_section',
        'title': 'Agent Notifications',
        'elements': [
          {
            'type': 'field',
            'field': {
              'type': 'toggle',
              'id': 'agent_notifications_enabled',
            }
          },
          {
            'type': 'vertical_group',
            'showOn': 'agent_notifications_enabled',
            'elements': [
              {
                'type': 'vertical_group',
                'title': 'Email Subscriptons',
                'description': 'Allow agents to subscribe to email notifications (the ones set in the Ticket Notifications and Other Notifications tabs in Agents, or in the agent’s preferences).',
                'elements': []
              }
            ]
          }
        ]
      },
      {
        'type': 'page_section',
        'title': 'Keyboard Shortcuts',
        'elements': [
          {
            'type': 'field',
            'field': {
              'type': 'toggle',
              'id': 'agent_keyboard_shortcuts_enabled',
            }
          },
          {
            'type': 'vertical_group',
            'showOn': 'agent_keyboard_shortcuts_enabled',
            'elements': [
              {
                'type': 'vertical_group',
                'title': 'Keyboard Shortcuts',
                'description': 'Allow agent to use keyboard shortcuts. ',
                'elements': []
              }
            ]
          }
        ]
      },
    ]
  }]
};

export const jsonSchema = {
  'agent_settings_security_enabled': true,
  'agent_settings_security_idle_timeout': '100',
  'agent_settings_security_idle_timeout_action':'1000',
  'agent_settings_security_whitelist':'',
  'admin_settings_security_enabled': true,
  'admin_settings_security_idle_timeout_enabled': true,
  'admin_settings_security_idle_timeout': '200',
  'admin_settings_security_whitelist':'',
  'agent_notifications_enabled': true,
  'agent_keyboard_shortcuts_enabled': true,
};