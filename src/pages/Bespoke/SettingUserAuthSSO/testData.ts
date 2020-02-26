import { API_SettingsUiElement } from '../../../codegen/types';

export const uiSchema: {
  elements: API_SettingsUiElement & { type: string }[];
} = {
  elements: [
    {
      title: 'User Authentication & SSO',
      type: 'feature_section',
      brandButtonGroup: true,
      header: {
        title: 'Deskpro User Management ',
        card: 'HeaderCard',
        showOn: 'settings_auth_sso_header_enabled',
        description:
          'When Deskpro user management is disabled. no users can be entered into the system expect through another user source. For example, this means even agents cannot create new users.'
      },
      elements: [
        {
          title: 'Registration',
          type: 'page_section',
          className: 'self-registation',
          elements: [
            {
              type: 'vertical_group',
              title: 'User self registation',
              description:
                'Allow new users to register themselves , meaning they can submit content to the helpdesk  (such as tickets or comments). If **disabled** new user accounts will must be created by agents and users must have an existing account to submit content. For example, if a user sends the helpdesk an email but is not registered, their email will be completely rejected.',
              showOn: 'settings_auth_sso_registeration',
              field: {
                type: 'toggle',
                id: 'settings_auth_sso_registeration'
              },
              info: [
                {
                  type: 'button',
                  title: 'User registration',
                  url: 'http://www.test.com',
                  icon: 'guide'
                }
              ],
              elements: []
            }
          ]
        },
        {
          title: 'Help Center Public Access',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              title: '"Everyone" usergroup',
              description:
                'Guests are able to perform a number of actions defined by permissions granted by the Everyone usergroup. Turning the Everyone usergroup off will require all users to log in to do anything on the Help Center',
              showOn: 'settings_auth_sso_helpcenter_access',
              field: {
                type: 'toggle',
                id: 'settings_auth_sso_helpcenter_access'
              },
              elements: []
            }
          ]
        },
        {
          title: 'Email Validation Requirements',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              title:
                'Require email validation for tickets submitted from the *web*',
              description: 'This includes the Help Center and website widget.',
              showOn: 'settings_auth_sso_email_validation_web',
              field: {
                type: 'toggle',
                id: 'settings_auth_sso_email_validation_web'
              },
              elements: []
            },
            {
              type: 'vertical_group',
              title:
                'Require email validation for tickets submitted via *email*',
              showOn: 'settings_auth_sso_email_validation_email',
              field: {
                type: 'toggle',
                id: 'settings_auth_sso_email_validation_email'
              },
              elements: []
            }
          ]
        },
        {
          title: 'Email Domain Requirements',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              title:
                'Only allow users with email addresses with valid domain to register or use the system',
              description:
                'If a user has an email address which does NOT match one of the set domains, then they will be rejected. To enter multiple domains separated each using a coma. Enter an asterisk (*) in front of a domain to wildcard approve any sub-domains.',
              showOn: 'brand1_settings_auth_sso_email_domain_requirements',
              className: 'domain_requirements',
              field: {
                type: 'toggle',
                id: 'settings_auth_sso_email_domain_requirements'
              },
              elements: [
                {
                  type: 'vertical_group',
                  showOn: 'settings_auth_sso_email_domain_requirements',
                  field: {
                    type: 'textarea',
                    placeholder:
                      'deskpro.com, deskprodemo.com, *.wildcard.org, example.com',
                    id: 'settings_auth_sso_email_domains'
                  }
                }
              ]
            }
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
                    description: 'Specify custom password requirements.'
                  }
                ]
              },
              info: [
                {
                  type: 'button',
                  title: 'User password policy',
                  url: 'http://www.test.com',
                  icon: 'guide'
                }
              ],
              elements: [
                {
                  type: 'group',
                  className: 'group-custom-policy',
                  dependenceOn: {
                    field: 'brand1_password_policy',
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
                          id: 'custom_policy_minimum_password_value'
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
                          id: 'custom_policy_maximum_password_value'
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
                          id: 'custom_policy_require_lower_case_value'
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
                          id: 'custom_policy_require_upper_case_value'
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
                          id: 'custom_policy_require_number_value'
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
                          id: 'custom_policy_require_symbols_value'
                        }
                      ],
                      field: {
                        type: 'checkbox',
                        id: 'custom_policy_require_symbols',
                        value: 'yes'
                      },
                      showRevert: true
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
  settings_auth_sso_header_enabled: true,
  brand1_settings_auth_sso_registeration: true,
  brand1_settings_auth_sso_helpcenter_access: true,
  brand1_settings_auth_sso_email_validation_web: false,
  brand1_settings_auth_sso_email_validation_email: false,
  brand1_settings_auth_sso_email_domain_requirements: false,
  brand1_settings_auth_sso_email_domains: '',
  brand1_custom_policy_require_symbols: 'no',
  brand1_custom_policy_require_symbols_value: 0,
  brand1_custom_policy_require_symbols_value_default: 0,
  brand1_custom_policy_require_number: 'yes',
  brand1_custom_policy_require_number_value: 8,
  brand1_custom_policy_require_number_value_default: 8,
  brand1_custom_policy_require_upper_case: 'no',
  brand1_custom_policy_require_upper_case_value: 0,
  brand1_custom_policy_require_upper_case_value_default: 0,
  brand1_custom_policy_require_lower_case: 'no',
  brand1_custom_policy_require_lower_case_value: 0,
  brand1_custom_policy_require_lower_case_value_default: 0,
  brand1_custom_policy_forbid_password_reuse: 'yes',
  brand1_custom_policy_maximum_password: 'yes',
  brand1_custom_policy_maximum_password_value: 31,
  brand1_custom_policy_maximum_password_value_default: 31,
  brand1_custom_policy_minimum_password: 'yes',
  brand1_custom_policy_minimum_password_value: 5,
  brand1_custom_policy_minimum_password_value_default: 5,
  brand1_password_policy: 'standard_policy'
};

export const vaildationSchema = {
  type: 'object',
  properties: {
    brand1_settings_auth_sso_registeration: {
      type: 'boolean'
    },
    brand1_settings_auth_sso_helpcenter_access: {
      type: 'boolean'
    },
    brand1_settings_auth_sso_email_domains: {
      type: 'string',
      when: {
        brand1_settings_auth_sso_email_domain_requirements: {
          is: true,
          then: {
            required: true
          }
        }
      }
    }
  }
};

export const validationConfig = {
  errMessages: {
    brand1_settings_auth_sso_email_domains: {
      required: 'validation.required'
    }
  }
};
