import { API_SettingsUiElement } from '../../../codegen/types';

export const uiSchema: {
  elements: API_SettingsUiElement & { type: string }[];
} = {
  elements: [
    {
      title: 'Voice General Settings',
      type: 'feature_section',
      elements: [
        {
          title: 'Missed Calls',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              title: 'Group missed calls and voicemails in the same ticket',
              showOn: 'missed_calls_enabled',
              description: '',
              field: {
                type: 'toggle',
                id: 'missed_calls_enabled'
              },
              info: [
                {
                  type: 'button',
                  title: 'Voice general settings',
                  url: 'http://www.test.com',
                  icon: 'guide'
                }
              ],
              elements: []
            },
            {
              type: 'vertical_group',
              featureBilling: {
                title: 'Transcribe voicemail messages.',
                description:
                  'If a user leaves a voicemail it will be transcribed. This text version of the voicemail message will be added to the ticket along with the voicemail audio.',
                showOn: 'voicemail_messages_enabled',
                tooltip: 'Transcribe voicemail messages.'
              },
              field: {
                type: 'toggle',
                id: 'voicemail_messages_enabled'
              },
              elements: [
                {
                  type: 'vertical_group',
                  title:
                    'Attach the transcript to the agent notification email',
                  description:
                    'A text version of the voicemail message will be added to the agent notification email.',
                  showOn: 'voice_settings_checkbox_1',
                  field: {
                    type: 'checkbox',
                    id: 'voice_settings_checkbox_1',
                    value: 'admin1'
                  },
                  elements: []
                }
              ]
            },
            {
              type: 'vertical_group',
              title: 'Attach the transcript to the agent notification email',
              showOn: 'voice_settings_checkbox_2',
              field: {
                type: 'checkbox',
                id: 'voice_settings_checkbox_2',
                value: 'admin'
              },
              elements: []
            }
          ]
        },
        {
          title: 'Forward',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              featureBilling: {
                title: 'Forwarding Machine Detection',
                showOn: 'forwarding_machine_detection_enabled',
                description:
                  'When enabled if a customer call is forwarded & is answered by the agent’s voicemail. Then the call will re-routed to the new available agent in the queue automatically.'
              },
              field: {
                type: 'toggle',
                id: 'forwarding_machine_detection_enabled'
              },
              elements: []
            },
            {
              type: 'vertical_group',
              title: 'Number to call from when forward calls to agents',
              elements: [
                {
                  type: 'field',
                  field: {
                    type: 'select',
                    id: 'number_to_call_select_1',
                    options: [
                      {
                        value: 'The number the user called',
                        label: 'The number the user called'
                      },
                      {
                        value: 'The number the user called1',
                        label: 'The number the user called1'
                      },
                      {
                        value: 'The number the user called2',
                        label: 'The number the user called2'
                      }
                    ],
                    placeholder: ''
                  }
                }
              ]
            }
          ]
        },
        {
          title: 'Agent Calls',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              title: 'Ring Time',
              elements: [
                {
                  type: 'field',
                  title: '',
                  field: {
                    type: 'units',
                    id: 'ring_time_unit_value',
                    optionId: 'ring_time_unit_option',
                    options: [
                      { value: 'seconds', label: 'seconds' },
                      { value: 'minutes', label: 'minutes' },
                      { value: 'hours', label: 'hours' }
                    ]
                  }
                }
              ]
            },
            {
              type: 'vertical_group',
              title: 'Default department for agent calls',
              description:
                'When an agent answers a direct call (not a transfer or queue call) the ticket will be assigned to this department. ',
              elements: [
                {
                  type: 'field',
                  field: {
                    type: 'select',
                    id: 'vip_select_1',
                    options: [
                      { value: 'VIP', label: 'VIP' },
                      { value: 'VIP1', label: 'VIP1' },
                      { value: 'VIP2', label: 'VIP2' }
                    ],
                    placeholder: ''
                  }
                },
                {
                  type: 'field',
                  title: 'Brand',
                  tooltip: 'Brand',
                  field: {
                    type: 'select',
                    id: 'brand_select_1',
                    options: [
                      { value: 'brand1', label: 'brand1' },
                      { value: 'brand2', label: 'brand2' },
                      { value: 'brand3', label: 'brand3' }
                    ],
                    placeholder: 'Select brand'
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
  missed_calls_enabled: true,
  voicemail_messages_enabled: true,
  voice_settings_checkbox_1: [],
  voice_settings_checkbox_2: ['admin'],
  forwarding_machine_detection_enabled: true,
  number_to_call_select_1: {
    value: 'The number the user called',
    label: 'The number the user called'
  },
  ring_time_unit_value: '30',
  ring_time_unit_option: 'seconds',

  vip_select_1: { value: 'VIP', label: 'VIP' }
};

export const validationSchema = {
  type: 'object',
  properties: {
    missed_calls_enabled: {
      type: 'boolean'
    },
    voicemail_messages_enabled: {
      type: 'boolean'
    },
    voice_settings_checkbox_1: {
      type: 'array'
    },
    voice_settings_checkbox_2: {
      type: 'array'
    },
    forwarding_machine_detection_enabled: {
      type: 'boolean'
    },
    number_to_call_select_1: {
      type: 'object'
    },
    ring_time_unit_value: {
      type: 'string',
      pattern: '^[0-9]*$',
      required: true
    },
    ring_time_unit_option: {
      type: 'string'
    },
    vip_select_1: {
      type: 'string'
    },
    brand_select_1: {
      type: 'string',
      required: true
    }
  }
};

export const validationConfig = {
  errMessages: {
    ring_time_unit_value: {
      required: 'validation.required',
      pattern: 'validation.numberNotValid'
    },
    brand_select_1: {
      required: 'validation.required'
    }
  }
};
