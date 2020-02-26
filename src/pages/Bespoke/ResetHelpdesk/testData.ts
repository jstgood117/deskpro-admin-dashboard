import { API_SettingsUiElement } from '../../../codegen/types';

export const uiSchema: {
  elements: API_SettingsUiElement & { type: string }[];
} = {
  elements: [
    {
      title: 'Reset Helpdesk',
      type: 'feature_section',
      className: 'helpdesk',
      elements: [
        {
          title: 'Deskpro Helpdesk Reset',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              description:
                'Use these functions to remove test data from your helpdesk. All data you select will be permanently deleted. This function is only available for new helpdesks that are less than 90 days old.',
              elements: [
                {
                  type: 'alert',
                  description:
                    'For security reasons, this feature is disabled 90 days after your account was created. Your last chance to reset the database will be YYYY-MM-DD.'
                },
                {
                  type: 'field',
                  title: 'Purge users',
                  description: 'Delete all users in the helpdesk.',
                  field: {
                    type: 'checkbox',
                    id: 'helpdesk_checkbox_1',
                    value: '1'
                  }
                },
                {
                  type: 'field',
                  title: 'Purge agents',
                  description:
                    'Delete all agents in the helpdesk (except you).',
                  field: {
                    type: 'checkbox',
                    id: 'helpdesk_checkbox_2',
                    value: '2'
                  }
                },
                {
                  type: 'field',
                  title: 'Purge tickets',
                  description: 'Delete all tickets in the helpdesk.',
                  field: {
                    type: 'checkbox',
                    id: 'helpdesk_checkbox_3',
                    value: '3'
                  }
                },
                {
                  type: 'field',
                  title: 'Purge organizations',
                  description: 'Delete all organizations in the helpdesk.',
                  field: {
                    type: 'checkbox',
                    id: 'helpdesk_checkbox_4',
                    value: '4'
                  }
                },
                {
                  type: 'field',
                  title: 'Reset triggers',
                  description:
                    'Reset triggers back to default state, and delete all custom triggers.',
                  field: {
                    type: 'checkbox',
                    id: 'helpdesk_checkbox_5',
                    value: '5'
                  }
                },
                {
                  type: 'field',
                  title: 'Reset filters',
                  description: 'Delete all custom filters.',
                  field: {
                    type: 'checkbox',
                    id: 'helpdesk_checkbox_6',
                    value: '6'
                  }
                },
                {
                  type: 'field',
                  title: 'Reset help center and email templates',
                  description:
                    'Undo any customization of help center and email templates.',
                  field: {
                    type: 'checkbox',
                    id: 'helpdesk_checkbox_7',
                    value: '7'
                  }
                },
                {
                  type: 'field',
                  title: 'Purge escalations and SLAs',
                  description: 'Delete all escalations and SLAs.',
                  field: {
                    type: 'checkbox',
                    id: 'helpdesk_checkbox_8',
                    value: '8'
                  }
                },
                {
                  type: 'field',
                  title: 'Reset fields',
                  description:
                    'Delete all custom ticket, user, organization and chat fields. Delete values for categories, priorities, workflows and products and disable these fields.',
                  field: {
                    type: 'checkbox',
                    id: 'helpdesk_checkbox_9',
                    value: '9'
                  }
                },
                {
                  type: 'field',
                  title: 'Reset departments',
                  description:
                    'Delete all custom departments and reset back to default (Support and Sales departments only).',
                  field: {
                    type: 'checkbox',
                    id: 'helpdesk_checkbox_10',
                    value: '10'
                  }
                },
                {
                  type: 'field',
                  title: 'Purge knowledgebase',
                  description: 'Delete all Knowledgebase articles.',
                  field: {
                    type: 'checkbox',
                    id: 'helpdesk_checkbox_11',
                    value: '11'
                  }
                },
                {
                  type: 'field',
                  title: 'Purge news',
                  description: 'Delete all News posts.',
                  field: {
                    type: 'checkbox',
                    id: 'helpdesk_checkbox_12',
                    value: '12'
                  }
                },
                {
                  type: 'field',
                  title: 'Purge downloads',
                  description: 'Delete all Downloads files.',
                  field: {
                    type: 'checkbox',
                    id: 'helpdesk_checkbox_13',
                    value: '13'
                  }
                },
                {
                  type: 'field',
                  title: 'Purge community topics',
                  description: 'Delete all Community Topics.',
                  field: {
                    type: 'checkbox',
                    id: 'helpdesk_checkbox_14',
                    value: '14'
                  }
                },
                {
                  type: 'field',
                  title: 'Purge labels',
                  description: 'Delete all labels throughout helpdesk.',
                  field: {
                    type: 'checkbox',
                    id: 'helpdesk_checkbox_15',
                    value: '15'
                  }
                },
                {
                  type: 'field',
                  title: 'Purge snippets and macros',
                  description: 'Delete all snippets and macros.',
                  field: {
                    type: 'checkbox',
                    id: 'helpdesk_checkbox_16',
                    value: '16'
                  }
                },
                {
                  type: 'field',
                  title: 'Reset apps',
                  description:
                    'Uninstall every Deskpro app (including Gravatar).',
                  field: {
                    type: 'checkbox',
                    id: 'helpdesk_checkbox_17',
                    value: '17'
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
  helpdesk_checkbox_1: [],
  helpdesk_checkbox_2: [],
  helpdesk_checkbox_3: [],
  helpdesk_checkbox_4: [],
  helpdesk_checkbox_5: [],
  helpdesk_checkbox_6: [],
  helpdesk_checkbox_7: [],
  helpdesk_checkbox_8: [],
  helpdesk_checkbox_9: [],
  helpdesk_checkbox_10: [],
  helpdesk_checkbox_11: [],
  helpdesk_checkbox_12: [],
  helpdesk_checkbox_13: [],
  helpdesk_checkbox_14: [],
  helpdesk_checkbox_15: [],
  helpdesk_checkbox_16: [],
  helpdesk_checkbox_17: []
};

export const vaildationSchema = {
  type: 'object',
  properties: {
    helpdesk_checkbox_17: {
      type: 'array',
      required: true
    }
  }
};

export const validationConfig = {
  errMessages: {
    helpdesk_checkbox_17: {
      required: 'validation.required'
    }
  }
};
