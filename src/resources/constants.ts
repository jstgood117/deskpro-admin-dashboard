import { IPageData } from './interfaces';
import { Column } from 'react-table';

export const testTranslations = {
  'test': 'Test',
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

  'admin.tabbar.bar': 'Property',
  'admin.tabbar.bar1': 'Property1',
  'admin.tabbar.bar2': 'Property2',
  'admin.tabbar.bar3': 'Property3',

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
  'admin_agents.agents.description':
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
};

export const testSidebarData = [
  {
    sectionName: 'admin.sidebar.setup',
    icon: 'cog',
    navItems: [
      {
        itemName: 'admin.sidebar.setup.dashboard',
        path: '/dashboard'
      },
      {
        itemName: 'admin.sidebar.setup.wizard',
        path: '/setup-wizard'
      },
      {
        itemName: 'admin.sidebar.setup.brands',
        path: '/brands'
      },
      {
        itemName: 'admin.sidebar.setup.languagesAndLocales',
        path: '/languagesAndLocales'
      },
      {
        itemName: 'admin.sidebar.setup.businessHours',
        path: '/businessHours'
      },
      {
        itemName: 'admin.sidebar.setup.advancedSettings',
        path: '/advancedSettings'
      }
    ]
  },
  {
    sectionName: 'admin.sidebar.channels',
    navItems: [
      {
        itemName: 'admin.sidebar.channels.email',
        path: '/email'
      },
      {
        itemName: 'admin.sidebar.channels.forms',
        path: '/forms'
      },
      {
        itemName: 'admin.sidebar.channels.messenger',
        path: '/messenger',
        navItems: [
          {
            itemName: 'admin.sidebar.channels.messenger.setup',
            path: '/messenger-setup'
          },
          {
            itemName: 'admin.sidebar.channels.messenger.departments',
            path: '/messenger-departments'
          },
          {
            itemName: 'admin.sidebar.channels.messenger.queues',
            path: '/messenger-queues'
          }
        ]
      },
      {
        itemName: 'admin.sidebar.channels.social',
        path: '/social'
      },
      {
        itemName: 'admin.sidebar.channels.voice',
        path: '/voice'
      }
    ]
  },
  {
    sectionName: 'admin.sidebar.agents',
    navItems: [
      {
        itemName: 'admin.sidebar.agents.agent',
        path: '/agent',
        metadataQuery:
          'query { page: agents_getAgentsPage { __typename, title, description, headerLinks { title, path }}}'
      },
      {
        itemName: 'admin.sidebar.agents.teams',
        path: '/teams'
      },
      {
        itemName: 'admin.sidebar.agents.permissionGroups',
        path: '/permissionGroups'
      },
      {
        itemName: 'admin.sidebar.agents.logs',
        path: '/logs'
      },
      {
        itemName: 'admin.sidebar.agents.authSSO',
        path: '/authSSO'
      },
      {
        itemName: 'admin.sidebar.agents.settings',
        path: '/settings'
      }
    ]
  },
  {
    sectionName: 'admin.sidebar.help.helpCentre',
    navItems: [
      {
        itemName: 'admin.sidebar.help.helpCentreSetup',
        path: '/helpCentreSetup'
      },
      {
        itemName: 'admin.sidebar.help.knowledgeBase',
        path: '/knowledgeBase'
      },
      {
        itemName: 'admin.sidebar.help.news',
        path: '/news'
      },
      {
        itemName: 'admin.sidebar.help.downloads',
        path: '/downloads'
      },
      {
        itemName: 'admin.sidebar.help.community',
        path: '/community'
      }
    ]
  }
];

export const testInitialData = {
  initial: {
    user: {
      locale: 'en'
    },
    sidebar: testSidebarData,
    translations: testTranslations
  }
};

export const testTableColumns: Array<Column> = [
  { id: 'selection', width: 20 },
  /*	{ title: 'Name',
		field: 'formattedNameAvatar',
		props: {
			name: 'name',
			avatar: 'url',
		},
		sorting: true,
	}, */
  { Header: 'Name', accessor: 'name' },
  { Header: 'Email', accessor: 'email' },
  { Header: 'Phone', accessor: 'phone' },
  { Header: 'Access', accessor: 'access' },
  { Header: 'Team', accessor: 'team' },
  { Header: 'Permission Group', accessor: 'permission_group' }
];

