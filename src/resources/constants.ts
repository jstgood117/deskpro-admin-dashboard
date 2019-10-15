import { IPageData, ITableColumn } from "./interfaces";

// export const dataSource = 'https://site40813.deskprodemo.com/admin-api/graphql';

export const testTranslations = {
  'admin.sidebar.setup': 'Setup',
  'admin.sidebar.setup.dashboard': 'Dashboard',
  'admin.sidebar.setup.wizard': 'Setup wizard',
  'admin.sidebar.setup.brands': 'Brands',
  'admin.sidebar.channels': 'Channels',
  'admin.sidebar.channels.email': 'Email',
  'admin.sidebar.channels.forms': 'Forms',
  'admin.sidebar.channels.messenger': 'Messenger',
  'admin.sidebar.channels.messenger.setup': 'Setup',
  'admin.sidebar.channels.messenger.departments': 'Departments',
  'admin.sidebar.channels.messenger.queues': 'Queues',
  'admin.sidebar.agents': 'Agents',
	'admin.sidebar.agents.agent': 'Agent',
	
	'admin.page.error': 'Something has gone wrong',
	'admin.page.loading': 'Loading',
	
  'admin.agents.page_title': 'Agents',
  'admin.agents.page_description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
}

export const testSidebarData = [
	{
		'sectionName': 'admin.sidebar.setup',
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
		]
	},
	{
		'sectionName': 'admin.sidebar.agents',
		'navItems': [
			{
				'itemName': 'admin.sidebar.agents.agent',
				'url': '/agent',
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

export const testTableColumns: ITableColumn[] = [
	{ title: 'Name',
		field: 'formattedNameAvatar',
		props: {
			name: 'name',
			avatar: 'url',
		},
		sort: true,
	},
  { title: 'Name', field: 'name', sort: true },
  { title: 'Email', field: 'primary_email', sort: false },
];

export const testTableData = {
  columns: testTableColumns,
}

export const testPageData: IPageData = {
  path: "/agents",
  pageType: "standardTable",
  pageProps: {
    title: "admin.agents.page_title",
    description: "admin.agents.page_description",
    tables: [
      {
        "dataQuery": "query { agents_getAgents { id, name, primary_email }}",
				"metadataQuery": "query { agents_getAgentsTableOptions ... } }",
				"pageSize": 3,
      }
    ]
  }
}
