export type ValueTypes = 'BOOL' | 'TEXT' | 'CHOICE_FROM_DATA';

export type OperatorType =
  | 'IN'
  | 'NOT_IN'
  | 'EQUAL'
  | 'NOT_EQUAL'
  | 'STARTS_WITH'
  | 'ENDS_WITH'
  | 'CONTAINS'
  | 'NOT_CONTAINS'
  | 'YES_NO';

export type OperatorOptionsType = {
  value: OperatorType;
  title: string;
};

export type OperatorOptionsTypes = OperatorOptionsType[];

export type FilterMeta = {
  title: string;
  operators: string[];
  type: string;
  path: string;
  dataPath: string;
  valueProperty?: string;
  titleProperty?: string;
  uniqueValues?: any[];
};

export const operatorOptions: OperatorOptionsTypes = [
  {
    value: 'IN',
    title: 'In'
  },
  {
    value: 'NOT_IN',
    title: 'Not in'
  },
  {
    value: 'EQUAL',
    title: 'Equal to'
  },
  {
    value: 'NOT_EQUAL',
    title: 'Not equal to'
  },
  {
    value: 'STARTS_WITH',
    title: 'Starts with'
  },
  {
    value: 'ENDS_WITH',
    title: 'Ends with'
  },
  {
    value: 'CONTAINS',
    title: 'Contains'
  },
  {
    value: 'NOT_CONTAINS',
    title: 'Does not contain'
  },
  {
    value: 'YES_NO',
    title: 'Yes / No'
  }
];

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
    path: 'agent_team.*.name',
    dataPath: 'agent_team'
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
    path: 'agent_team.*.firstname',
    dataPath: 'agent_team'
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
    path: 'agent_team.*.lastname',
    dataPath: 'agent_team'
  },
  {
    title: 'Email',
    operators: ['IN', 'NOT_IN'],
    type: 'AGENT_TEAM_LIST',
    path: 'agent_team.*.id',
    dataPath: 'agent_team'
  },
  {
    title: 'Team',
    operators: ['IN', 'NOT_IN'],
    type: 'CHOICE_FROM_DATA',
    path: 'agent_team.*.agent_teams',
    dataPath: 'agent_team',
    valueProperty: 'id',
    titleProperty: 'title',
    uniqueValues: [
      {
        id: 1,
        title: 'Team 1'
      },
      {
        id: 2,
        title: 'Team 2'
      },
      {
        id: 3,
        title: 'Team 3'
      }
    ]
  },
  {
    title: 'Can Admin',
    operators: ['EQUAL'],
    type: 'BOOL',
    path: 'agent_team.*.can_admin',
    dataPath: 'agent_team'
  }
];