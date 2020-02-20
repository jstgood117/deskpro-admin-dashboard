import { API_SettingsUiElement } from '../../../codegen/types';

export const uiSchema: {
  elements: API_SettingsUiElement & { type: string }[];
} = {
  elements: [
    {
      title: 'Downloads Settings',
      type: 'feature_section',
      brandButtonGroup: true,
      elements: [
        {
          type: 'page_section',
          className: 'download-settings',
          elements: [
            {
              type: 'settings-data',
              options: {
                id: 'help_center_download_settings',
                type: 'settings-data',
                title: 'Downloads',
                illustration: 'book',
                description:
                  'Enable the Downloads section of your Help Center so users can access it. Users will be able to download and subscribe to documents.'
              }
            }
          ]
        },
        {
          title: 'Homepage Short Cut Bar',
          type: 'page_section',
          className: 'homepage-short-cut-bar',
          elements: [
            {
              type: 'vertical_group',
              title: 'Downloads tab in the short cut bar',
              showOn: 'help_center_download_settings_homepage',
              description: `
When disabled, the Community Tab will not be visible in the short bar but the Community Section will still be active. (e.g. you could create your own link to the community URL).

Use the [Help center editor](http://www.test.com) to re-order items in the tab bar.
`,
              field: {
                type: 'toggle',
                id: 'help_center_download_settings_homepage'
              },
              info: [
                {
                  type: 'button',
                  title: 'Customizing help center content',
                  url: 'http://www.test.com',
                  icon: 'ic-save'
                }
              ],
              elements: []
            }
          ]
        },
        {
          title: 'Subscriptions',
          type: 'page_section',
          className: 'subscriptions',
          elements: [
            {
              type: 'vertical_group',
              title: 'Download',
              showOn: 'help_center_download_settings_subscriptions',
              description:
                'Allow users to subscribe to Downloads and categories.',
              field: {
                type: 'toggle',
                id: 'help_center_download_settings_subscriptions'
              },
              elements: []
            }
          ]
        },
        {
          title: 'Permissions',
          type: 'page_section',
          className: 'permissions',
          elements: [
            {
              type: 'vertical_group',
              title: 'Download permission check',
              showOn: 'help_center_download_settings_permissions',
              description: `Download attachments will only be visible user who belong to usergroups with download privileges. Even if the user has the full coded URL to a file, the system will check permissions and ask the user to accept EULA if necessary. Doesn't work with \`Amazon S3\` storage yet.`,
              field: {
                type: 'toggle',
                id: 'help_center_download_settings_permissions'
              },
              elements: []
            }
          ]
        },
        {
          title: 'User Access',
          type: 'page_section',
          className: 'user-access',
          elements: [
            {
              type: 'vertical_group',
              description:
                'These are the Usergroups that have access to Downloads.',
              elements: [
                {
                  type: 'field',
                  field: {
                    type: 'userGroups',
                    id: 'help_center_download_settings_user_access',
                    title: 'Usergroups',
                    buttonTitle: 'Add Usergroup',
                    tooltip: 'All usergroups have been added.',
                    options: [
                      'Extra Privileged',
                      'General Users',
                      'Internal Teams',
                      'Privileged',
                      'Registered',
                      'Recruiters',
                      'VIP',
                      'VVIP'
                    ]
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
  brand1_help_center_download_settings: true,
  brand1_help_center_download_settings_homepage: true,
  brand1_help_center_download_settings_subscriptions: true,
  brand1_help_center_download_settings_permissions: true,
  brand1_help_center_download_settings_user_access: [
    'Extra Privileged',
    'General Users',
    'Registered',
    'VIP'
  ],

  brand2_help_center_download_settings: true,
  brand2_help_center_download_settings_homepage: true,
  brand2_help_center_download_settings_subscriptions: true,
  brand2_help_center_download_settings_permissions: true,
  brand2_help_center_download_settings_user_access: [
    'Extra Privileged',
    'General Users',
    'Registered',
    'VIP'
  ],

  brand3_help_center_download_settings: true,
  brand3_help_center_download_settings_homepage: true,
  brand3_help_center_download_settings_subscriptions: true,
  brand3_help_center_download_settings_permissions: true,
  brand3_help_center_download_settings_user_access: [
    'Extra Privileged',
    'General Users',
    'Registered',
    'VIP'
  ],

  brand4_help_center_download_settings: true,
  brand4_help_center_download_settings_homepage: true,
  brand4_help_center_download_settings_subscriptions: true,
  brand4_help_center_download_settings_permissions: true,
  brand4_help_center_download_settings_user_access: [
    'Extra Privileged',
    'General Users',
    'Registered',
    'VIP'
  ],

  brand5_help_center_download_settings: true,
  brand5_help_center_download_settings_homepage: true,
  brand5_help_center_download_settings_subscriptions: true,
  brand5_help_center_download_settings_permissions: true,
  brand5_help_center_download_settings_user_access: [
    'Extra Privileged',
    'General Users',
    'Registered',
    'VIP'
  ]
};
