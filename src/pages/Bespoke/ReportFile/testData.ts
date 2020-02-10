import { API_SettingsUiElement } from '../../../codegen/types';

export const uiSchema: {
  elements: API_SettingsUiElement & { type: string }[];
} = {
  elements: [
    {
      title: 'Report File',
      type: 'feature_section',
      elements: [
        {
          title: 'Deskpro Report File',
          type: 'page_section',
          className: 'method',
          elements: [
            {
              type: 'vertical_group',
              className: 'method',
              description:
                'If you are having problems with helpdesk, a Deskpro support agent may ask to generate and submit this Report File.',
              elements: [
                {
                  type: 'field',
                  description:
                    'Your Report File includes information about your server like PHP and MySQL configuration, and information about your helpdesk like settings and error logs.This information is useful in diagnosing problems.'
                },
                {
                  type: 'group',
                  className: 'group-deskpro',
                  elements: [
                    {
                      type: 'group',
                      className: 'deskpro-file-check',
                      elements: [
                        {
                          type: 'field',
                          field: {
                            type: 'checkbox',
                            id: 'realtime_events_method_deskpro_file_check',
                            value: 'yes'
                          }
                        },
                        {
                          type: 'horizontal_group',
                          elements: [
                            {
                              type: 'label',
                              label: 'Include results from a File check as well'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: 'button',
                      styleType: 'secondary',
                      size: 'small',
                      className: 'generate-report-file',
                      icon: 'export',
                      text: 'Generate Report File'
                    }
                  ]
                }
              ]
              // elements: [
              //   {
              //     type: 'field',
              //     description:
              //       'Your Report File includes information about your server like PHP and MySQL configuration, and information about your helpdesk like settings and error logs.This information is useful in diagnosing problems.'
              //   },
              //   {
              //     type: 'group',
              //     elements: [
              //       {
              //         type: 'field',
              //         field: {
              //           type: 'checkbox',
              //           id: 'test_unit_checkbox_2',
              //           value: 'yes'
              //         }
              //       },
              //       {
              //         type: 'horizontal_group',
              //         elements: [
              //           {
              //             type: 'label',
              //             label: 'Testing this out'
              //           }
              //         ]
              //       }
              //     ]
              //   }
              // ]
            }
          ]
        }
      ]
    }
  ]
};

export const jsonSchema: any = {
  realtime_events_method_deskpro_file_check: ['yes']
};
