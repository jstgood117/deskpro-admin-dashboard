import { API_SettingsUiElement } from '../../../codegen/types';

export const uiSchema: {
  elements: API_SettingsUiElement & { type: string }[];
} = {
  elements: [
    {
      title: 'Problems & Incidents',
      type: 'feature_section',
      header: {
        title: 'Ticket Deflection',
        showOn: 'ticket_feflection_enabled',
        description:
          'Unlock your agent’s ability to analysis incoming ticket trends and spot common issues. Agents using Problems & Incidents can group together tickets relating to a single underlying cause. Allowing to work more efficiently and pool knowledge.',
        info: {
          type: 'button',
          title: 'Problems & Incidents',
          url: 'http://www.test.com',
          icon: 'guide',
        },
      },
      elements: [
        {
          title: '‘View’ Permissions',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              title: '',
              description: 'Set which agents can view problems and incidents',
              elements: [
                {
                  type: 'field',
                  field: {
                    type: 'permissions',
                    title: 'Permission Groups',
                    addTitle: 'Add usergroup',
                    id: 'view_permissions',
                    values: [
                      'All Permissions',
                      'All Non-Destructive Permissions',
                      'Support Agents',
                      'Trainee',
                    ],
                  },
                },
                {
                  type: 'field',
                  field: {
                    editable: true,
                    type: 'profiles',
                    title: 'Agents',
                    max: 200,
                    id: 'agent_view_permissions',
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
  view_permissions: true,
  agent_view_permissions: true,
};
