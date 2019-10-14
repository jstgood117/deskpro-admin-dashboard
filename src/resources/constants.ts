import { IPageData } from "./interfaces";

// export const dataSource = 'https://site40813.deskprodemo.com/admin-api/graphql';

export const testTranslations = {
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
  agentsTitle: 'Agents',
  agentsCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
}

const testSidebarData = [
	{
		'sectionName': 'sidebarSetup',
		'navItems': [
			{
				'navItemName': 'sidebarSetupDashboard',
				'url': '/dashboard',
			},			
			{
				'navItemName': 'sidebarSetupSetupWizard',
				'url': '/setup-wizard',
			},			
			{
				'navItemName': 'sidebarSetupBrands',
				'url': '/brands',
			},			
		]
	},
	{
		'sectionName': 'sidebarChannels',
		'navItems': [
			{
				'navItemName': 'sidebarChannelsEmail',
				'url': '/email',
			},			
			{
				'navItemName': 'sidebarChannelsForms',
				'url': '/forms',
			},			
			{
				'navItemName': 'sidebarChannelsMessenger',
				'url': '/messenger',
				'navItems': [
					{
						'navItemName': 'sidebarChannelsMessengerSetup',
						'url': '/messenger-setup',
					},			
					{
						'navItemName': 'sidebarChannelsMessengerDepartments',
						'url': '/messenger-departments',
					},			
					{
						'navItemName': 'sidebarChannelsMessengerQueues',
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
				'navItemName': 'sidebarAgentsAgent',
				'url': '/agent',
			},			
		]
	},
]

const testTableColumns = [
  { title: 'Name', field: 'formattedNameAvatar' },
  { title: 'Email', field: 'primary_email' },
];

const testTableData = {
  columns: testTableColumns,
}

export const testPageData: IPageData = {
  id: 'agents',
  headerTitle: 'agentsTitle',
  headerCopy: 'agentsCopy',
  sidebarData: testSidebarData,
  tableData: testTableData,
}