export const testTableData = [
  {
    avatar:
      'https://images.unsplash.com/photo-1542080681-b52d382432af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4000&q=80',
    name: 'Aaron Wood',
    email: 'aaron.wood@example.net',
    phone: '07400123456',
    access: 'Administrator',
    team: 'Accounting',
    permission_group: 'Support Team',
    id: 12345
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    name: 'Anthony Martin',
    email: 'anthony.martin@example.net',
    phone: '07400123451',
    access: 'Reports Administrator',
    team: 'Business',
    permission_group: 'All Non-Destructive Permissions',
    id: 34513
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    name: 'Braydon Jackson',
    email: 'braydon.jackson@example.com',
    phone: '07100123456',
    access: 'Administrator',
    team: 'Design',
    permission_group: 'Sales Team',
    id: 45783
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1549459685-701565fe9ff1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=950&q=80',
    name: 'Cynthia Clarke',
    email: 'cynthia.c@example.com',
    phone: '07123123456',
    access: 'Administrator',
    team: 'HR',
    permission_group: 'Support Team',
    id: 23561
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    name: 'Ewald Rolfson',
    email: 'rolfson678@example.com',
    phone: '07200654321',
    access: 'Administrator',
    team: 'Sales',
    permission_group: 'All Permissions',
    id: 34679
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1002&q=80',
    name: 'Georgiana Wolff',
    email: 'georgiana.wolff@example.org',
    phone: '07100123456',
    access: 'Administrator',
    team: 'Finance',
    permission_group: 'All Non-Destructive Permissions',
    id: 95604
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    name: 'Jacinto Jacobson',
    email: 'jacinto.jacob@example.org',
    phone: '07123123456',
    access: 'Administrator',
    team: 'Insurance',
    permission_group: 'All Permissions',
    id: 34672
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1495147334217-fcb3445babd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    name: 'John Doe',
    email: 'john.doe321@example.com',
    phone: '07200654321',
    access: 'Administrator',
    team: 'Marketing',
    permission_group: 'Support Team',
    id: 87642
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    name: 'Joseph Strosin',
    email: 'joseph.strosin@example.com',
    phone: '07100123456',
    access: 'Reports Administrator',
    team: 'Support',
    permission_group: 'All Permissions',
    id: 45726
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4000&q=80',
    name: 'Kayley Hamill',
    email: 'rocio.ratke@example.net',
    phone: '07123123456',
    access: 'Reports Administrator',
    team: 'IT',
    permission_group: 'All Non-Destructive Permissions',
    id: 34567
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    name: 'Leo Walker',
    email: 'walker.leo@example.net',
    phone: '07200654321',
    access: 'Administrator',
    team: 'Enrollment',
    permission_group: 'All Non-Destructive Permissions',
    id: 13462
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1550639524-a6f58345a2ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=944&q=80',
    name: 'Mariliou Weissnat',
    email: 'help@example.org',
    phone: '07330123456',
    access: 'Administrator',
    team: 'Support',
    permission_group: 'All Non-Destructive Permissions',
    id: 24672
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=944&q=80',
    name: "Melvin O'Conner",
    email: 'melvin.oconner@example.com',
    phone: '07443123456',
    access: 'Administrator',
    team: 'Support',
    permission_group: 'All Permissions',
    id: 24662
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1543246239-7ae3ded686ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    name: 'Noah Williams',
    email: 'noah.williams@example.com',
    phone: '07550654321',
    access: 'Administrator',
    team: 'Sales',
    permission_group: 'All Permissions',
    id: 23578
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1552237057-adf508b23140?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    name: 'Oceane Bins',
    email: 'oceane.bins@example.net',
    phone: '07890123456',
    access: 'Reports Administrator',
    team: 'Sales',
    permission_group: 'All Permissions',
    id: 56894
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
    name: 'Philip Thompson',
    email: 'philip.t@example.net',
    phone: '07167123456',
    access: 'Reports Administrator',
    team: 'IT',
    permission_group: 'All Permissions',
    id: 96744
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1542345812-d98b5cd6cf98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
    name: 'Randy Jones',
    email: 'randy@example.net',
    phone: '07200654344',
    access: 'Reports Administrator',
    team: 'Insurance',
    permission_group: 'All Permissions',
    id: 34678
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80',
    name: 'Thora Grady',
    email: 'thora@example.net',
    phone: '07100123452',
    access: 'Administrator',
    team: 'Insurance',
    permission_group: 'All Non-Destructive Permissions',
    id: 24573
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1542513217-0b0eedf7005d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
    name: 'Uriel Smith',
    email: 'uriel.smith@example.org',
    phone: '07890123887',
    access: 'Administrator',
    team: 'Civil',
    permission_group: 'All Permissions',
    id: 24688
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1513732822839-24f03a92f633?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    name: 'Vanessa Johnson',
    email: 'vanessa.johnson@example.net',
    phone: '07447783456',
    access: 'Reports Administrator',
    team: 'Marketing',
    permission_group: 'All Non-Destructive Permissions',
    id: 97545
  }
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
  __typename: 'Table',
  title: 'Test table',
  dataQuery: 'query { agents_getAgents { id, name, primary_email }}'
};

export const testPageData: IPageData = {
  __typename: 'StandardDataPageData',
  title: 'admin_agents.agents.title',
  description: 'admin_agents.agents.description',
  headerLinks: [
    {
      title: 'admin_agents.page.link.login_log',
      path: './login-log'
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
};