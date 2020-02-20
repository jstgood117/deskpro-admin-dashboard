import brand1 from '../../../assets/brands/brand1.png';
import brand2 from '../../../assets/brands/brand2.png';
import brand3 from '../../../assets/brands/brand3.png';
import { API_SettingsUiElement } from '../../../codegen/types';

export const uiSchema: {
  elements: API_SettingsUiElement & { type: string }[];
} = {
  elements: [
    {
      // title: 'General Settings',
      type: 'feature_section',
      className: 'custom-section',
      icon: 'down',
      field: {
        type: 'singleSelect',
        selectType: 'large',
        options: [
          {
            label: 'General Settings',
            value: 'General Settings'
          }
        ]
      },
      elements: [
        {
          type: 'page_section',
          title: 'Account Logo',
          elements: [
            {
              type: 'vertical_group',
              title: 'Display Custom Logo',
              showOn: 'display_custom_logo_enabled',
              field: {
                type: 'toggle',
                id: 'display_custom_logo_enabled'
              },
              elements: [
                {
                  type: 'field',
                  field: {
                    type: 'fileUpload',
                    id: 'general_setting_upload_file',
                  },
                }
              ],
            },
          ],
        },
        {
          type: 'page_section',
          title: 'Helpdesk Settings',
          elements: [
            {
              type: 'vertical_group',
              className: 'info-custom helpdesk',
              elements: [
                {
                  type: 'tabs_section',
                  title: 'Brand',
                  allowExpanded: true,
                  borderBottom: true,
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
                    },
                    {
                      id: 'brand3',
                      iconUrn: brand3,
                      title: 'Brand 3'
                    }
                  ],
                  elements: [
                    {
                      type: 'vertical_group',
                      className: 'brand-1-group',
                      elements: [
                        {
                          type: 'header-medium-card',
                          title: 'Temporarily Disable Helpdesk',
                          description: 'Disable the Help Center, website embeds and stop processing emails. Both the Agent the Admin interfaces will remain accessible.',
                        },
                        {
                          type: 'field',
                          className: 'notification-block',
                          title: 'Notification Message',
                          description: 'This message will be displayed when the helpdesk is offline or when you are installing updates. HTML is allow',
                        },
                        {
                          type: 'field',
                          className: 'input-filed',
                          title: 'Agent Message ',
                          field: {
                            type: 'textarea',
                            id: 'brand1_helpdes_setting_agent_message'
                          }
                        },
                        {
                          type: 'field',
                          title: 'User Message ',
                          className: 'input-filed',
                          field: {
                            type: 'textarea',
                            id: 'brand1_helpdes_setting_user_message'
                          }
                        }
                      ]
                    },
                    {
                      type: 'vertical_group',
                      className: 'brand-1-group',
                      elements: [
                        {
                          type: 'header-medium-card',
                          title: 'Temporarily Disable Helpdesk',
                          description: 'Disable the Help Center, website embeds and stop processing emails. Both the Agent the Admin interfaces will remain accessible.',
                        },
                        {
                          type: 'field',
                          className: 'notification-block',
                          title: 'Notification Message',
                          description: 'This message will be displayed when the helpdesk is offline or when you are installing updates. HTML is allow',
                        },
                        {
                          type: 'field',
                          className: 'input-filed',
                          title: 'Agent Message ',
                          field: {
                            type: 'textarea',
                            id: 'brand2_helpdes_setting_agent_message'
                          }
                        },
                        {
                          type: 'field',
                          title: 'User Message ',
                          className: 'input-filed',
                          field: {
                            type: 'textarea',
                            id: 'brand2_helpdes_setting_user_message'
                          }
                        }
                      ]
                    },
                    {
                      type: 'vertical_group',
                      className: 'brand-1-group',
                      elements: [
                        {
                          type: 'header-medium-card',
                          title: 'Temporarily Disable Helpdesk',
                          description: 'Disable the Help Center, website embeds and stop processing emails. Both the Agent the Admin interfaces will remain accessible.',
                        },
                        {
                          type: 'field',
                          className: 'notification-block',
                          title: 'Notification Message',
                          description: 'This message will be displayed when the helpdesk is offline or when you are installing updates. HTML is allow',
                        },
                        {
                          type: 'field',
                          className: 'input-filed',
                          title: 'Agent Message ',
                          field: {
                            type: 'textarea',
                            id: 'brand3_helpdes_setting_agent_message'
                          }
                        },
                        {
                          type: 'field',
                          title: 'User Message ',
                          className: 'input-filed',
                          field: {
                            type: 'textarea',
                            id: 'brand3_helpdes_setting_user_message'
                          }
                        }
                      ]
                    },
                  ]
                },
              ],
              info: [
                {
                  type: 'button',
                  title: 'Disabling the Helpdesk',
                  url: 'http://www.test.com',
                  icon: 'ic-save'
                },
              ],
            },
            {
              type: 'vertical_group',
              title:
                'Automatically install new languages',
              className: 'checkbox-middle',
              description:
                'New languages translations are sometimes added with new Deskpro updates. When this option is enabled, new languages will be automatically installed and enabled on your helpdesk.',
              showOn: 'helpdesk_settings_checkbox',
              field: {
                type: 'checkbox',
                id: 'helpdesk_settings_checkbox',
                value: 'admin1',
              },
              elements: [],
            },
          ]
        },
        {
          type: 'page_section',
          title: 'Date and Time',
          elements: [
            {
              type: 'vertical_group',
              className: 'vertical-group-data-time info-custom data-time',
              elements: [
                {
                  type: 'group',
                  elements: [
                    {
                      type: 'horizontal_group',
                      elements: [
                        {
                          type: 'label',
                          label: 'Deafault Timezone'
                        },
                        {
                          type: 'field',
                          field: {
                            type: 'select',
                            id: 'default_timezone_select_1',
                            options: [
                              {
                                value: 'UTC',
                                label: 'UTC',
                              },
                              {
                                value: 'UTC1',
                                label: 'UTC1',
                              },
                              {
                                value: 'UTC2',
                                label: 'UTC2',
                              },
                            ],
                            placeholder: '',
                          },
                        },
                      ]
                    }
                  ],
                },
                {
                  type: 'horizontal_group',
                  elements: [
                    {
                      type: 'label',
                      label: 'Full date and time format'
                    },
                    {
                      type: 'field',
                      field: {
                        type: 'input',
                        id: 'general_settings_date_and_time_input_2'
                      }
                    },
                    {
                      type: 'field',
                      description: 'Tue, 12th November 2019 5:00 pm'
                    },
                  ]
                },
                {
                  type: 'horizontal_group',
                  elements: [
                    {
                      type: 'label',
                      label: 'Full date format'
                    },
                    {
                      type: 'field',
                      field: {
                        type: 'input',
                        id: 'general_settings_date_and_time_input_3'
                      }
                    },
                    {
                      type: 'field',
                      description: 'Tue, 12th November 2019'
                    },
                  ]
                },
                {
                  type: 'horizontal_group',
                  elements: [
                    {
                      type: 'label',
                      label: 'Date format'
                    },
                    {
                      type: 'field',
                      field: {
                        type: 'input',
                        id: 'general_settings_date_and_time_input_4'
                      }
                    },
                    {
                      type: 'field',
                      description: 'Nov 12 2019'
                    },
                  ]
                },
                {
                  type: 'horizontal_group',
                  elements: [
                    {
                      type: 'label',
                      label: 'Short date format'
                    },
                    {
                      type: 'field',
                      field: {
                        type: 'input',
                        id: 'general_settings_date_and_time_input_5'
                      }
                    },
                    {
                      type: 'field',
                      description: 'Nov 12'
                    },
                  ]
                },
                {
                  type: 'horizontal_group',
                  elements: [
                    {
                      type: 'label',
                      label: 'Time format'
                    },
                    {
                      type: 'field',
                      field: {
                        type: 'input',
                        id: 'general_settings_date_and_time_input_6'
                      }
                    },
                    {
                      type: 'field',
                      description: '5:00 pm'
                    },
                  ]
                },
              ],
              info: [
                {
                  type: 'button',
                  title: 'Date and time format',
                  url: 'http://www.test.com',
                  icon: 'ic-save'
                },
              ]
            },
            {
              type: 'vertical_group',
              title: 'Relative Time',
              showOn: 'general_settings_date_and_time_enabled',
              description: 'Enable to display times and dates in Deskpro, as how long ago an event occurred. Instead of showing a Timestamp in absolute format.',
              field: {
                type: 'toggle',
                id: 'general_settings_date_and_time_enabled'
              },
              elements: []
            }
          ]
        },
        {
          type: 'page_section',
          title: 'File Uploads',
          elements: [
            {
              type: 'vertical_group',
              title: 'Maximum upload file size',
              description: 'The maximum file size supported by your server is 32.00 MB.',
              elements: [],
              className: 'info-custom file-upload',
              info: [
                {
                  type: 'button',
                  title: 'File Uploads',
                  url: 'http://www.test.com',
                  icon: 'link'
                },
              ]
            },
            {
              type: 'group',
              className: 'group-ml-20 custom-group-element',
              elements: [
                {
                  type: 'horizontal_group',
                  elements: [
                    {
                      type: 'field',
                      title: 'An user can upload',
                    },
                    {
                      type: 'field',
                      title: '',
                      field: {
                        type: 'units',
                        id: 'file_upload_unit_value_1',
                        optionId: 'file_upload_unit_option_1',
                        className: 'width-box',
                        options: [
                          { value: 'MB', label: 'MB' },
                          { value: 'GB', label: 'GB' },
                          { value: 'TB', label: 'TB' },
                        ],
                      },
                    },
                  ]
                },
                {
                  type: 'horizontal_group',
                  elements: [
                    {
                      type: 'field',
                      title: 'An agent can upload',
                    },
                    {
                      type: 'field',
                      title: '',
                      field: {
                        type: 'units',
                        id: 'file_upload_unit_value_2',
                        optionId: 'file_upload_unit_option_2',
                        options: [
                          { value: 'MB', label: 'MB' },
                          { value: 'GB', label: 'GB' },
                          { value: 'TB', label: 'TB' },
                        ],
                      },
                    },
                  ]
                },
              ]
            },
            {
              type: 'vertical_group',
              title: 'User Uploads',
              className: 'group-field',
              elements: [
                {
                  type: 'field',
                  field: {
                    type: 'select',
                    id: 'general_settings_file_uploads_select_1',
                    options: [
                      {
                        value: 'Allow all files',
                        label: 'Allow all files',
                      },
                      {
                        value: 'Allow all files 1',
                        label: 'Allow all files 1',
                      },
                      {
                        value: 'Allow all files 2',
                        label: 'Allow all files 2',
                      },
                    ],
                    placeholder: '',
                  },
                },
              ]
            },
            {
              type: 'vertical_group',
              title: 'Agent Uploads',
              className: 'group-field',
              elements: [
                {
                  type: 'field',
                  field: {
                    type: 'select',
                    id: 'general_settings_file_uploads_select_2',
                    options: [
                      {
                        value: 'Only allow specific file extensions',
                        label: 'Only allow specific file extensions',
                      },
                      {
                        value: 'Only allow specific file extensions 1',
                        label: 'Only allow specific file extensions 1',
                      },
                      {
                        value: 'Only allow specific file extensions 2',
                        label: 'Only allow specific file extensions 2',
                      },
                    ],
                    placeholder: '',
                  },
                },
              ]
            },
            {
              type: 'vertical_group',
              elements: [
                {
                  type: 'field',
                  field: {
                    type: 'stringlist',
                    id: 'general_settings_file_uploads_reopen_permissions',
                    title: 'Permitted Extensions',
                    addTitle: 'Add Extensions',
                  },
                },
              ]
            },
          ]
        },
        {
          type: 'page_section',
          title: 'Rate Limiting',
          elements: [
            {
              type: 'vertical_group',
              title: 'Rate limiting',
              showOn: 'general_settings_rate_limiting_enabel',
              field: {
                type: 'toggle',
                id: 'general_settings_rate_limiting_enabel',
              },
              elements: [],
              className: 'info-custom rate-limit',
              info: [
                {
                  type: 'button',
                  title: 'Rate Limiting',
                  url: 'http://www.test.com',
                  icon: 'ic-save'
                },
              ]
            },
            {
              type: 'vertical_group',
              title: 'Whitelist Ip addresses',
              description:
                `Enter IP's you wish to be exempted from the follwing rate limiting restrictions. When entering IP addresses please use the follwing format: 192.168.1.1, 192.168.*, 192.168.1.0/24, 2000:ff90:0/32`,
              elements: [
                {
                  type: 'field',
                  field: {
                    type: 'stringlist',
                    id: 'general_settings_rate_limiting_reopen_permissions',
                    title: 'Exempted IPs',
                    addTitle: 'Add IP',
                  },
                },
              ],
            },
            {
              type: 'vertical_group',
              title: 'Login',
              elements: [
                {
                  type: 'group',
                  className: 'group-mt-30',
                  elements: [
                    {
                      type: 'inline_edit_group',
                      className: 'checkbox-field-inline',
                      inline: [
                        {
                          type: 'field',
                          title: 'Login Form '
                        },
                        {
                          type: 'label',
                          label: 'After a user has attempted to login'
                        },
                        {
                          type: 'input',
                          id: 'general_settings_login_form_value_1'
                        },
                        {
                          type: 'label',
                          label: ' times within'
                        },
                        {
                          type: 'input',
                          id: 'general_settings_login_form_value_2'
                        },
                        {
                          type: 'label',
                          label: 'minutes,'
                        },
                        {
                          type: 'label',
                          label: 'show a CAPCHA to the user.',
                          isBold: true
                        },
                      ],
                      field: {
                        type: 'checkbox',
                        id: 'general_settings_rate_limiting_checkbox_1',
                        value: 'yes'
                      },
                      showRevert: true,
                      hiddenExtension: true,
                      maxWidth: 1200,
                    },
                    {
                      type: 'inline_edit_group',
                      className: 'checkbox-field-inline',
                      inline: [
                        {
                          type: 'field',
                          title: 'User Accounts '
                        },
                        {
                          type: 'label',
                          label: 'After a user has attempted to login'
                        },
                        {
                          type: 'input',
                          id: 'general_settings_user_accounts_value_1'
                        },
                        {
                          type: 'label',
                          label: ' times within'
                        },
                        {
                          type: 'input',
                          id: 'general_settings_user_accounts_value_2'
                        },
                        {
                          type: 'label',
                          label: 'minutes,'
                        },
                        {
                          type: 'label',
                          label: 'disabel the form',
                          isBold: true
                        },
                        {
                          type: 'label',
                          label: 'for'
                        },
                        {
                          type: 'input',
                          id: 'general_settings_user_accounts_value_3'
                        },
                        {
                          type: 'label',
                          label: 'minutes.'
                        }
                      ],
                      field: {
                        type: 'checkbox',
                        id: 'general_settings_rate_limiting_checkbox_2',
                        value: 'yes'
                      },
                      showRevert: true,
                      hiddenExtension: true,
                      maxWidth: 1200,
                    },
                    {
                      type: 'inline_edit_group',
                      className: 'checkbox-field-inline',
                      inline: [
                        {
                          type: 'field',
                          title: 'Agent Accounts '
                        },
                        {
                          type: 'label',
                          label: 'After a agent has attempted to login'
                        },
                        {
                          type: 'input',
                          id: 'general_settings_agent_accounts_value_1'
                        },
                        {
                          type: 'label',
                          label: 'times within'
                        },
                        {
                          type: 'input',
                          id: 'general_settings_agent_accounts_value_2'
                        },
                        {
                          type: 'label',
                          label: 'minutes, '
                        },
                        {
                          type: 'label',
                          label: 'disabel the form',
                          isBold: true
                        },
                        {
                          type: 'label',
                          label: 'for'
                        },
                        {
                          type: 'input',
                          id: 'general_settings_agent_accounts_value_3'
                        },
                        {
                          type: 'label',
                          label: 'minutes.'
                        }
                      ],
                      field: {
                        type: 'checkbox',
                        id: 'general_settings_rate_limiting_checkbox_3',
                        value: 'yes'
                      },
                      showRevert: true,
                      hiddenExtension: true,
                      maxWidth: 1200,
                    },
                  ]
                }
              ]
            },

            {
              type: 'vertical_group',
              title: 'Account',
              elements: [
                {
                  type: 'group',
                  className: 'group-mt-30',
                  elements: [
                    {
                      type: 'inline_edit_group',
                      className: 'checkbox-field-inline',
                      inline: [
                        {
                          type: 'field',
                          title: 'Registration '
                        },
                        {
                          type: 'label',
                          label: 'After a user has attempted to login'
                        },
                        {
                          type: 'input',
                          id: 'general_settings_registration_value_1'
                        },
                        {
                          type: 'label',
                          label: ' times within'
                        },
                        {
                          type: 'input',
                          id: 'general_settings_registration_value_2'
                        },
                        {
                          type: 'label',
                          label: 'minutes,'
                        },
                        {
                          type: 'label',
                          label: 'disabel the form',
                          isBold: true
                        },
                        {
                          type: 'label',
                          label: 'for'
                        },
                        {
                          type: 'input',
                          id: 'general_settings_registration_value_3'
                        },
                        {
                          type: 'label',
                          label: 'minutes.'
                        }
                      ],
                      field: {
                        type: 'checkbox',
                        id: 'general_settings_rate_limiting_checkbox_4',
                        value: 'yes'
                      },
                      showRevert: true,
                      hiddenExtension: true,
                      maxWidth: 1200,
                    },
                    {
                      type: 'inline_edit_group',
                      className: 'checkbox-field-inline',
                      inline: [
                        {
                          type: 'field',
                          title: 'Forgot Password '
                        },
                        {
                          type: 'label',
                          label: 'After a user has attempted to login'
                        },
                        {
                          type: 'input',
                          id: 'general_settings_forgot_password_value_1'
                        },
                        {
                          type: 'label',
                          label: ' times within'
                        },
                        {
                          type: 'input',
                          id: 'general_settings_forgot_password_value_2'
                        },
                        {
                          type: 'label',
                          label: 'minutes,'
                        },
                        {
                          type: 'label',
                          label: 'disabel the form',
                          isBold: true
                        },
                        {
                          type: 'label',
                          label: 'for'
                        },
                        {
                          type: 'input',
                          id: 'general_settings_forgot_password_value_3'
                        },
                        {
                          type: 'label',
                          label: 'minutes.'
                        }
                      ],
                      field: {
                        type: 'checkbox',
                        id: 'general_settings_rate_limiting_checkbox_5',
                        value: 'yes'
                      },
                      showRevert: true,
                      hiddenExtension: true,
                      maxWidth: 1200,
                    },
                  ]
                }
              ]
            },

            {
              type: 'vertical_group',
              title: 'Logged-in',
              elements: [
                {
                  type: 'group',
                  className: 'group-mt-30',
                  elements: [
                    {
                      type: 'inline_edit_group',
                      className: 'checkbox-field-inline',
                      inline: [
                        {
                          type: 'field',
                          title: 'Ticket '
                        },
                        {
                          type: 'label',
                          label: 'After a user has attempted to login'
                        },
                        {
                          type: 'input',
                          id: 'general_settings_logged_in_ticket_value_1'
                        },
                        {
                          type: 'label',
                          label: ' times within'
                        },
                        {
                          type: 'input',
                          id: 'general_settings_logged_in_ticket_value_2'
                        },
                        {
                          type: 'label',
                          label: 'minutes,'
                        },
                        {
                          type: 'label',
                          label: 'show a CAPCHA to the user.',
                          isBold: true
                        },
                      ],
                      field: {
                        type: 'checkbox',
                        id: 'general_settings_rate_limiting_checkbox_6',
                        value: 'yes'
                      },
                      showRevert: true,
                      hiddenExtension: true,
                      maxWidth: 1200,
                    },
                    {
                      type: 'inline_edit_group',
                      className: 'checkbox-field-inline',
                      inline: [
                        {
                          type: 'field',
                          title: 'Community '
                        },
                        {
                          type: 'label',
                          label: 'After a user has attempted to login'
                        },
                        {
                          type: 'input',
                          id: 'general_settings_logged_in_community_value_1',
                          option: 'string'
                        },
                        {
                          type: 'label',
                          label: ' times within'
                        },
                        {
                          type: 'input',
                          id: 'general_settings_logged_in_community_value_2',
                          option: 'string'
                        },
                        {
                          type: 'label',
                          label: 'minutes,'
                        },
                        {
                          type: 'label',
                          label: 'perform an action.',
                          isBold: true
                        },
                      ],
                      field: {
                        type: 'checkbox',
                        id: 'general_settings_rate_limiting_checkbox_7',
                        value: 'no'
                      },
                      showRevert: true,
                      hiddenExtension: true,
                      maxWidth: 1200,
                    },
                    {
                      type: 'inline_edit_group',
                      className: 'checkbox-field-inline',
                      inline: [
                        {
                          type: 'field',
                          title: 'Comment '
                        },
                        {
                          type: 'label',
                          label: 'After a user has attempted to login'
                        },
                        {
                          type: 'input',
                          id: 'general_settings_logged_in_comment_value_1'
                        },
                        {
                          type: 'label',
                          label: ' times within'
                        },
                        {
                          type: 'input',
                          id: 'general_settings_logged_in_comment_value_2'
                        },
                        {
                          type: 'label',
                          label: 'minutes,'
                        },
                        {
                          type: 'label',
                          label: 'show a CAPCHA to the user.',
                          isBold: true
                        },
                      ],
                      field: {
                        type: 'checkbox',
                        id: 'general_settings_rate_limiting_checkbox_8',
                        value: 'yes'
                      },
                      showRevert: true,
                      hiddenExtension: true,
                      maxWidth: 1200,
                    },
                    {
                      type: 'inline_edit_group',
                      className: 'checkbox-field-inline',
                      inline: [
                        {
                          type: 'field',
                          title: 'Upload Attachment '
                        },
                        {
                          type: 'label',
                          label: 'After a agent has attempted to login'
                        },
                        {
                          type: 'input',
                          id: 'general_settings_logged_in_upload_value_1'
                        },
                        {
                          type: 'label',
                          label: ' times within'
                        },
                        {
                          type: 'input',
                          id: 'general_settings_logged_in_upload_value_2'
                        },
                        {
                          type: 'label',
                          label: 'minutes,'
                        },
                        {
                          type: 'label',
                          label: 'disabel the form',
                          isBold: true
                        },
                        {
                          type: 'label',
                          label: 'for'
                        },
                        {
                          type: 'input',
                          id: 'general_settings_logged_in_upload_value_3'
                        },
                        {
                          type: 'label',
                          label: 'minutes.'
                        }
                      ],
                      field: {
                        type: 'checkbox',
                        id: 'general_settings_rate_limiting_checkbox_9',
                        value: 'yes'
                      },
                      showRevert: true,
                      hiddenExtension: true,
                      maxWidth: 1200,
                    },
                    {
                      type: 'inline_edit_group',
                      className: 'checkbox-field-inline',
                      inline: [
                        {
                          type: 'field',
                          title: 'Share Content '
                        },
                        {
                          type: 'label',
                          label: 'After a user has attempted to login'
                        },
                        {
                          type: 'input',
                          id: 'general_settings_logged_in_share_value_1'
                        },
                        {
                          type: 'label',
                          label: ' times within'
                        },
                        {
                          type: 'input',
                          id: 'general_settings_logged_in_share_value_2'
                        },
                        {
                          type: 'label',
                          label: 'minutes,'
                        },
                        {
                          type: 'label',
                          label: 'show a CAPCHA to the user.',
                          isBold: true
                        },
                      ],
                      field: {
                        type: 'checkbox',
                        id: 'general_settings_rate_limiting_checkbox_10',
                        value: 'yes'
                      },
                      showRevert: true,
                      hiddenExtension: true,
                      maxWidth: 1200,
                    },
                  ]
                }
              ]
            },

            {
              type: 'vertical_group',
              title: 'Guest',
              elements: [
                {
                  type: 'inline_edit_group',
                  className: 'checkbox-field-inline',
                  inline: [
                    {
                      type: 'field',
                      title: 'Ticket '
                    },
                    {
                      type: 'label',
                      label: 'After a user has attempted to login'
                    },
                    {
                      type: 'input',
                      id: 'general_settings_guest_ticket_value_1'
                    },
                    {
                      type: 'label',
                      label: ' times within'
                    },
                    {
                      type: 'input',
                      id: 'general_settings_guest_ticket_value_2'
                    },
                    {
                      type: 'label',
                      label: 'minutes,'
                    },
                    {
                      type: 'label',
                      label: 'show a CAPCHA to the user.',
                      isBold: true
                    },
                  ],
                  field: {
                    type: 'checkbox',
                    id: 'general_settings_rate_limiting_checkbox_11',
                    value: 'yes'
                  },
                  showRevert: true,
                  hiddenExtension: true,
                  maxWidth: 1200,
                },
                {
                  type: 'inline_edit_group',
                  className: 'checkbox-field-inline',
                  inline: [
                    {
                      type: 'field',
                      title: 'Community '
                    },
                    {
                      type: 'label',
                      label: 'After a user has attempted to login'
                    },
                    {
                      type: 'input',
                      id: 'general_settings_guest_community_value_1'
                    },
                    {
                      type: 'label',
                      label: ' times within'
                    },
                    {
                      type: 'input',
                      id: 'general_settings_guest_community_value_2'
                    },
                    {
                      type: 'label',
                      label: 'minutes,'
                    },
                    {
                      type: 'label',
                      label: 'show a CAPCHA to the user.',
                      isBold: true
                    },
                  ],
                  field: {
                    type: 'checkbox',
                    id: 'general_settings_rate_limiting_checkbox_12',
                    value: 'yes'
                  },
                  showRevert: true,
                  hiddenExtension: true,
                  maxWidth: 1200,
                },
                {
                  type: 'inline_edit_group',
                  className: 'checkbox-field-inline',
                  inline: [
                    {
                      type: 'field',
                      title: 'Comment '
                    },
                    {
                      type: 'label',
                      label: 'After a user has attempted to login'
                    },
                    {
                      type: 'input',
                      id: 'general_settings_guest_comment_value_1'
                    },
                    {
                      type: 'label',
                      label: ' times within'
                    },
                    {
                      type: 'input',
                      id: 'general_settings_guest_comment_value_2'
                    },
                    {
                      type: 'label',
                      label: 'minutes,'
                    },
                    {
                      type: 'label',
                      label: 'show a CAPCHA to the user.',
                      isBold: true
                    },
                  ],
                  field: {
                    type: 'checkbox',
                    id: 'general_settings_rate_limiting_checkbox_13',
                    value: 'yes'
                  },
                  showRevert: true,
                  hiddenExtension: true,
                  maxWidth: 1200,
                },
                {
                  type: 'inline_edit_group',
                  className: 'checkbox-field-inline',
                  inline: [
                    {
                      type: 'field',
                      title: 'Upload Attachment '
                    },
                    {
                      type: 'label',
                      label: 'After a agent has attempted to login'
                    },
                    {
                      type: 'input',
                      id: 'general_settings_guest_upload_value_1'
                    },
                    {
                      type: 'label',
                      label: ' times within'
                    },
                    {
                      type: 'input',
                      id: 'general_settings_guest_upload_value_2'
                    },
                    {
                      type: 'label',
                      label: 'minutes,'
                    },
                    {
                      type: 'label',
                      label: 'disabel the form',
                      isBold: true
                    },
                    {
                      type: 'label',
                      label: 'for'
                    },
                    {
                      type: 'input',
                      id: 'general_settings_guest_upload_value_3'
                    },
                    {
                      type: 'label',
                      label: 'minutes.'
                    }
                  ],
                  field: {
                    type: 'checkbox',
                    id: 'general_settings_rate_limiting_checkbox_14',
                    value: 'yes'
                  },
                  showRevert: true,
                  hiddenExtension: true,
                  maxWidth: 1200,
                },
                {
                  type: 'inline_edit_group',
                  className: 'checkbox-field-inline',
                  inline: [
                    {
                      type: 'field',
                      title: 'Share Content '
                    },
                    {
                      type: 'label',
                      label: 'After a user has attempted to login'
                    },
                    {
                      type: 'input',
                      id: 'general_settings_guest_share_value_1'
                    },
                    {
                      type: 'label',
                      label: ' times within'
                    },
                    {
                      type: 'input',
                      id: 'general_settings_guest_share_value_2'
                    },
                    {
                      type: 'label',
                      label: 'minutes,'
                    },
                    {
                      type: 'label',
                      label: 'show a CAPCHA to the user.',
                      isBold: true
                    },
                  ],
                  field: {
                    type: 'checkbox',
                    id: 'general_settings_rate_limiting_checkbox_15',
                    value: 'yes'
                  },
                  hiddenExtension: true,
                  showRevert: true,
                  maxWidth: 1200,
                },
              ]
            }
          ]
        },
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
  display_custom_logo_enabled: true,
  agent_keyboard_shortcuts_enabled: true,
  forwards_out_of_helpdesk_enabled: true,
  helpdesk_settings_checkbox: ['admin'],
  general_settings_rate_limiting_checkbox_1: ['yes'],
  general_settings_rate_limiting_checkbox_2: ['yes'],
  general_settings_rate_limiting_checkbox_3: ['yes'],
  general_settings_rate_limiting_checkbox_4: ['yes'],
  general_settings_rate_limiting_checkbox_5: ['yes'],
  general_settings_rate_limiting_checkbox_6: ['yes'],
  general_settings_rate_limiting_checkbox_7: ['yes'],
  general_settings_rate_limiting_checkbox_8: ['yes'],
  general_settings_rate_limiting_checkbox_9: ['yes'],
  general_settings_rate_limiting_checkbox_10: ['yes'],
  general_settings_rate_limiting_checkbox_11: ['yes'],
  general_settings_rate_limiting_checkbox_12: ['yes'],
  general_settings_rate_limiting_checkbox_13: ['yes'],
  general_settings_rate_limiting_checkbox_14: ['yes'],
  general_settings_rate_limiting_checkbox_15: ['yes'],
  general_settings_login_form_value_1: 3,
  general_settings_login_form_value_2: 60,
  general_settings_user_accounts_value_1: 6,
  general_settings_user_accounts_value_2: 15,
  general_settings_user_accounts_value_3: 15,
  general_settings_agent_accounts_value_1: 5,
  general_settings_agent_accounts_value_2: 15,
  general_settings_agent_accounts_value_3: 15,
  general_settings_registration_value_1: 6,
  general_settings_registration_value_2: 15,
  general_settings_registration_value_3: 15,
  general_settings_forgot_password_value_1: 6,
  general_settings_forgot_password_value_2: 15,
  general_settings_forgot_password_value_3: 15,
  general_settings_logged_in_ticket_value_1: 3,
  general_settings_logged_in_ticket_value_2: 15,
  general_settings_logged_in_community_value_1: 'x',
  general_settings_logged_in_community_value_2: 'y',
  general_settings_logged_in_comment_value_1: 3,
  general_settings_logged_in_comment_value_2: 15,
  general_settings_logged_in_upload_value_1: 5,
  general_settings_logged_in_upload_value_2: 15,
  general_settings_logged_in_upload_value_3: 15,
  general_settings_logged_in_share_value_1: 3,
  general_settings_logged_in_share_value_2: 15,
  general_settings_guest_ticket_value_1: 3,
  general_settings_guest_ticket_value_2: 15,
  general_settings_guest_community_value_1: 3,
  general_settings_guest_community_value_2: 15,
  general_settings_guest_comment_value_1: 3,
  general_settings_guest_comment_value_2: 15,
  general_settings_guest_upload_value_1: 5,
  general_settings_guest_upload_value_2: 15,
  general_settings_guest_upload_value_3: 15,
  general_settings_guest_share_value_1: 3,
  general_settings_guest_share_value_2: 15,
  // general_settings_rate_limiting_value_3: '3',
  // general_settings_rate_limiting_value_5: '5',
  // general_settings_rate_limiting_value_6: '6',
  // general_settings_rate_limiting_value_15: '15',
  // general_settings_rate_limiting_value_60: '60',
  // general_settings_rate_limiting_value_x: 'x',
  // general_settings_rate_limiting_value_y: 'y',
  // general_settings_rate_limiting_upload_value_5: '5',
  // general_settings_rate_limiting_upload_value_15: '15',
  // general_settings_rate_limiting_value_capcha: 'show a CAPCHA to the user.',
  // general_settings_rate_limiting_value_action: 'perform an action.',
  // general_settings_rate_limiting_value_disabel: 'disabel the form',
  // general_settings_rate_limiting_guest_checkbox_1: ['yes'],
  custom_policy_minimum_password_value: 8,
  custom_policy_minimum_password_value_default: 8,
  agent_auth_sso_remember_device_field: 6,
  general_settings_date_and_time_enabled: true,
  general_settings_rate_limiting_enabel: true,
  general_settings_helpdesk_settings_enabled: true,
  general_settings_date_and_time_input_2: 'D,jS M Y g:ia',
  general_settings_date_and_time_input_3: 'D,jS M Y',
  general_settings_date_and_time_input_4: 'M j Y',
  general_settings_date_and_time_input_5: 'M j',
  general_settings_date_and_time_input_6: 'g: i a',
  default_timezone_select_1: { value: 'UTC', label: 'UTC' },
  file_upload_unit_value_1: '10.00',
  file_upload_unit_option_1: 'MB',
  file_upload_unit_value_2: '25.00',
  file_upload_unit_option_2: 'MB',
  general_settings_file_uploads_select_1: { value: 'Allow all files', label: 'Allow all files' },
  general_settings_file_uploads_select_2: { value: 'Only allow specific file extensions', label: 'Only allow specific file extensions' },
  brand1_helpdes_setting_agent_message: 'Our helpdesk is temorary offline for maintenance. We will be back up in about 10 minutes',
  brand1_helpdes_setting_user_message: 'Our helpdesk is temorary offline for maintenance. We will be back up in about 10 minutes',
  brand2_helpdes_setting_agent_message: 'Our helpdesk is temorary offline for maintenance. We will be back up in about 10 minutes',
  brand2_helpdes_setting_user_message: 'Our helpdesk is temorary offline for maintenance. We will be back up in about 10 minutes',
  brand3_helpdes_setting_agent_message: 'Our helpdesk is temorary offline for maintenance. We will be back up in about 10 minutes',
  brand3_helpdes_setting_user_message: 'Our helpdesk is temorary offline for maintenance. We will be back up in about 10 minutes',
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
  general_settings_file_uploads_reopen_permissions: [
    '.txt',
    '.png',
    '.docx',
    '.jpeg',
  ],
  general_settings_rate_limiting_reopen_permissions: [
    '217.138.85.2112',
    '267.138.85.450',
    '647.138.85.211',
    '345.138.85.2134',
  ],
  brand1_default_email_account: 'support@brand1.deskpro.com',
  brand2_default_email_account: 'support@brand2.deskpro.com',
  brand3_default_email_account: 'support@brand3.deskpro.com',
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

export const vaildationSchema = {
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
    brand1_helpdes_setting_agent_message: {
      type: 'string'
    },
    brand1_helpdes_setting_user_message: {
      type: 'string'
    },
    brand2_default_email_account: {
      type: 'string',
      format: 'email'
    },
    brand2_helpdes_setting_agent_message: {
      type: 'string'
    },
    brand2_helpdes_setting_user_message: {
      type: 'string'
    },
    brand3_default_email_account: {
      type: 'string',
      format: 'email'
    },
    brand3_helpdes_setting_agent_message: {
      type: 'string'
    },
    brand3_helpdes_setting_user_message: {
      type: 'string'
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
