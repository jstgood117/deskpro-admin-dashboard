import { IPageData } from "./interfaces";

// export const dataSource = 'https://site40813.deskprodemo.com/admin-api/graphql';

const testSidebarData = [
	{
		'sectionName': 'Setup',
		'navItems': [
			{
				'navItemName': 'Dashboard',
				'url': '/dashboard',
			},			
			{
				'navItemName': 'Setup wizard',
				'url': '/setup-wizard',
			},			
			{
				'navItemName': 'Brands',
				'url': '/brands',
			},			
		]
	},
	{
		'sectionName': 'Channels',
		'navItems': [
			{
				'navItemName': 'Email',
				'url': '/email',
			},			
			{
				'navItemName': 'Forms',
				'url': '/forms',
			},			
			{
				'navItemName': 'Messenger',
				'url': '/messenger',
				'navItems': [
					{
						'navItemName': 'Setup',
						'url': '/messenger-setup',
					},			
					{
						'navItemName': 'Departments',
						'url': '/messenger-departments',
					},			
					{
						'navItemName': 'Queues',
						'url': '/messenger-queues',
					},			
				],
			},			
		]
	},
	{
		'sectionName': 'Agents',
		'navItems': [
			{
				'navItemName': 'Agent',
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
  headerTitle: 'Agents',
  headerCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  sidebarData: testSidebarData,
  tableData: testTableData,
}