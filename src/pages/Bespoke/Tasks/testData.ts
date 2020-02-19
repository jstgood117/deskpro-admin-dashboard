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
