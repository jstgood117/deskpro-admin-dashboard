import { API_SettingsUiElement } from '../../../codegen/types';

export const uiSchema: {
  elements: API_SettingsUiElement & { type: string }[];
} = {
  elements: [
    {
      title: 'Interface Defaults',
      type: 'feature_section',
      elements: [
        {
          title: 'New Tickets',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              title:
                'These settings control the default values for options and form inputs in the agent interface.',
              description: '',
              info: [
                {
                  type: 'button',
                  title: 'Interface Defaults',
                  url: 'http://www.test.com',
                  icon: 'guide',
                },
              ],
              elements: [
                {
                  type: 'horizontal_group',
                  elements: [
                    {
                      type: 'label',
                      label: 'Set status',
                    },
                    {
                      type: 'field',
                      field: {
                        type: 'select',
                        id: 'new_tickets_set_status',
                        options: [
                          {
                            value: 'Awaiting User',
                            label: 'Awaiting User',
                          },
                          {
                            value: 'Awaiting User1',
                            label: 'Awaiting User1',
                          },
                          {
                            value: 'Awaiting User2',
                            label: 'Awaiting User2',
                          },
                        ],
                        placeholder: '',
                      },
                    },
                  ],
                },
                {
                  type: 'horizontal_group',
                  elements: [
                    {
                      type: 'label',
                      label: 'Set agent (when ticket is unassigned)',
                    },
                    {
                      type: 'field',
                      field: {
                        type: 'select',
                        id: 'new_tickets_set_agent',
                        options: [
                          {
                            value: 'Assign to self',
                            label: 'Assign to self',
                          },
                          {
                            value: 'Assign to self1',
                            label: 'Assign to self1',
                          },
                          {
                            value: 'Assign to self2',
                            label: 'Assign to self2',
                          },
                        ],
                        placeholder: '',
                      },
                    },
                  ],
                },
                {
                  type: 'horizontal_group',
                  elements: [
                    {
                      type: 'label',
                      label: 'Set team (when ticket has no team)',
                    },
                    {
                      type: 'field',
                      field: {
                        type: 'select',
                        id: 'new_tickets_set_team',
                        options: [
                          {
                            value: 'Keep no team',
                            label: 'Keep no team',
                          },
                          {
                            value: 'Keep no team1',
                            label: 'Keep no team1',
                          },
                          {
                            value: 'Keep no team2',
                            label: 'Keep no team2',
                          },
                        ],
                        placeholder: '',
                      },
                    },
                  ],
                },
              ],
            },
            {
              type: 'vertical_group',
              title: 'User notification',
              description:
                'Check the "send user email notification" checkbox by default',
              showOn: 'new_tickets_user_notification',
              field: {
                type: 'checkbox',
                id: 'new_tickets_user_notification',
                value: 'admin',
              },
              elements: [],
            },
            {
              type: 'vertical_group',
              title: 'Drafts',
              description:
                'Automatically save input on the new ticket form. If your browser crashes or some other problem happens before you can submit the ticket, your draft will be restored next time you load the new ticket form.',
              showOn: 'new_tickets_drafts',
              field: {
                type: 'checkbox',
                id: 'new_tickets_drafts',
                value: 'admin',
              },
              elements: [],
            },
          ],
        },
        {
          title: 'Ticket Reply',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              title: '',
              description: '',
              elements: [
                {
                  type: 'horizontal_group',
                  elements: [
                    {
                      type: 'label',
                      label: 'Set status',
                    },
                    {
                      type: 'field',
                      field: {
                        type: 'select',
                        id: 'ticket_reply_set_status',
                        options: [
                          { value: 'Awaiting User', label: 'Awaiting User' },
                          { value: 'Awaiting User1', label: 'Awaiting User1' },
                          { value: 'Awaiting User2', label: 'Awaiting User2' },
                        ],
                        placeholder: '',
                      },
                    },
                  ],
                },
                {
                  type: 'horizontal_group',
                  elements: [
                    {
                      type: 'label',
                      label: 'Set agent (when ticket is unassigned)',
                    },
                    {
                      type: 'field',
                      field: {
                        type: 'select',
                        id: 'ticket_reply_set_agent_unassigned',
                        options: [
                          {
                            value: 'Assign to self',
                            label: 'Assign to self',
                          },
                          {
                            value: 'Assign to self1',
                            label: 'Assign to self1',
                          },
                          {
                            value: 'Assign to self2',
                            label: 'Assign to self2',
                          },
                        ],
                        placeholder: '',
                      },
                    },
                  ],
                },
                {
                  type: 'horizontal_group',
                  elements: [
                    {
                      type: 'label',
                      label: 'Set agent (when ticket is already assigned)',
                    },
                    {
                      type: 'field',
                      field: {
                        type: 'select',
                        id: 'ticket_reply_set_agent_assigned',
                        options: [
                          {
                            value: 'Keep assignment',
                            label: 'Keep assignment',
                          },
                          {
                            value: 'Keep assignment1',
                            label: 'Keep assignment1',
                          },
                          {
                            value: 'Keep assignment2',
                            label: 'Keep assignment2',
                          },
                        ],
                        placeholder: '',
                      },
                    },
                  ],
                },
                {
                  type: 'horizontal_group',
                  elements: [
                    {
                      type: 'label',
                      label: 'Set team (when ticket has no team)',
                    },
                    {
                      type: 'field',
                      field: {
                        type: 'select',
                        id: 'ticket_reply_set_team',
                        options: [
                          {
                            value: 'Keep no team',
                            label: 'Keep no team',
                          },
                          {
                            value: 'Keep no team1',
                            label: 'Keep no team1',
                          },
                          {
                            value: 'Keep no team2',
                            label: 'Keep no team2',
                          },
                        ],
                        placeholder: '',
                      },
                    },
                  ],
                },
                {
                  type: 'horizontal_group',
                  elements: [
                    {
                      type: 'label',
                      label:
                        'Set team (when ticket is already assigned to a team)',
                    },
                    {
                      type: 'field',
                      field: {
                        type: 'select',
                        id: 'ticket_reply_set_team_assigned',
                        options: [
                          {
                            value: 'Keep team',
                            label: 'Keep team',
                          },
                          {
                            value: 'Keep team1',
                            label: 'Keep team1',
                          },
                          {
                            value: 'Keep team2',
                            label: 'Keep team2',
                          },
                        ],
                        placeholder: '',
                      },
                    },
                  ],
                },
              ],
            },
            {
              type: 'vertical_group',
              title: 'User notification',
              description:
                'Check the "send user email notification" checkbox by default',
              showOn: 'ticket_reply_user_notification',
              field: {
                type: 'checkbox',
                id: 'ticket_reply_user_notification',
                value: 'admin',
              },
              elements: [],
            },
            {
              type: 'vertical_group',
              title: 'Automatically set status',
              description:
                'Automatically save input on the new ticket form. If your browser crashes or some other problem happens before you can submit the ticket, your draft will be restored next time you load the new ticket form.',
              showOn: 'ticket_reply_auto_set_status',
              field: {
                type: 'checkbox',
                id: 'ticket_reply_auto_set_status',
                value: 'admin',
              },
              elements: [],
            },
            {
              type: 'vertical_group',
              title: 'Automatically enable "close tab"',
              description:
                'When changing the status to Resolved from the reply box, automatically check the "close tab after reply" option.',
              showOn: 'ticket_reply_auto_enable',
              field: {
                type: 'checkbox',
                id: 'ticket_reply_auto_enable',
                value: 'admin',
              },
              elements: [],
            },
          ],
        },
        {
          title: 'Ticket View',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              title: 'Reverse message order',
              description:
                'Show newest messages first with the reply box at the top.',
              showOn: 'ticket_view_reverse_message_order',
              field: {
                type: 'checkbox',
                id: 'ticket_view_reverse_message_order',
                value: 'admin',
              },
              elements: [],
            },
          ],
        },
      ],
    },
  ],
};

