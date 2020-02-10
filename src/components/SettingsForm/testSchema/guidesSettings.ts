import { API_SettingsUiElement } from '../../../codegen/types';

export const uiSchema: {
  elements: API_SettingsUiElement & { type: string }[];
} = {
  elements: [
    {
      title: 'Guides Settings',
      type: 'feature_section',
      brandButtonGroup: true,
      elements: [
        {
          type: 'page_section',
          className: 'guides-settings',
          elements: [
            {
              type: 'settings-data',
              options: {
                id: 'help_center_guides_settings',
                type: 'settings-data',
                title: 'Guides',
                illustration: 'book',
                description:
                  'Enable the Guides section of your Help Center so users can access it. Users will be able to view and subscribe to Guides.'
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
              title: 'Guides tab in the short cut',
              showOn: 'help_center_guides_settings_homepage',
              description: `
Show the Guides Tab in the Help Center short bar. If disabled the Guides Section will still be active, but you will need to create your own link to the Guides URL.

Use the [Help center editor](http://www.test.com) to re-order items in the tab bar.
`,
              field: {
                type: 'toggle',
                id: 'help_center_guides_settings_homepage'
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
              title: 'Topics and guides',
              showOn: 'help_center_guides_settings_subscriptions',
              description: 'Allow users to subscribe to Topics and Guides.',
              field: {
                type: 'toggle',
                id: 'help_center_guides_settings_subscriptions'
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
                    type: 'stringlist',
                    id: 'help_center_guides_settings_user_access',
                    title: 'Usergroups',
                    addTitle: 'Add Usergroup',
                    max: 8
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
  brand1_help_center_guides_settings: true,
  brand1_help_center_guides_settings_homepage: true,
  brand1_help_center_guides_settings_subscriptions: true,
  brand1_help_center_guides_settings_permissions: true,
  brand1_help_center_guides_settings_user_access: ['Extra Privileged', 'General Users', 'Registered', 'VIP'],

  brand2_help_center_guides_settings: true,
  brand2_help_center_guides_settings_homepage: true,
  brand2_help_center_guides_settings_subscriptions: true,
  brand2_help_center_guides_settings_permissions: true,
  brand2_help_center_guides_settings_user_access: ['Extra Privileged', 'General Users', 'Registered', 'VIP'],

  brand3_help_center_guides_settings: true,
  brand3_help_center_guides_settings_homepage: true,
  brand3_help_center_guides_settings_subscriptions: true,
  brand3_help_center_guides_settings_permissions: true,
  brand3_help_center_guides_settings_user_access: ['Extra Privileged', 'General Users', 'Registered', 'VIP'],

  brand4_help_center_guides_settings: true,
  brand4_help_center_guides_settings_homepage: true,
  brand4_help_center_guides_settings_subscriptions: true,
  brand4_help_center_guides_settings_permissions: true,
  brand4_help_center_guides_settings_user_access: ['Extra Privileged', 'General Users', 'Registered', 'VIP'],

  brand5_help_center_guides_settings: true,
  brand5_help_center_guides_settings_homepage: true,
  brand5_help_center_guides_settings_subscriptions: true,
  brand5_help_center_guides_settings_permissions: true,
  brand5_help_center_guides_settings_user_access: ['Extra Privileged', 'General Users', 'Registered', 'VIP'],
};
