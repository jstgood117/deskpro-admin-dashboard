import { API_SettingsUiElement } from '../../../codegen/types';

export const uiSchema: {
  elements: API_SettingsUiElement & { type: string }[];
} = {
  elements: [
    {
      title: 'Data Center',
      type: 'feature_section',
      elements: [
        {
          title: 'Helpdesk Updater',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              title: 'Schedule Update',
              description:
                'You can manually schedule the updater below. The system will check for an update and automatically install it if there is one available.',
              info: [
                {
                  type: 'button',
                  title: 'Automatic updater',
                  url: 'http://www.test.com',
                  icon: 'guide',
                },
              ],
              elements: [
                {
                  type: 'group',
                  elements: [
                    {
                      type: 'field',
                      field: {
                        type: 'checkbox',
                        id: 'data_center_schedule_checkbox',
                        value: 'admin',
                      },
                    },
                    {
                      type: 'horizontal_group',
                      elements: [
                        {
                          type: 'label',
                          label:
                            'I want to manually schedule the updater to run in',
                        },
                        {
                          type: 'field',
                          field: {
                            type: 'select',
                            id: 'data_center_schedule_select',
                            options: [
                              { value: '1 minute', label: '1 minute' },
                              { value: '2 minutes', label: '2 minutes' },
                              { value: '3 minutes', label: '3 minutes' },
                            ],
                            placeholder: '',
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'field',
                  field: {
                    type: 'button',
                    id: 'data_center_schedule_button',
                    icon: 'calendar',
                    text: 'Schedule an update',
                  },
                },
              ],
            },
            {
              type: 'vertical_group',
              title: 'Update from the command line',
              description:
                'You can always run the updater yourself from the command-line by issuing the following command:',
              elements: [
                {
                  type: 'code',
                  code:
                    '/user/bin/php7.0/usr/share/nginx/deskpro/site41500/bin/console dp:update',
                  description:
                    'Running this line will start the updater. It will check for updates and prompt you to install them if any are available.',
                },
              ],
            },
          ],
        },
        {
          title: 'Mass update ticket language',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              title: '',
              description: '',
              elements: [
                {
                  type: 'group',
                  elements: [
                    {
                      type: 'horizontal_group',
                      info: [
                        {
                          type: 'button',
                          title: 'Languages & Locales',
                          url: 'http://www.test.com',
                          icon: 'link',
                        },
                      ],
                      elements: [
                        {
                          type: 'label',
                          label: 'For all',
                        },
                        {
                          type: 'field',
                          field: {
                            type: 'select',
                            id: 'data_center_ticket_language_select_1',
                            options: [
                              { value: 'English', label: 'English' },
                              { value: 'Russian', label: 'Russian' },
                            ],
                            placeholder: 'select language',
                          },
                        },
                        {
                          type: 'label',
                          label: 'tickets update to',
                        },
                        {
                          type: 'field',
                          field: {
                            type: 'select',
                            id: 'data_center_ticket_language_select_2',
                            options: [
                              { value: 'English', label: 'English' },
                              { value: 'Russian', label: 'Russian' },
                            ],
                            placeholder: 'select language',
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'field',
                  field: {
                    type: 'button',
                    id: 'data_center_ticket_language_button',
                    icon: 'menu',
                    text: 'Mass-update tickets',
                  },
                },
              ],
            },
          ],
        },
        {
          title: 'Mass update user language choice',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              title: '',
              description: '',
              elements: [
                {
                  type: 'group',
                  elements: [
                    {
                      type: 'horizontal_group',
                      elements: [
                        {
                          type: 'label',
                          label: 'For all',
                        },
                        {
                          type: 'field',
                          field: {
                            type: 'select',
                            id: 'data_center_user_language_select_1',
                            options: [
                              { value: 'English', label: 'English' },
                              { value: 'Russian', label: 'Russian' },
                            ],
                            placeholder: 'select language',
                          },
                        },
                        {
                          type: 'label',
                          label: 'user update to',
                        },
                        {
                          type: 'field',
                          field: {
                            type: 'select',
                            id: 'data_center_user_language_select_2',
                            options: [
                              { value: 'English', label: 'English' },
                              { value: 'Russian', label: 'Russian' },
                            ],
                            placeholder: 'select language',
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'field',
                  field: {
                    type: 'button',
                    id: 'data_center_user_language_button',
                    icon: 'menu',
                    text: 'Mass-update users',
                  },
                },
              ],
            },
          ],
        },
        {
          title: 'Download latest language',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              title: '',
              description: '',
              elements: [
                {
                  type: 'group',
                  elements: [
                    {
                      type: 'horizontal_group',
                      elements: [
                        {
                          type: 'label',
                          label: 'Download the latest language pack for',
                        },
                        {
                          type: 'field',
                          field: {
                            type: 'select',
                            id: 'data_center_download_language_select_1',
                            options: [
                              { value: 'English', label: 'English' },
                              { value: 'Russian', label: 'Russian' },
                              {
                                value: 'all languages',
                                label: 'all languages',
                              },
                            ],
                            placeholder: 'select language',
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'field',
                  field: {
                    type: 'button',
                    id: 'data_center_download_language_button',
                    icon: 'export',
                    text: 'Download latest language',
                  },
                },
              ],
            },
          ],
        },
        {
          title: 'Reset language phrases',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              title: '',
              description: '',
              elements: [
                {
                  type: 'group',
                  elements: [
                    {
                      type: 'horizontal_group',
                      elements: [
                        {
                          type: 'label',
                          label:
                            'Reset all altered phrases to the default version for',
                        },
                        {
                          type: 'field',
                          field: {
                            type: 'select',
                            id: 'data_center_reset_language_select_1',
                            options: [
                              { value: 'English', label: 'English' },
                              { value: 'Russian', label: 'Russian' },
                              {
                                value: 'all languages',
                                label: 'all languages',
                              },
                            ],
                            placeholder: 'select language',
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'field',
                  field: {
                    type: 'button',
                    id: 'data_center_download_language_button',
                    icon: 'refresh',
                    text: 'Reset phrases',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const jsonSchema: any = {
  data_center_schedule_checkbox: ['admin1'],
  data_center_schedule_select: { value: '1 minute', label: '1 minute' },
  data_center_download_language_select_1: {
    value: 'all languages',
    label: 'all languages',
  },
  data_center_reset_language_select_1: {
    value: 'all languages',
    label: 'all languages',
  },
};
