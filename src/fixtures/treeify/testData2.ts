export const testData2 = [
  {
    'id': 'hidden',
    'sys_id': 'hidden',
    'custom_parent': null,
    'status_type': 'hidden',
    'depth': 0,
    'title': 'Hidden',
    'display_order': -1,
    'effective_display_order': 5
  },
  {
    'id': 'hidden.1',
    'sys_id': 'deleted',
    'custom_parent': {
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
    'custom_parent': {
      'id': 'hidden'
    },
    'status_type': 'hidden',
    'depth': 1,
    'title': 'Spam',
    'display_order': 0,
    'effective_display_order': 7
  }
];
