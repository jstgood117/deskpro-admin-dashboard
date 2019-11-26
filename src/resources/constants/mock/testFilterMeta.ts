import { FilterMeta } from '../../interfaces/filterMeta';

export const testFilterMeta: FilterMeta[] = [
  {
    title: 'Name',
    operators: [
      'CONTAINS',
      'NOT_CONTAINS',
      'EQUAL',
      'NOT_EQUAL',
      'STARTS_WITH',
      'ENDS_WITH'
    ],
    type: 'TEXT',
    path: 'name',
    dataPath: 'name'
  },
  {
    title: 'First name',
    operators: [
      'CONTAINS',
      'NOT_CONTAINS',
      'EQUAL',
      'NOT_EQUAL',
      'STARTS_WITH',
      'ENDS_WITH'
    ],
    type: 'TEXT',
    path: 'firstname',
    dataPath: 'firstname'
  },
  {
    title: 'Last Name',
    operators: [
      'CONTAINS',
      'NOT_CONTAINS',
      'EQUAL',
      'NOT_EQUAL',
      'STARTS_WITH',
      'ENDS_WITH'
    ],
    type: 'TEXT',
    path: 'lastname',
    dataPath: 'lastname'
  },
  {
    title: 'Email',
    operators: ['IN', 'NOT_IN'],
    type: 'TEXT',
    path: 'primary_email',
    dataPath: 'primary_email'
  },
  {
    title: 'Team',
    operators: ['IN', 'NOT_IN'],
    type: 'CHOICE_FROM_DATA',
    path: 'agent_teams.name',
    dataPath: 'agent_teams',
    uniqueValues: [
      {
        value: 1,
        title: 'Team 1'
      },
      {
        value: 2,
        title: 'Team 2'
      },
      {
        value: 3,
        title: 'Team 3'
      }
    ]
  },
  // { // example of deep object search
  //   title: 'Team - Custom',
  //   operators: [
  //     'CONTAINS',
  //     'NOT_CONTAINS',
  //     'EQUAL',
  //     'NOT_EQUAL',
  //     'STARTS_WITH',
  //     'ENDS_WITH'
  //   ],
  //   type: 'TEXT',
  //   path: 'agent_teams.name',
  //   dataPath: 'agent_teams'
  // },
  {
    title: 'Can Admin',
    operators: ['EQUAL'],
    type: 'BOOL',
    path: 'can_admin',
    dataPath: 'can_admin'
  }
];
