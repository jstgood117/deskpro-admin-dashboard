import { IPageData } from "./interfaces";
import { Column } from "react-table";

export const testTranslations = {
  'admin.sidebar.setup': 'Setup',
  'admin.sidebar.setup.dashboard': 'Dashboard',
  'admin.sidebar.setup.wizard': 'Setup wizard',
  'admin.sidebar.setup.brands': 'Brands',
  'admin.sidebar.setup.languagesAndLocales': 'Languages & Locales',
  'admin.sidebar.setup.businessHours': 'Business Hours',
	'admin.sidebar.setup.advancedSettings': 'Advanced Settings',
	
  'admin.sidebar.channels': 'Channels',
  'admin.sidebar.channels.email': 'Email',
  'admin.sidebar.channels.forms': 'Forms',
  'admin.sidebar.channels.messenger': 'Messenger',
  'admin.sidebar.channels.messenger.setup': 'Setup',
  'admin.sidebar.channels.messenger.departments': 'Departments',
  'admin.sidebar.channels.messenger.queues': 'Queues',
	'admin.sidebar.channels.social': 'Social',
	'admin.sidebar.channels.voice': 'Voice',

  'admin.sidebar.agents': 'Agents',
	'admin.sidebar.agents.agent': 'Agent',
	'admin.sidebar.agents.teams': 'Teams',
	'admin.sidebar.agents.permissionGroups': 'Permission Groups',
	'admin.sidebar.agents.logs': 'Agent Logs',
	'admin.sidebar.agents.authSSO': 'Auth & SSO',
	'admin.sidebar.agents.settings': 'Settings',
	
	'admin.sidebar.help.helpCentre': 'Help Centre',
	'admin.sidebar.help.helpCentreSetup': 'Help Centre Setup',
	'admin.sidebar.help.knowledgeBase': 'Knowledge Base',
	'admin.sidebar.help.news': 'News',
	'admin.sidebar.help.downloads': 'Downloads',
	'admin.sidebar.help.community': 'Community',
	
	'admin.page.error': 'Something has gone wrong',
	'admin.page.loading': 'Loading',
	'admin.page.new': 'New',
	
  'admin_agents.agents.title': 'Agents',
  'admin_agents.agents.description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
}

export const testSidebarData = [
	{
		'sectionName': 'admin.sidebar.setup',
		'icon': 'cog',
		'navItems': [
			{
				'itemName': 'admin.sidebar.setup.dashboard',
				'url': '/dashboard',
			},			
			{
				'itemName': 'admin.sidebar.setup.wizard',
				'url': '/setup-wizard',
			},			
			{
				'itemName': 'admin.sidebar.setup.brands',
				'url': '/brands',
			},			
			{
				'itemName': 'admin.sidebar.setup.languagesAndLocales',
				'url': '/languagesAndLocales',
			},
			{
				'itemName': 'admin.sidebar.setup.businessHours',
				'url': '/businessHours',
			},
			{
				'itemName': 'admin.sidebar.setup.advancedSettings',
				'url': '/advancedSettings',
			},
		]
	},
	{
		'sectionName': 'admin.sidebar.channels',
		'navItems': [
			{
				'itemName': 'admin.sidebar.channels.email',
				'url': '/email',
			},			
			{
				'itemName': 'admin.sidebar.channels.forms',
				'url': '/forms',
			},			
			{
				'itemName': 'admin.sidebar.channels.messenger',
				'url': '/messenger',
				 'navItems': [
					{
						'itemName': 'admin.sidebar.channels.messenger.setup',
						'url': '/messenger-setup',
					},			
					{
						'itemName': 'admin.sidebar.channels.messenger.departments',
						'url': '/messenger-departments',
					},			
					{
						'itemName': 'admin.sidebar.channels.messenger.queues',
						'url': '/messenger-queues',
					},			
				],
			},
			{
				'itemName': 'admin.sidebar.channels.social',
				'url': '/social',
			},
			{
				'itemName': 'admin.sidebar.channels.voice',
				'url': '/voice',
			},
		]
	},
	{
		'sectionName': 'admin.sidebar.agents',
		'navItems': [
			{
				'itemName': 'admin.sidebar.agents.agent',
				'url': '/agent',
//				'metadataQuery': "query { page: agents_getAgentsPage { __typename, title, description, headerLinks { title, path }, newLink, views {... on InMemoryPageDataView {__typename, title, dataQuery, tableDef { columns { title, field, data { propName, path, value }, defaultShow }}}}}}"
				'metadataQuery': "query { page: agents_getAgentsPage { __typename, title, description, headerLinks { title, path }}}"
			},
			{
				'itemName': 'admin.sidebar.agents.teams',
				'url': '/teams',
			},
			{
				'itemName': 'admin.sidebar.agents.permissionGroups',
				'url': '/permissionGroups',
			},
			{
				'itemName': 'admin.sidebar.agents.logs',
				'url': '/logs',
			},
			{
				'itemName': 'admin.sidebar.agents.authSSO',
				'url': '/authSSO',
			},
			{
				'itemName': 'admin.sidebar.agents.settings',
				'url': '/settings',
			},
		]
	},
	{
		'sectionName': 'admin.sidebar.help.helpCentre',
		'navItems': [
			{
				'itemName': 'admin.sidebar.help.helpCentreSetup',
				'url': '/helpCentreSetup',
			},
			{
				'itemName': 'admin.sidebar.help.knowledgeBase',
				'url': '/knowledgeBase',
			},
			{
				'itemName': 'admin.sidebar.help.news',
				'url': '/news',
			},
			{
				'itemName': 'admin.sidebar.help.downloads',
				'url': '/downloads',
			},
			{
				'itemName': 'admin.sidebar.help.community',
				'url': '/community',
			},
		]
	},
]

export const testInitialData = {
  initial: {
    user: {
      locale: 'en'
    },
    sidebar: testSidebarData,
    translations: testTranslations,
  }
}

export const testTableColumns: Array<Column> = [
	{ id: 'selection' },
/*	{ title: 'Name',
		field: 'formattedNameAvatar',
		props: {
			name: 'name',
			avatar: 'url',
		},
		sorting: true,
	}, */
  { Header: 'Name', accessor: 'name' },
  { Header: 'Email', accessor: 'primary_email' },
];

/*export const testPageData: IPageData = {
  path: "/agents",
  pageType: "standardTable",
  pageProps: {
    title: "admin_agents.agents.title",
    description: "admin_agents.agents.description",
    tables: [
      {
        dataQuery: "query { agents_getAgents { id, name, primary_email }}",
				metadataQuery: "query { agents_getAgentsTableOptions ... }}",
				options: {
					pageSize: 1,
					search: true,
					selection: true,
				}
      }
    ]
  }
}*/

export const testView = {
	__typename: "Table",
	title: "Test table",
	dataQuery: "query { agents_getAgents { id, name, primary_email }}",
}

export const testPageData: IPageData = {
  __typename: "StandardDataPageData",
    title: "admin_agents.agents.title",
    description: "admin_agents.agents.description",
    headerLinks: [
			{
      	title: "admin_agents.page.link.login_log",
	      path: "./login-log",
			}
		]
/*    newLink
    views {
      ... on InMemoryPageDataView {
        __typename
        title
        dataQuery
        tableDef {
          columns {
            title
            field
            data {
              propName
              path
              value
            }
            defaultShow
          }
        }
      }
    }
  } */
}