export const jsonSchema: any = {
  new_tickets_set_status: {
    value: 'Awaiting User',
    label: 'Awaiting User',
  },
  new_tickets_set_agent: {
    value: 'Assign to self',
    label: 'Assign to self',
  },
  new_tickets_set_team: {
    value: 'Keep no team',
    label: 'Keep no team',
  },
  new_tickets_user_notification: ['admin'],
  new_tickets_drafts: ['admin'],
  ticket_reply_set_status: {
    value: 'Awaiting User',
    label: 'Awaiting User',
  },
  ticket_reply_set_agent_unassigned: {
    value: 'Assign to self',
    label: 'Assign to self',
  },
  ticket_reply_set_agent_assigned: {
    value: 'Keep no team',
    label: 'Keep no team',
  },
  ticket_reply_set_team: {
    value: 'Keep no team',
    label: 'Keep no team',
  },
  ticket_reply_set_team_assigned: {
    value: 'Keep team',
    label: 'Keep team',
  },
  ticket_reply_user_notification: ['admin'],
  ticket_reply_auto_set_status: ['admin'],
  ticket_reply_auto_enable: ['admin'],
  ticket_view_reverse_message_order: ['admin'],
};

export const vaildationSchema = {
  type: 'object',
  properties: {
    new_tickets_set_status: {
      type: 'object',
    },
    new_tickets_set_agent: {
      type: 'object',
    },
    new_tickets_set_team: {
      type: 'object',
    },
    new_tickets_user_notification: {
      type: 'boolean',
    },
    new_tickets_drafts: {
      type: 'boolean',
    },
    ticket_reply_set_status: {
      type: 'object',
    },
    ticket_reply_set_agent_unassigned: {
      type: 'object',
    },
    ticket_reply_set_agent_assigned: {
      type: 'object',
    },
    ticket_reply_set_team: {
      type: 'object',
    },
    ticket_reply_set_team_assigned: {
      type: 'object',
    },
    ticket_reply_user_notification: {
      type: 'boolean',
    },
    ticket_reply_auto_set_status: {
      type: 'boolean',
    },
    ticket_reply_auto_enable: {
      type: 'boolean',
    },
    ticket_view_reverse_message_order: {
      type: 'boolean',
    },
  },
};

export const validationConfig = {};
