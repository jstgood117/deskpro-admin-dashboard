import { API_SettingsUiElement } from '../../../codegen/types';

export const uiSchema: {
  elements: API_SettingsUiElement & { type: string }[];
} = {
  elements: [
    {
      title: 'Tasks',
      type: 'feature_section',
      header: {
        title: 'Tasks',
        showOn: 'tasks_enabled',
        description:
          'Use the Tasks feature to create and manage ticket related tasks. Assign tasks to agents and set due dates, to increase productivity and ensure customer satisfaction. Below set which agents can use the Tasks feature.',
      },
      elements: [
        {
          title: 'Permissions',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              title: '',
              description: 'Set which agents can use the Tasks.',
              info: [
                {
                  type: 'button',
                  title: 'Agent Task Permissions',
                  url: 'http://www.test.com',
                  icon: 'guide',
                },
              ],
              elements: [
                {
                  type: 'field',
                  field: {
                    type: 'stringlist',
                    id: 'agent_task_permissions',
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
                    profiles: [
                      { id: 'agent1', name: 'Arthur Curry' },
                      { id: 'agent2', name: 'Bruce Wayne' },
                      { id: 'agent3', name: 'Clark Kent' },
                      { id: 'agent4', name: 'Diana Prince' },
                      { id: 'agent5', name: 'Harleen Quinzel' },
                      { id: 'agent6', name: 'Ignatius Ogilvy' },
                      { id: 'agent7', name: 'Jason Todd' },
                      { id: 'agent8', name: 'Pamela Lillian ' },
                      { id: 'agent9', name: 'Selina Kyle' },
                    ],
                    id: 'agent_task_permissions_list',
                  },
                },
              ],
            },
          ],
        },
        {
          title: 'Reminder',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              title: 'Send agent task reminders at',
              description: '',
              elements: [
                {
                  type: 'field',
                  field: {
                    type: 'select',
                    id: 'agent_task_reminders_at',
                    options: [
                      { value: '08:00', label: '08:00' },
                      { value: '09:00', label: '09:00' },
                      { value: '10:00', label: '10:00' },
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
  tasks_enabled: true,
  agent_task_permissions: [
    'All Permissions',
    'All Non-Destructive Permissions',
    'Support Agents',
    'Trainee',
  ],
  agent_task_permissions_list: [
    { agent1: true },
    { agent2: true },
    { agent3: true },
    { agent4: true },
    { agent5: true },
    { agent6: true },
    { agent7: true },
    { agent8: true },
  ],
  agent_task_reminders_at: { value: '09:00', label: '09:00' },
};

export const vaildationSchema = {
  type: 'object',
  properties: {
    tasks_enabledv: {
      type: 'boolean',
    },
    agent_task_permissions: {
      type: 'array',
    },
    agent_task_permissions_list: {
      type: 'array',
    },
    agent_task_reminders_at: {
      type: 'array',
    },
  },
};

export const validationConfig = {};
