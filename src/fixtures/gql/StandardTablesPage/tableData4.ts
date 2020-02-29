export const testTableData4 = [
  {
    'id': '4',
    'sys_name': 'agent_all_safe_perms',
    'title': 'All Non-Destructive Permissions',
    'note': 'Agent has all permissions except those that would allow them to make destructive changes such as deleting records.',
    'members': [],
    'namescomma': 'test1,test2,test3,test4',
    'departments': [{
      title: 'department1'
    }],
    'can_admin': true
  },
  {
    'id': '3',
    'sys_name': 'agent_all_perms',
    'title': 'All Permissions',
    'note': 'Agent has full permissions',
    'members': [
      {
        'id': '1',
        'name': 'John Doe',
        'avatarUrn': ''
      }
    ],
    'namescomma': 'test4,test5,test6',
    'departments': [{
      title: 'department1'
    }, {
      title: 'department2'
    },{
      title: 'department3'
    }, {
      title: 'department4'
    }],
    'can_admin': true
  }
];