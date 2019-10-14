export const dataSource = 'https://site40813.deskprodemo.com/admin-api/graphql';

export const testSidebarData = [
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
