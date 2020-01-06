export const testData1 = [
  {
    'id': 'awaiting_agent',
    'sys_id': 'awaiting_agent',
    'parent': null,
    'status_type': 'awaiting_agent',
    'depth': 0,
    'title': 'Awaiting Agent',
    'display_order': -6,
    'effective_display_order': 0
  },
  {
    'id': 'awaiting_user',
    'sys_id': 'awaiting_user',
    'parent': null,
    'status_type': 'awaiting_user',
    'depth': 0,
    'title': 'Awaiting User',
    'display_order': -5,
    'effective_display_order': 1
  },
  {
    'id': 'pending',
    'sys_id': 'pending',
    'parent': null,
    'status_type': 'pending',
    'depth': 0,
    'title': 'Pending',
    'display_order': -4,
    'effective_display_order': 2
  },
  {
    'id': 'resolved',
    'sys_id': 'resolved',
    'parent': null,
    'status_type': 'resolved',
    'depth': 0,
    'title': 'Resolved',
    'display_order': -3,
    'effective_display_order': 3
  },
  {
    'id': 'archived',
    'sys_id': 'archived',
    'parent': null,
    'status_type': 'archived',
    'depth': 0,
    'title': 'Archived',
    'display_order': -2,
    'effective_display_order': 4
  },
  {
    'id': 'hidden',
    'sys_id': 'hidden',
    'parent': null,
    'status_type': 'hidden',
    'depth': 0,
    'title': 'Hidden',
    'display_order': -1,
    'effective_display_order': 5
  },
  {
    'id': 'hidden.1',
    'sys_id': 'deleted',
    'parent': {
      'id': 'hidden'
    },
    'status_type': 'hidden',
    'depth': 1,
    'title': 'Deleted',
    'display_order': 0,
    'effective_display_order': 6
  },
  {
    'id': 'hidden.2',
    'sys_id': 'spam',
    'parent': {
      'id': 'hidden'
    },
    'status_type': 'hidden',
    'depth': 1,
    'title': 'Spam',
    'display_order': 0,
    'effective_display_order': 7
  }
];
