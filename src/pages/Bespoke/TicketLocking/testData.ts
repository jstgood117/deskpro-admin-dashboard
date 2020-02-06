import { API_SettingsUiElement } from '../../../codegen/types';

export const uiSchema: {
  elements: API_SettingsUiElement & { type: string }[];
} = {
  elements: [
    {
      title: 'Ticket Locking',
      type: 'feature_section',
      elements: [
        {
          title: 'Locking',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              title: 'Automatically lock ticket',
              showOn: 'ticket_locking_enabled',
              description:
                'Ticket will be automatically locked when an agent opens it in the agent interface.',
              field: {
                type: 'toggle',
                id: 'ticket_locking_enabled',
              },
              info: [
                {
                  type: 'button',
                  title: 'Ticket Locking',
                  url: 'http://www.test.com',
                  icon: 'guide',
                },
              ],
              elements: [],
            },
          ],
        },
        {
          title: 'Unlocking',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              title: 'Automatically unlock ticket',
              showOn: 'ticket_unlocking_enabled',
              description:
                'Ticket will be automatically unlocked when agent closes the ticket tab.',
              field: {
                type: 'toggle',
                id: 'ticket_unlocking_enabled',
              },
              elements: [],
            },
            {
              type: 'vertical_group',
              title: 'Maximum lock duration',
              description:
                'The time a ticket can be kept locked by an agent before the system automatically unlocks it.',
              elements: [
                {
                  type: 'field',
                  field: {
                    type: 'input',
                    id: 'ticket_unlocking_max_duration_select_1',
                    options: [
                      { value: '1 hour', label: '1 hour' },
                      { value: '2 hours', label: '2 hours' },
                      { value: '3 hours', label: '3 hours' },
                    ],
                    placeholder: '',
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
  ticket_locking_enabled: true,
  ticket_unlocking_enabled: true,
  ticket_unlocking_max_duration_select_1: { value: '1 hour', label: '1 hour' },
};
