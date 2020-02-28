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
              showOn: 'agent_report_enabled',
              elements: [
                {
                  type: 'field',
                  description:
                    'If you are having problems with helpdesk, a Deskpro support agent may ask to generate and submit this Report File.'
                },
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
                            id: 'agent_report_file_check',
                            value: 'yes'
                          }
                        },
                        {
                          type: 'horizontal_group',
                          elements: [
                            {
                              type: 'label',
                              label:
                                'Include results from a File integrity check as well'
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
                      text: 'Generate Report File',
                      state: 'agent_report_enabled'
                    }
                  ]
                }
              ]
            },
            {
              type: 'vertical_group',
              className: 'method',
              showOn: 'agent_report_enabled',
              showRevert: true,
              elements: [
                {
                  type: 'group',
                  className: 'group-deskpro',
                  dependenceOn: {
                    field: 'agent_report_progress',
                    value: 100,
                    showRevert: true
                  },
                  elements: [
                    {
                      type: 'field',
                      field: {
                        type: 'progress',
                        id: 'agent',
                        label: 'Checking files: 6 of 113 checks performed',
                        value: 'agent_report_progress'
                      }
                    }
                  ]
                },
                {
                  type: 'group',
                  className: 'report-panel',
                  dependenceOn: {
                    field: 'agent_report_progress',
                    value: 100
                  },
                  elements: [
                    {
                      type: 'field',
                      field: {
                        type: 'reportFilePanel'
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

export const jsonSchema: any = {
  agent_report_enabled: true,
  agent_report_progress: 90,
  agent_report_file_check: ['yes']
};
export const vaildationSchema = {
  type: 'object',
  properties: {}
};

export const validationConfig = {
  errMessages: {}
};
