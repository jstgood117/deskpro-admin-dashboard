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