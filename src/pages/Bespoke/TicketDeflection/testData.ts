import { API_SettingsUiElement } from '../../../codegen/types';

export const uiSchema: {
  elements: API_SettingsUiElement & { type: string }[];
} = {
  elements: [
    {
      title: 'Ticket Deflection',
      type: 'feature_section',
      elements: [
        {
          title: '',
          type: 'page_section',
          header: [
            {
              title: 'Ticket Deflection',
              showOn: 'ticket_feflection_enabled',
              description:
                'Use existing Knowledgebase and Guide content to deflect new tickets by showing users articles that relate to the ticket they are submitting.',
              info: [
                {
                  type: 'button',
                  title: 'Ticket Deflection',
                  url: 'http://www.test.com',
                  icon: 'guide',
                },
              ],
            },
          ],
          elements: [],
        },
      ],
    },
  ],
};

export const jsonSchema: any = {
  ticket_feflection_enabled: true,
};
