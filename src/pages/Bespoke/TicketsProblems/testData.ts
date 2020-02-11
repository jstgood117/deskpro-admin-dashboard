import { API_SettingsUiElement } from '../../../codegen/types';

export const uiSchema: {
  elements: API_SettingsUiElement & { type: string }[];
} = {
  elements: [
    {
      title: 'Problems & Incidents',
      type: 'feature_section',
      header: {
        title: 'Problems & Incidents',
        showOn: 'ticket_problems_enabled',
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
                    type: 'stringlist',
                    id: 'view_permissions',
                    title: 'Permission Groups',
                    addTitle: 'Add usergroup',
                    max: 8,
                  },
                },
                {
                  type: 'field',
                  field: {
                    editable: true,
                    type: 'profiles',
                    title: 'Agents',
                    max: 200,
                    id: 'agent_view_permissions_list',
                  },
                },
              ],
            },
          ],
        },
        {
          title: '‘Create’ Permissions',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              title: '',
              description: 'Set which agents can create problems and incidents',
              elements: [
                {
                  type: 'field',
                  field: {
                    type: 'stringlist',
                    id: 'create_permissions',
                    title: 'Permission Groups',
                    addTitle: 'Add usergroup',
                    max: 8,
                  },
                },
                {
                  type: 'field',
                  field: {
                    editable: true,
                    type: 'profiles',
                    title: 'Agents',
                    max: 200,
                    id: 'agent_create_permissions_list',
                  },
                },
              ],
            },
          ],
        },
        {
          title: '‘Close’ Permissions',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              title: '',
              description: 'Set which agents can close problems and incidents',
              elements: [
                {
                  type: 'field',
                  field: {
                    type: 'stringlist',
                    id: 'close_permissions',
                    title: 'Permission Groups',
                    addTitle: 'Add usergroup',
                    max: 8,
                  },
                },
                {
                  type: 'field',
                  field: {
                    editable: true,
                    type: 'profiles',
                    title: 'Agents',
                    max: 200,
                    id: 'agent_close_permissions_list',
                  },
                },
              ],
            },
          ],
        },
        {
          title: '‘Reopen’ Permissions',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              title: '',
              description: 'Set which agents can reopen problems and incidents',
              elements: [
                {
                  type: 'field',
                  field: {
                    type: 'stringlist',
                    id: 'reopen_permissions',
                    title: 'Permission Groups',
                    addTitle: 'Add usergroup',
                    max: 8,
                  },
                },
                {
                  type: 'field',
                  field: {
                    editable: true,
                    type: 'profiles',
                    title: 'Agents',
                    max: 200,
                    id: 'agent_reopen_permissions_list',
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
  ticket_problems_enabled: true,
  view_permissions: [
    'All Permissions',
    'All Non-Destructive Permissions',
    'Support Agents',
    'Trainee',
  ],
  agent_view_permissions_list: [
    { name: 'Arthur Curry' },
    { name: 'Bruce Wayne' },
    { name: 'Clark Kent' },
    { name: 'Diana Prince' },
    { name: 'Harleen Quinzel' },
    { name: 'Ignatius Ogilvy' },
    { name: 'Jason Todd' },
    { name: 'Pamela Lillian ' },
    { name: 'Selina Kyle' },
  ],
  create_permissions: [
    'All Permissions',
    'All Non-Destructive Permissions',
    'Support Agents',
    'Trainee',
  ],
  agent_create_permissions_list: [
    { name: 'Arthur Curry' },
    { name: 'Bruce Wayne' },
    { name: 'Clark Kent' },
    { name: 'Diana Prince' },
    { name: 'Harleen Quinzel' },
    { name: 'Ignatius Ogilvy' },
    { name: 'Jason Todd' },
    { name: 'Pamela Lillian ' },
    { name: 'Selina Kyle' },
  ],
  close_permissions: [
    'All Permissions',
    'All Non-Destructive Permissions',
    'Support Agents',
    'Trainee',
  ],
  agent_close_permissions_list: [
    { name: 'Arthur Curry' },
    { name: 'Bruce Wayne' },
    { name: 'Clark Kent' },
    { name: 'Diana Prince' },
    { name: 'Harleen Quinzel' },
    { name: 'Ignatius Ogilvy' },
    { name: 'Jason Todd' },
    { name: 'Pamela Lillian ' },
    { name: 'Selina Kyle' },
  ],
  reopen_permissions: [
    'All Permissions',
    'All Non-Destructive Permissions',
    'Support Agents',
    'Trainee',
  ],
  agent_reopen_permissions_list: [
    { name: 'Arthur Curry' },
    { name: 'Bruce Wayne' },
    { name: 'Clark Kent' },
    { name: 'Diana Prince' },
    { name: 'Harleen Quinzel' },
    { name: 'Ignatius Ogilvy' },
    { name: 'Jason Todd' },
    { name: 'Pamela Lillian ' },
    { name: 'Selina Kyle' },
  ],
};

export const vaildationSchema = {
  type: 'object',
  properties: {
    ticket_problems_enabled: {
      type: 'boolean',
    },
    view_permissions: {
      type: 'array',
    },
    agent_view_permissions_list: {
      type: 'array',
    },
    create_permissions: {
      type: 'array',
    },
    agent_create_permissions_list: {
      type: 'array',
    },
    close_permissions: {
      type: 'array',
    },
    agent_close_permissions_list: {
      type: 'array',
    },
    reopen_permissions: {
      type: 'array',
    },
    agent_reopen_permissions_list: {
      type: 'array',
    },
  },
};

export const validationConfig = {};
