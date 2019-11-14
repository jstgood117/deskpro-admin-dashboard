const testTableColumns2 = {
  'agents_getAgentsPage': {
    '__typename': 'StandardDataPageData',
    'title': 'admin_agents.agents.title',
    'description': 'admin_agents.agents.description',
    'illustration': 'agents-header',
    'headerLinks': [
      {
        'title': 'admin_agents.page.link.login_log',
        'path': './login-log',
        '__typename': 'PageLink'
      },
      {
        'title': 'admin_common.page.link.settings',
        'path': './settings',
        '__typename': 'PageLink'
      }
    ],
    'newLink': '/panel:/agents/new',
    'views': [
      {
        'title': 'group.active',
        'dataQuery': '\n                        query {\n                            results: agents_getAgents(filter: { is_deleted: false }) {\n                                \n            id\n            name\n            first_name\n            last_name\n            avatarUrn,\n            primary_email\n            emails\n            can_admin\n            can_agent\n            date_last_login\n            agent_teams {\n              id\n              name\n              avatarUrn\n            }\n            agent_groups {\n              id\n              sys_name\n              title\n              note\n            }\n        \n                            }\n                        }\n                    ',
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
              'title': 'col.all_emails',
              'field': 'TEXT_COMMA_SEP',
              'sort': 'ALPHANUMERIC_ARRAY',
              'data': [
                {
                  'propName': 'value',
                  'path': 'emails',
                  'value': '',
                  '__typename': 'TableColumnDataMap'
                }
              ],
              'defaultShow': false,
              '__typename': 'TableColumnDef'
            },
            {
              'title': 'col.can_admin',
              'field': 'BOOLEAN_YESNO',
              'sort': 'BOOLEAN',
              'data': [
                {
                  'propName': 'value',
                  'path': 'can_admin',
                  'value': '',
                  '__typename': 'TableColumnDataMap'
                }
              ],
              'defaultShow': true,
              '__typename': 'TableColumnDef'
            },
            {
              'title': 'col.can_reports',
              'field': 'BOOLEAN_YESNO',
              'sort': 'BOOLEAN',
              'data': [
                {
                  'propName': 'value',
                  'path': 'can_agent',
                  'value': '',
                  '__typename': 'TableColumnDataMap'
                }
              ],
              'defaultShow': true,
              '__typename': 'TableColumnDef'
            },
            {
              'title': 'col.last_login',
              'field': 'TIME_AGO',
              'sort': 'DATETIME',
              'data': [
                {
                  'propName': 'value',
                  'path': 'date_last_login',
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
      },
      {
        'title': 'group.deleted',
        'dataQuery': '\n                        query {\n                            results: agents_getAgents(filter: { is_deleted: true }) {\n                                \n            id\n            name\n            first_name\n            last_name\n            avatarUrn,\n            primary_email\n            emails\n            can_admin\n            can_agent\n            date_last_login\n            agent_teams {\n              id\n              name\n              avatarUrn\n            }\n            agent_groups {\n              id\n              sys_name\n              title\n              note\n            }\n        \n                            }\n                        }\n                    ',
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
              'title': 'col.all_emails',
              'field': 'TEXT_COMMA_SEP',
              'sort': 'ALPHANUMERIC_ARRAY',
              'data': [
                {
                  'propName': 'value',
                  'path': 'emails',
                  'value': '',
                  '__typename': 'TableColumnDataMap'
                }
              ],
              'defaultShow': false,
              '__typename': 'TableColumnDef'
            },
            {
              'title': 'col.can_admin',
              'field': 'BOOLEAN_YESNO',
              'sort': 'BOOLEAN',
              'data': [
                {
                  'propName': 'value',
                  'path': 'can_admin',
                  'value': '',
                  '__typename': 'TableColumnDataMap'
                }
              ],
              'defaultShow': true,
              '__typename': 'TableColumnDef'
            },
            {
              'title': 'col.can_reports',
              'field': 'BOOLEAN_YESNO',
              'sort': 'BOOLEAN',
              'data': [
                {
                  'propName': 'value',
                  'path': 'can_agent',
                  'value': '',
                  '__typename': 'TableColumnDataMap'
                }
              ],
              'defaultShow': true,
              '__typename': 'TableColumnDef'
            },
            {
              'title': 'col.last_login',
              'field': 'TIME_AGO',
              'sort': 'DATETIME',
              'data': [
                {
                  'propName': 'value',
                  'path': 'date_last_login',
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