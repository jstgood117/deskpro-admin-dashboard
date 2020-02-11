import { API_SettingsUiElement } from '../../../codegen/types';

export const uiSchema: {
  elements: API_SettingsUiElement & { type: string }[];
} = {
  elements: [
    {
      title: 'Ticket References',
      type: 'feature_section',
      elements: [
        {
          title: 'Reference Codes',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              title: 'Show ticket reference code',
              description:
                'Show users the ticket reference code instead of numeric IDs on the Help Center and in URLs.',
              field: {
                type: 'toggle',
                id: 'ticket_reference_enabled'
              },
              info: [
                {
                  type: 'button',
                  title: 'Ticket Ref Codes',
                  url: 'http://www.test.com',
                  icon: 'guide'
                }
              ],
              elements: []
            },
            {
              type: 'vertical_group',
              title: 'Use a custom reference code',
              className: 'checkbox-field',
              field: {
                type: 'checkbox',
                id: 'ticket_reference_code',
                value: 'yes'
              },
              elements: [
                {
                  type: 'field',
                  className: 'reference-panel',
                  field: {
                    type: 'referenceFilePanel'
                  }
                },
                {
                  type: 'field',
                  className: 'reference-markdown',
                  field: {
                    type: 'markdown'
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
  ticket_reference_enabled: true,
  ticket_reference_code: ['yes']
};
