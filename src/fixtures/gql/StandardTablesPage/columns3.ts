const testTableColumns3 = {
  'agents_teams_getTeams': {
    '__typename': 'StandardDataPageData',
    'dataType':'sync',
    'title': 'admin_agents_teams.teams.title',
    'description': 'admin_agents_teams.teams.description',
    'illustration': 'agents-header',
    'headerLinks': [
      {
        'title': 'admin_common.page.link.login_log',
        'path': './login-log',
        'icon': 'loginLog',
        '__typename': 'PageLink'
      },
      {
        'title': 'admin_common.page.link.settings',
        'path': './settings',
        'icon': 'settings',
        '__typename': 'PageLink'
      }
    ],
    'newLink': '/panel:/agents_team/new',
    'views': [
      {
        'title': 'group.active',
        'dataQuery': '\n                        query {\n                            results: agents_getAgents(filter: { is_deleted: false }) {\n                                \n            id\n            name\n            first_name\n            last_name\n            avatarUrn,\n            primary_email\n            agent_teams {\n              id\n              name\n              avatarUrn\n            }\n            agent_groups {\n              id\n              sys_name\n              title\n              note\n            }\n        \n                            }\n                        }\n                    ',
        'filterDef': [
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
            title: 'Members',
            operators: ['IN', 'NOT_IN'],
            type: 'CHOICE_FROM_DATA',
            path: 'members.name',
            dataPath: 'members',
            uniqueValues: [
              {
                value: 26,
                title: 'John Doe'
              },
              {
                value: 22,
                title: 'Natalie White'
              },
              {
                value: 31,
                title: 'Juan Hernandez'
              }
            ]
          }
        ],
        'tableDef': {
          'columns': [
            {
              'title': 'admin_common.col.id',
              'sortField': 'ID',
              'field': 'ID',
              'data': [
                {
                  'propName': 'id',
                  'path': 'id',
                  'value': '',
                  '__typename': 'TableColumnDataMap'
                },
              ],
              'defaultShow': true,
              '__typename': 'TableColumnDef'
            },
            {
              'title': 'col.name',
              'field': 'NAME_AVATAR',
              'sort': 'NAME_AVATAR',
              'data': [
                {
                  'propName': 'name',
                  'path': 'name',
                  'value': '',
                  '__typename': 'TableColumnDataMap'
                },
                {
                  'propName': 'avatar',
                  'path': 'avatarUrn',
                  'value': '',
                  '__typename': 'TableColumnDataMap'
                }
              ],
              'defaultShow': true,
              '__typename': 'TableColumnDef'
            },
            {
              'title': 'col.members',
              'field': 'AGENT_TEAM_LIST',
              'sort': 'AGENT_TEAM_LIST',
              'data': [
                {
                  'propName': 'value',
                  'path': 'members',
                  'value': '',
                  '__typename': 'TableColumnDataMap'
                }
              ],
              'defaultShow': true,
              '__typename': 'TableColumnDef'
            }
          ],
          '__typename': 'PageDataTable'
        },
        '__typename': 'InMemoryPageDataView'
      },
      {
        'title': 'group.deleted',
        'dataQuery': '\n                        query {\n                            results: agents_getAgents(filter: { is_deleted: true }) {\n                                \n            id\n            name\n            first_name\n            last_name\n            avatarUrn,\n            primary_email\n            agent_teams {\n              id\n              name\n              avatarUrn\n            }\n            agent_groups {\n              id\n              sys_name\n              title\n              note\n            }\n        \n                            }\n                        }\n                    ',
        'filterDef': [{
          'title':'Name',
          'path':'col.name',
          'type':'TEXT',
          'operators':['EQUALS', 'CONTAINS']
        },{
          'title':'EMAIL',
          'path':'col.name',
          'type':'TEXT',
          'operators':['EQUALS', 'CONTAINS']
        }],
        'tableDef': {
          'columns': [
            {
              'title': 'col.name',
              'field': 'NAME_AVATAR',
              'sort': 'NAME_AVATAR',
              'data': [
                {
                  'propName': 'name',
                  'path': 'name',
                  'value': '',
                  '__typename': 'TableColumnDataMap'
                },
                {
                  'propName': 'avatar',
                  'path': 'avatarUrn',
                  'value': '',
                  '__typename': 'TableColumnDataMap'
                }
              ],
              'defaultShow': true,
              '__typename': 'TableColumnDef'
            },
            {
              'title': 'col.members',
              'field': 'AGENT_TEAM_LIST',
              'sort': 'AGENT_TEAM_LIST',
              'data': [
                {
                  'propName': 'value',
                  'path': 'members',
                  'value': '',
                  '__typename': 'TableColumnDataMap'
                }
              ],
              'defaultShow': true,
              '__typename': 'TableColumnDef'
            }
          ],
          '__typename': 'PageDataTable'
        },
        '__typename': 'InMemoryPageDataView'
      }
    ]
  }
};

export default testTableColumns3;