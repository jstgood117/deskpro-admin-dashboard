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
              showOn: 'ticket_locking_enabled',
              description:
                'Show users the ticket reference code instead of numeric IDs on the Help Center and in URLs.',
              field: {
                type: 'toggle',
                id: 'ticket_locking_enabled'
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
            }
          ]
        }
      ]
    }
  ]
};

export const jsonSchema: any = {
  ticket_locking_enabled: true
};
