import { IPageData } from "./interfaces";

// export const dataSource = 'https://site40813.deskprodemo.com/admin-api/graphql';

const testTranslations = {
  sidebarSetup: 'Setup',
  sidebarSetupDashboard: 'Dashboard',
  sidebarSetupSetupWizard: 'Setup wizard',
  sidebarSetupBrands: 'Brands',
  sidebarChannels: 'Channels',
  sidebarChannelsEmail: 'Email',
  sidebarChannelsForms: 'Forms',
  sidebarChannelsMessenger: 'Messenger',
  sidebarChannelsMessengerSetup: 'Setup',
  sidebarChannelsMessengerDepartments: 'Departments',
  sidebarChannelsMessengerQueues: 'Queues',
  sidebarAgents: 'Agents',
  sidebarAgentsAgent: 'Agent',
  // Agents page
  'admin.agents.page_title': 'Agents',
  'admin.agents.page_description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
}

export const testSidebarData = [
	{
		'sectionName': 'sidebarSetup',
		'navItems': [
			{
				'itemName': 'sidebarSetupDashboard',
				'url': '/dashboard',
			},			
			{
				'itemName': 'sidebarSetupSetupWizard',
				'url': '/setup-wizard',
			},			
			{
				'itemName': 'sidebarSetupBrands',
				'url': '/brands',
			},			
		]
	},
	{
		'sectionName': 'sidebarChannels',
		'navItems': [
			{
				'itemName': 'sidebarChannelsEmail',
				'url': '/email',
			},			
			{
				'itemName': 'sidebarChannelsForms',
				'url': '/forms',
			},			
			{
				'itemName': 'sidebarChannelsMessenger',
				'navItems': [
					{
						'itemName': 'sidebarChannelsMessengerSetup',
						'url': '/messenger-setup',
					},			
					{
						'itemName': 'sidebarChannelsMessengerDepartments',
						'url': '/messenger-departments',
					},			
					{
						'itemName': 'sidebarChannelsMessengerQueues',
						'url': '/messenger-queues',
					},			
				],
			},			
		]
	},
	{
		'sectionName': 'sidebarAgents',
		'navItems': [
			{
				'itemName': 'sidebarAgentsAgent',
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

export const testTableColumns = [
//  { title: 'Name', field: 'formattedNameAvatar', sorting: true },
  { title: 'Name', field: 'name', sorting: true },
  { title: 'Email', field: 'primary_email', sorting: false },
];

const testTableData = {
  columns: testTableColumns,
}

export const testPageData: IPageData = {
  "path": "/agents",
  "pageType": "standardTable",
  "pageProps": {
    "title": "admin.agents.page_title",
    "description": "admin.agents.page_description",
    "tables": [
      {
        "dataQuery": "query { agents_getAgents { id, name, primary_email }}",
        "metadataQuery": "query { agents_getAgentsTableOptions ... } }" // returns testTableMeta into Tables component
      }
    ]
  }
}
