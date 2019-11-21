const testTableColumns2 = {
  'agents_getAgentsPage': {
    '__typename': 'StandardDataPageData',
    'dataType':'sync',
    'title': 'admin_agents.agents.title',
    'description': 'admin_agents.agents.description',
    'illustration': 'agents-header',
    'headerLinks': [
      {
        'title': 'admin_agents.page.link.login_log',
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
    'newLink': '/panel:/agents/new',
    'views': [
      {
        'title': 'group.active',
        'dataQuery': '\n                        query {\n                            results: agents_getAgents(filter: { is_deleted: false }) {\n                                \n            id\n            name\n            first_name\n            last_name\n            avatarUrn,\n            primary_email\n            agent_teams {\n              id\n              name\n              avatarUrn\n            }\n            agent_groups {\n              id\n              sys_name\n              title\n              note\n            }\n        \n                            }\n                        }\n                    ',
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
              'title': 'col.email',
              'field': 'TEXT',
              'sort': 'ALPHANUMERIC',
              'data': [
                {
                  'propName': 'value',
                  'path': 'primary_email',
                  'value': '',
                  '__typename': 'TableColumnDataMap'
                }
              ],
              'defaultShow': true,
              '__typename': 'TableColumnDef'
            },
            {
              'title': 'col.phone',
              'field': 'TEXT',
              'sort': 'TEXT',
              'data': [
                {
                  'propName': 'phone',
                  'path': 'phone',
                  'value': '',
                  '__typename': 'TableColumnDataMap'
                }
              ],
              'defaultShow': true,
              '__typename': 'TableColumnDef'
            },
            {
              'title': 'col.access',
              'field': 'TEXT',
              'sort': 'TEXT',
              'data': [
                {
                  'propName': 'access',
                  'path': 'access',
                  'value': '',
                  '__typename': 'TableColumnDataMap'
                }
              ],
              'defaultShow': true,
              '__typename': 'TableColumnDef'
            },
            {
              'title': 'col.teams',
              'field': 'AGENT_TEAM_LIST',
              'sort': 'AGENT_TEAM_LIST',
              'data': [
                {
                  'propName': 'value',
                  'path': 'agent_teams',
                  'value': '',
                  '__typename': 'TableColumnDataMap'
                }
              ],
              'defaultShow': true,
              '__typename': 'TableColumnDef'
            },
            {
              'title': 'col.groups',
              'field': 'AGENT_GROUP_LIST',
              'sort': 'AGENT_GROUP_LIST',
              'data': [
                {
                  'propName': 'value',
                  'path': 'agent_groups',
                  'value': '',
                  ' ': 'TableColumnDataMap'
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
              'title': 'col.email',
              'field': 'TEXT',
              'sort': 'ALPHANUMERIC',
              'data': [
                {
                  'propName': 'value',
                  'path': 'primary_email',
                  'value': '',
                  '__typename': 'TableColumnDataMap'
                }
              ],
              'defaultShow': true,
              '__typename': 'TableColumnDef'
            },
            {
              'title': 'col.phone',
              'field': 'TEXT',
              'sort': 'TEXT',
              'data': [
                {
                  'propName': 'phone',
                  'path': 'phone',
                  'value': '',
                  '__typename': 'TableColumnDataMap'
                }
              ],
              'defaultShow': true,
              '__typename': 'TableColumnDef'
            },
            {
              'title': 'col.access',
              'field': 'TEXT',
              'sort': 'TEXT',
              'data': [
                {
                  'propName': 'access',
                  'path': 'access',
                  'value': '',
                  '__typename': 'TableColumnDataMap'
                }
              ],
              'defaultShow': true,
              '__typename': 'TableColumnDef'
            },
            {
              'title': 'col.teams',
              'field': 'AGENT_TEAM_LIST',
              'sort': 'AGENT_TEAM_LIST',
              'data': [
                {
                  'propName': 'value',
                  'path': 'agent_teams',
                  'value': '',
                  '__typename': 'TableColumnDataMap'
                }
              ],
              'defaultShow': true,
              '__typename': 'TableColumnDef'
            },
            {
              'title': 'col.groups',
              'field': 'AGENT_GROUP_LIST',
              'sort': 'AGENT_GROUP_LIST',
              'data': [
                {
                  'propName': 'value',
                  'path': 'agent_groups',
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

export default testTableColumns2;