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
  operators: OperatorType[];
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
export const operatorDictionary: any = {
  IN: 'Contains',
  NOT_IN: 'Not in',
  EQUAL: 'Is',
  NOT_EQUAL: 'Is not',
  STARTS_WITH: 'Starts with',
  ENDS_WITH: 'Ends with',
  CONTAINS: 'Contains one of the following',
  NOT_CONTAINS: 'Does not Contain one of the following',
  YES_NO: 'Yes / No'
};
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
    valueProperty: 'id',
    titleProperty: 'name',
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
