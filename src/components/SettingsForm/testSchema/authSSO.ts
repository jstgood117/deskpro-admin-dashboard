import { API_SettingsUiElement } from '../../../codegen/types';

export const uiSchema: {
  elements: API_SettingsUiElement & { type: string }[];
} = {
  elements: [
    {
      title: 'Agent Authentication & SSO',
      type: 'feature_section',
      header: {
        title: 'Deskpro Agent Authentication ',
        showOn: 'agent_auth_sso_header_enabled',
        description:
          'You can only disable Deskpro Agent Authentication if you have enabled a different agent authentication source.',
      },
      elements: [
        {
          title: 'Remember Device',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              title: 'Stay logged in when browser closed',
              description:
                'Allow agents the choice of remaining logged in on a device when they close their browser. This means agents will only be logged out when they deliberately log out.',
              showOn: 'agent_auth_sso_remember_device_enabled',
              field: {
                type: 'toggle',
                id: 'agent_auth_sso_remember_device_enabled'
              },
              info: [
                {
                  type: 'button',
                  title: 'Agent idle timeout',
                  url: 'http://www.test.com',
                  icon: 'link'
                }
              ],
              elements: [
                {
                  type: 'field',
                  title: 'Require agent revalidate their credentials after',
                  field: {
                    type: 'units',
                    id: 'agent_auth_sso_remember_device_field',
                    optionId: 'agent_auth_sso_remember_device_option',
                    options: [
                      { value: 'days', label: 'days' },
                      { value: 'months', label: 'months' }
                    ]
                  }
                }
              ]
            },
            {
              type: 'vertical_group',
              title: 'Display returning agent’s email address',
              description:
                'For agents who are not using “Stay logged in when browser closed”. Show the returning agent their email address, when they did not actively log out.',
              className: 'checkbox-field',
              field: {
                type: 'checkbox',
                id: 'agent_auth_sso_remember_device_ticket',
                value: 'yes'
              },
              showRevert: true
            },
          ]
        },
        {
          title: 'Password Policy',
          type: 'page_section',
          className: 'password-policy',
          elements: [
            {
              type: 'vertical_group',
              className: 'captcha',
              field: {
                type: 'radioGroup',
                id: 'password_policy',
                className: 'captcha',
                options: [
                  {
                    label: 'Standard policy',
                    value: 'standard_policy',
                    description:
                      'Passwords must be at least 5 characters long. No other requirements are enforced.'
                  },
                  {
                    label: 'Custom policy ',
                    id: 'custom_policy',
                    value: 'custom_policy',
                    description: 'Specify custom password requirements.'}
                ]
              },
              info: [
                {
                  type: 'button',
                  title: 'Agent password policy',
                  url: 'http://www.test.com',
                  icon: 'guide',
                }
              ],
              elements: [
                {
                  type: 'group',
                  className: 'group-custom-policy',
                  dependenceOn: {
                    field: 'password_policy',
                    value: 'custom_policy'
                  },
                  elements: [
                    {
                      type: 'inline_edit_group',
                      description:
                          'The minimum number of characters the password has to be.',
                      className: 'checkbox-field-inline',
                      inline: [
                        {
                          type: 'label',
                          label: 'Minimum password length:'
                        },
                        {
                          type: 'input',
                          id: 'custom_policy_minimum_password_value',
                        },
                        {
                          type: 'label',
                          label: 'characters'
                        }
                      ],
                      field: {
                        type: 'checkbox',
                        id: 'custom_policy_minimum_password',
                        value: 'yes'
                      },
                      showRevert: true
                    },
                    {
                      type: 'inline_edit_group',
                      description:
                          'How many days a password can remain unchanged until Deskpro requires the user to change it.',
                      className: 'checkbox-field-inline',
                      inline: [
                        {
                          type: 'label',
                          label: 'Maximum password age:'
                        },
                        {
                          type: 'input',
                          id: 'custom_policy_maximum_password_value',
                        },
                        {
                          type: 'label',
                          label: 'days'
                        }
                      ],
                      field: {
                        type: 'checkbox',
                        id: 'custom_policy_maximum_password',
                        value: 'yes'
                      },
                      showRevert: true
                    },
                    {
                      type: 'vertical_group',
                      title: 'Forbid password reuse',
                      description:
                          'When enabled, users will not be able to change their password to a password they have used in the past.',
                      className: 'checkbox-field',
                      field: {
                        type: 'checkbox',
                        id: 'custom_policy_forbid_password_reuse',
                        value: 'yes'
                      },
                      showRevert: true
                    },
                    {
                      type: 'inline_edit_group',
                      description:
                          'Define the minimum number of lower-case (a-z) characters that must be used in the password.',
                      className: 'checkbox-field-inline',
                      inline: [
                        {
                          type: 'label',
                          label: 'Require this many lower-case characters:'
                        },
                        {
                          type: 'input',
                          id: 'custom_policy_require_lower_case_value',
                        }
                      ],
                      field: {
                        type: 'checkbox',
                        id: 'custom_policy_require_lower_case',
                        value: 'yes'
                      },
                      showRevert: true
                    },
                    {
                      type: 'inline_edit_group',
                      description:
                          'Define the minimum number of upper-case (A-Z) characters that must be used in the password.',
                      className: 'checkbox-field-inline',
                      inline: [
                        {
                          type: 'label',
                          label: 'Require this many upper-case characters: '
                        },
                        {
                          type: 'input',
                          id: 'custom_policy_require_upper_case_value',
                        }
                      ],
                      field: {
                        type: 'checkbox',
                        id: 'custom_policy_require_upper_case',
                        value: 'yes'
                      },
                      showRevert: true
                    },
                    {
                      type: 'inline_edit_group',
                      description:
                          'Define the minimum number of numbers (0-9) that must be used in the password.',
                      className: 'checkbox-field-inline',
                      inline: [
                        {
                          type: 'label',
                          label: 'Require this many numbers: '
                        },
                        {
                          type: 'input',
                          id: 'custom_policy_require_number_value',
                        }
                      ],
                      field: {
                        type: 'checkbox',
                        id: 'custom_policy_require_number',
                        value: 'yes'
                      },
                      showRevert: true
                    },
                    {
                      type: 'inline_edit_group',
                      description:
                          'Define the minimum number of symbols (!, @, $, % etc) that must be used in the password.',
                      className: 'checkbox-field-inline',
                      inline: [
                        {
                          type: 'label',
                          label: 'Require this many symbols: '
                        },
                        {
                          type: 'input',
                          id: 'custom_policy_require_symbols_value',
                        }
                      ],
                      field: {
                        type: 'checkbox',
                        id: 'custom_policy_require_symbols',
                        value: 'yes'
                      },
                      showRevert: true
                    },
                      /*
                    {
                      type: 'vertical_group',
                      title: 'Require this many symbols: **0** ',
                      description:
                        'Define the minimum number of symbols (!, @, $, % etc) that must be used in the password.',
                      className: 'checkbox-field',
                      field: {
                        type: 'checkbox',
                        id: 'custom_policy_require_symbols',
                        value: 'yes'
                      },
                      showRevert: true
                    },*/
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
  agent_auth_sso_header_enabled: true,
  agent_auth_sso_remember_device_enabled: true,
  agent_auth_sso_remember_device_ticket: ['yes'],
  custom_policy_require_symbols: 'no',
  custom_policy_require_symbols_value: 0,
  custom_policy_require_symbols_value_default: 0,
  custom_policy_require_number: 'yes',
  custom_policy_require_number_value: 8,
  custom_policy_require_number_value_default: 8,
  custom_policy_require_upper_case: 'no',
  custom_policy_require_upper_case_value: 0,
  custom_policy_require_upper_case_value_default: 0,
  custom_policy_require_lower_case: 'no',
  custom_policy_require_lower_case_value: 0,
  custom_policy_require_lower_case_value_default: 0,
  custom_policy_forbid_password_reuse: 'yes',
  custom_policy_maximum_password: 'yes',
  custom_policy_maximum_password_value: 31,
  custom_policy_maximum_password_value_default: 31,
  custom_policy_minimum_password: 'yes',
  custom_policy_minimum_password_value: 5,
  custom_policy_minimum_password_value_default: 5,
  password_policy: 'standard_policy',
  agent_auth_sso_remember_device_option: 'months',
  agent_auth_sso_remember_device_field: 6,
};

export const vaildationSchema = {
  type: 'object',
  properties: {
    agent_auth_sso_remember_device_enabled: {
      type: 'boolean'
    },
    agent_auth_sso_remember_device_field: {
      type: 'number',
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
    agent_auth_sso_remember_device_field: {
      required: 'validation.required',
    }
  }
};
