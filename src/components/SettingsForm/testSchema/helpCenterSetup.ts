import { API_SettingsUiElement } from '../../../codegen/types';

export const uiSchema: {
  elements: API_SettingsUiElement & { type: string }[];
} = {
  elements: [
    {
      title: 'Help Center Setup',
      type: 'feature_section',
      elements: [
        {
          title: 'Brand Settings',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              elements: [
                {
                  type: 'field',
                  title: 'Brand name',
                  description: 'This is the actual name of your brand.',
                  field: {
                    type: 'input',
                    id: 'help_center_settings_brand_name'
                  },
                  info: [
                    {
                      type: 'button',
                      title: 'New brand',
                      url: 'http://www.test.com',
                      icon: 'view'
                    }
                  ]
                },
                {
                  type: 'field',
                  title: 'Brand logo',
                  field: {
                    type: 'input',
                    id: 'help_center_settings_brand_logo'
                  }
                },
                {
                  type: 'field',
                  title: 'Favicon',
                  field: {
                    type: 'input',
                    id: 'help_center_settings_brand_favicon'
                  }
                },
                {
                  type: 'field',
                  title: 'Default brand color',
                  field: {
                    type: 'input',
                    id: 'help_center_settings_brand_color'
                  }
                }
              ]
            }
          ]
        },
        {
          title: 'Website',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              elements: [
                {
                  type: 'field',
                  title: 'Website name',
                  description: 'This is the name of your main website.',
                  field: {
                    type: 'input',
                    id: 'help_center_settings_website_name'
                  }
                },
                {
                  type: 'field',
                  title: 'Website URL',
                  description: 'This is the URL to your main website.',
                  field: {
                    type: 'input',
                    id: 'help_center_settings_website_url'
                  }
                }
              ]
            }
          ]
        },
        {
          title: 'Helpdesk',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              elements: [
                {
                  type: 'field',
                  title: 'Helpdesk name',
                  description:
                    'This is the name of your helpdesk. The name is displayed to users in their browser window title, and is also used in the default footer email template.',
                  field: {
                    type: 'input',
                    id: 'help_center_settings_helpdesk_name'
                  }
                },
                {
                  type: 'alert',
                  description:
                    'Important: you must edit your DNS to create a CNAME record to testnew001.deskpro.com/admin/'
                },
                {
                  type: 'field',
                  title: 'Helpdesk slug',
                  field: {
                    type: 'input',
                    id: 'help_center_settings_helpdesk_slug'
                  }
                }
              ]
            }
          ]
        },
        {
          title: 'Help Center',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              info: [
                {
                  type: 'button',
                  title: 'Help Center sections',
                  url: 'http://www.test.com',
                  icon: 'view'
                }
              ],
              elements: [
                {
                  type: 'vertical_group',
                  title: 'Knowledgebase',
                  showOn: 'help_center_settings_knowledgebase',
                  description:
                    'When enabled, the Knowledgebase section of your Help Center will be accessible. Users will be able to view and subscribe to articles.',
                  field: {
                    type: 'toggle',
                    id: 'help_center_settings_knowledgebase'
                  },
                  elements: [],
                  articles: 'featuredArticles'
                },
                {
                  type: 'vertical_group',
                  title: 'News',
                  showOn: 'help_center_settings_news',
                  description:
                    'When enabled, the News section of your Help Center will be accessible. Users will be able to view and subscribe to News posts.',
                  field: {
                    type: 'toggle',
                    id: 'help_center_settings_news'
                  },
                  elements: [],
                  articles: 'featuredArticles'
                },
                {
                  type: 'vertical_group',
                  title: 'Downloads',
                  showOn: 'help_center_settings_downloads',
                  description:
                    'When enabled, the Downloads section of your Help Center will be accessible. Users will be able to view and subscribe to documents.',
                  field: {
                    type: 'toggle',
                    id: 'help_center_settings_downloads'
                  },
                  elements: [],
                  articles: 'featuredArticles'
                },
                {
                  type: 'vertical_group',
                  title: 'Community',
                  showOn: 'help_center_settings_community',
                  description:
                    'When enabled, the Community section of your Help Center will be accessible. Users will be able to view and subscribe to Topics.',
                  field: {
                    type: 'toggle',
                    id: 'help_center_settings_community'
                  },
                  elements: [],
                  articles: 'featuredArticles'
                }
              ]
            }
          ]
        },
        {
          title: 'Content settings',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              elements: [
                {
                  type: 'vertical_group',
                  title: 'Show user ratings publicly',
                  showOn: 'help_center_settings_show_user_ratings_publicly',
                  field: {
                    type: 'toggle',
                    id: 'help_center_settings_show_user_ratings_publicly'
                  },
                  elements: []
                },
                {
                  type: 'vertical_group',
                  title: 'Allow comments on published content',
                  showOn: 'help_center_settings_allow_comments_content',
                  description:
                    'Enable comments on articles, news, and downloads. (This setting does not affect Community; discussions on community topics is always enabled).',
                  field: {
                    type: 'toggle',
                    id: 'help_center_settings_allow_comments_content'
                  },
                  elements: []
                }
              ]
            }
          ]
        },
        {
          title: 'CAPTCHA',
          type: 'page_section',
          elements: [
            {
              type: 'group',
              elements: [
                {
                  type: 'field',
                  field: {
                    type: 'checkbox',
                    id: 'test_unit_checkbox_1',
                    value: 'new_tickets'
                  }
                },
                {
                  type: 'horizontal_group',
                  elements: [
                    {
                      type: 'label',
                      label: 'Testing this out'
                    },
                    {
                      type: 'field',
                      field: {
                        type: 'input',
                        id: 'test_unit_another_input_1'
                      }
                    }
                  ]
                }
              ]
            },
            {
              type: 'group',
              elements: [
                {
                  type: 'field',
                  field: {
                    type: 'checkbox',
                    id: 'test_unit_checkbox_2',
                    value: 'new_comments'
                  }
                },
                {
                  type: 'horizontal_group',
                  elements: [
                    {
                      type: 'label',
                      label: 'New Comments'
                    },
                    {
                      type: 'field',
                      field: {
                        type: 'input',
                        id: 'test_unit_another_input_2'
                      }
                    }
                  ]
                }
              ]
            },
            {
              type: 'group',
              elements: [
                {
                  type: 'field',
                  field: {
                    type: 'checkbox',
                    id: 'test_unit_checkbox_3',
                    value: 'new_community_topics'
                  }
                },
                {
                  type: 'horizontal_group',
                  elements: [
                    {
                      type: 'label',
                      label: 'New Community Topics'
                    },
                    {
                      type: 'field',
                      field: {
                        type: 'input',
                        id: 'test_unit_another_input_3'
                      }
                    }
                  ]
                }
              ]
            },
            {
              type: 'group',
              elements: [
                {
                  type: 'field',
                  field: {
                    type: 'checkbox',
                    id: 'test_unit_checkbox_4',
                    value: 'registration'
                  }
                },
                {
                  type: 'horizontal_group',
                  elements: [
                    {
                      type: 'label',
                      label: 'Registration'
                    },
                    {
                      type: 'field',
                      field: {
                        type: 'input',
                        id: 'test_unit_another_input_4'
                      }
                    }
                  ]
                }
              ]
            },
            {
              type: 'group',
              elements: [
                {
                  type: 'field',
                  field: {
                    type: 'checkbox',
                    id: 'test_unit_checkbox_5',
                    value: 'sharing_content'
                  }
                },
                {
                  type: 'horizontal_group',
                  elements: [
                    {
                      type: 'label',
                      label: 'Sharing Content'
                    },
                    {
                      type: 'field',
                      field: {
                        type: 'input',
                        id: 'test_unit_another_input_5'
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const jsonSchema: any = {
  help_center_settings_brand_name: 'Brand 1',
  help_center_settings_brand_logo: '',
  help_center_settings_brand_favicon: '',
  help_center_settings_brand_color: '#c4c4c4',
  help_center_settings_website_name: 'Brand1',
  help_center_settings_website_url: 'https://www.brand1.co.uk',
  help_center_settings_helpdesk_name: 'Brand 1 Support Centre',
  help_center_settings_helpdesk_slug: 'james-test',
  help_center_settings_knowledgebase: true,
  help_center_settings_news: true,
  help_center_settings_downloads: true,
  help_center_settings_community: true,
  help_center_settings_show_user_ratings_publicly: true,
  help_center_settings_allow_comments_content: true,
  test_unit_checkbox_1: ['new_tickets'],
  test_unit_another_input_1: 'another',
  test_unit_checkbox_2: ['new_comments'],
  test_unit_another_input_2: 'hello',
  test_unit_checkbox_3: ['new_community_topics'],
  test_unit_another_input_3: 'hello',
  test_unit_checkbox_4: ['registration'],
  test_unit_another_input_4: 'hello',
  test_unit_checkbox_5: ['sharing_content'],
  test_unit_another_input_5: 'hello'
};
