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
          icon: 'guide'
        }
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
                    max: 8
                  }
                },
                {
                  type: 'field',
                  field: {
                    id: 'agent_view_permissions_list',
                    title: 'Agents',
                    editable: true,
                    type: 'profiles',
                    profiles: [
                      { id: 'agent1', name: 'Arthur Curry' },
                      { id: 'agent2', name: 'Bruce Wayne' },
                      { id: 'agent3', name: 'Clark Kent' },
                      { id: 'agent4', name: 'Diana Prince' },
                      { id: 'agent5', name: 'Harleen Quinzel' },
                      { id: 'agent6', name: 'Ignatius Ogilvy' },
                      { id: 'agent7', name: 'Jason Todd' },
                      { id: 'agent8', name: 'Pamela Lillian ' },
                      { id: 'agent9', name: 'Selina Kyle' }
                    ],
                    restricted: { agent2: true }
                  }
                }
              ]
            }
          ]
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
                    max: 8
                  }
                },
                {
                  type: 'field',
                  field: {
                    id: 'agent_create_permissions_list',
                    title: 'Agents',
                    editable: true,
                    type: 'profiles',
                    profiles: [
                      { id: 'agent1', name: 'Arthur Curry' },
                      { id: 'agent2', name: 'Bruce Wayne' },
                      { id: 'agent3', name: 'Clark Kent' },
                      { id: 'agent4', name: 'Diana Prince' },
                      { id: 'agent5', name: 'Harleen Quinzel' },
                      { id: 'agent6', name: 'Ignatius Ogilvy' },
                      { id: 'agent7', name: 'Jason Todd' },
                      { id: 'agent8', name: 'Pamela Lillian ' },
                      { id: 'agent9', name: 'Selina Kyle' }
                    ],
                    restricted: { agent2: true }
                  }
                }
              ]
            }
          ]
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
                    max: 8
                  }
                },
                {
                  type: 'field',
                  field: {
                    id: 'agent_close_permissions_list',
                    title: 'Agents',
                    editable: true,
                    type: 'profiles',
                    profiles: [
                      { id: 'agent1', name: 'Arthur Curry' },
                      { id: 'agent2', name: 'Bruce Wayne' },
                      { id: 'agent3', name: 'Clark Kent' },
                      { id: 'agent4', name: 'Diana Prince' },
                      { id: 'agent5', name: 'Harleen Quinzel' },
                      { id: 'agent6', name: 'Ignatius Ogilvy' },
                      { id: 'agent7', name: 'Jason Todd' },
                      { id: 'agent8', name: 'Pamela Lillian ' },
                      { id: 'agent9', name: 'Selina Kyle' }
                    ],
                    restricted: { agent2: true }
                  }
                }
              ]
            }
          ]
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
                    max: 8
                  }
                },
                {
                  type: 'field',
                  field: {
                    id: 'agent_reopen_permissions_list',
                    title: 'Agents',
                    editable: true,
                    type: 'profiles',
                    profiles: [
                      { id: 'agent1', name: 'Arthur Curry' },
                      { id: 'agent2', name: 'Bruce Wayne' },
                      { id: 'agent3', name: 'Clark Kent' },
                      { id: 'agent4', name: 'Diana Prince' },
                      { id: 'agent5', name: 'Harleen Quinzel' },
                      { id: 'agent6', name: 'Ignatius Ogilvy' },
                      { id: 'agent7', name: 'Jason Todd' },
                      { id: 'agent8', name: 'Pamela Lillian ' },
                      { id: 'agent9', name: 'Selina Kyle' }
                    ],
                    restricted: { agent2: true }
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
  ticket_problems_enabled: true,
  view_permissions: [
    'All Permissions',
    'All Non-Destructive Permissions',
    'Support Agents',
    'Trainee'
  ],
  agent_view_permissions_list: {
    agent1: true,
    agent3: true,
    agent4: true,
    agent6: true,
    agent7: true,
    agent8: true,
    agent9: true
  },
  create_permissions: [
    'All Permissions',
    'All Non-Destructive Permissions',
    'Support Agents',
    'Trainee'
  ],
  agent_create_permissions_list: {
    agent1: true,
    agent3: true,
    agent4: true,
    agent6: true,
    agent7: true,
    agent8: true,
    agent9: true
  },
  close_permissions: [
    'All Permissions',
    'All Non-Destructive Permissions',
    'Support Agents',
    'Trainee'
  ],
  agent_close_permissions_list: {
    agent1: true,
    agent3: true,
    agent4: true,
    agent6: true,
    agent7: true,
    agent8: true,
    agent9: true
  },
  reopen_permissions: [
    'All Permissions',
    'All Non-Destructive Permissions',
    'Support Agents',
    'Trainee'
  ],
  agent_reopen_permissions_list: {
    agent1: true,
    agent3: true,
    agent4: true,
    agent6: true,
    agent7: true,
    agent8: true,
    agent9: true
  }
};

export const validationSchema = {
  type: 'object',
  properties: {
    ticket_problems_enabled: {
      type: 'boolean'
    },
    view_permissions: {
      type: 'array',
      minItems: 1
    },
    agent_view_permissions_list: {
      type: 'object'
    },
    create_permissions: {
      type: 'array'
    },
    agent_create_permissions_list: {
      type: 'object'
    },
    close_permissions: {
      type: 'array'
    },
    agent_close_permissions_list: {
      type: 'object'
    },
    reopen_permissions: {
      type: 'array'
    },
    agent_reopen_permissions_list: {
      type: 'object'
    }
  }
};

export const validationConfig = {
  errMessages: {
    view_permissions: {
      minItems: 'validation.permissions.min_1'
    }
  }
};
