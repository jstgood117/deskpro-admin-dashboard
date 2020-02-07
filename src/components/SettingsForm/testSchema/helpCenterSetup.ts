import { API_SettingsUiElement } from '../../../codegen/types';

export const uiSchema: {
  elements: API_SettingsUiElement & { type: string }[];
} = {
  elements: [
    {
      type: 'feature_section',
      brandButtonGroup: true,
      field: {
        type: 'singleSelect',
        selectType: 'large',
        options: [
          {
            label: 'Help Center Setup',
            value: 'Help Center Setup'
          }
        ]
      },
      elements: [
        {
          title: 'Brand Settings',
          type: 'page_section',
          className: 'brand',
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
                      icon: 'ic-save'
                    }
                  ]
                },
                {
                  type: 'field',
                  title: 'Brand logo',
                  field: {
                    type: 'fileUpload',
                    id: 'help_center_settings_brand_logo'
                  }
                },
                {
                  type: 'field',
                  title: 'Favicon',
                  field: {
                    type: 'fileUpload',
                    id: 'help_center_settings_brand_favicon'
                  }
                },
                {
                  type: 'field',
                  title: 'Default brand color',
                  field: {
                    type: 'colorPicker',
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
          className: 'website',
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
          className: 'helpdesk',
          elements: [
            {
              type: 'vertical_group',
              elements: [
                {
                  type: 'field',
                  title: 'Helpdesk name',
                  description:
                    'This is the name of your helpdesk. The name is displayed to users in their browser window title, and is also used in the default footer email template.',
                  className: 'helpdesk-name',
                  field: {
                    type: 'input',
                    id: 'help_center_settings_helpdesk_name'
                  }
                },
                {
                  type: 'field',
                  title: 'Domain',
                  className: 'domain',
                  field: {
                    type: 'radioGroup',
                    className: 'domain',
                    id: 'help_center_settings_helpdesk_domain',
                    options: [
                      { label: 'Deskpro Domain', value: 'deskpro' },
                      { label: 'Custom Domain', value: 'custom' }
                    ]
                  },
                  info: [
                    {
                      type: 'button',
                      title: 'Custom domain',
                      url: 'http://www.test.com',
                      icon: 'ic-save'
                    }
                  ]
                },
                {
                  type: 'group',
                  className: 'domain-custom-group',
                  elements: [
                    {
                      type: 'field',
                      title: 'Helpdesk URL',
                      className: 'domain-custom',
                      field: {
                        type: 'input',
                        className: 'domain-custom',
                        id: 'help_center_settings_helpdesk_domain_custom'
                      }
                    },
                    {
                      type: 'alert',
                      className: 'domain-custom',
                      description:
                        'Important: you must edit your DNS to create a ```CNAME``` record to ```testnew001.deskpro.com/admin/```'
                    }
                  ]
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
            },
            {
              type: 'vertical_group',
              title: 'Force HTTPS',
              tooltip:
                'Automatically redirect users to the correct https://URL if they try to access the helpdesk using http://.',
              showOn: 'help_center_settings_https',
              field: {
                type: 'toggle',
                id: 'help_center_settings_https'
              },
              elements: []
            },
            {
              type: 'settings-data',
              options: {
                type: 'header-card'
              }
            }
          ]
        },
        {
          title: 'Help Center',
          type: 'page_section',
          className: 'help-center',
          elements: [
            {
              type: 'vertical_group',
              title: 'Knowledgebase',
              showOn: 'help_center_settings_knowledgebase',
              description:
                'When enabled, the [Knowledgebase](http://www.test.com) section of your Help Center will be accessible. Users will be able to view and subscribe to articles.',
              field: {
                type: 'toggle',
                id: 'help_center_settings_knowledgebase'
              },
              elements: [],
              articles: 'featuredArticles',
              info: [
                {
                  type: 'button',
                  title: 'Help Center sections',
                  url: 'http://www.test.com',
                  icon: 'ic-save'
                }
              ]
            },
            {
              type: 'vertical_group',
              title: 'News',
              showOn: 'help_center_settings_news',
              description:
                'When enabled, the [News](http://www.test.com) section of your Help Center will be accessible. Users will be able to view and subscribe to News posts.',
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
                'When enabled, the [Downloads](http://www.test.com) section of your Help Center will be accessible. Users will be able to view and subscribe to documents.',
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
                'When enabled, the [Community](http://www.test.com) section of your Help Center will be accessible. Users will be able to view and subscribe to Topics.',
              field: {
                type: 'toggle',
                id: 'help_center_settings_community'
              },
              elements: [],
              articles: 'featuredArticles'
            }
          ]
        },
        {
          title: 'Content settings',
          type: 'page_section',
          className: 'content-settings',
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
        },
        {
          title: 'CAPTCHA',
          type: 'page_section',
          className: 'captcha',
          elements: [
            {
              type: 'vertical_group',
              className: 'captcha',
              field: {
                type: 'radioGroup',
                id: 'help_center_settings_captcha',
                className: 'captcha',
                options: [
                  {
                    label: 'Use Deskpro’s built-in CAPTCHA system',
                    value: 'deskpro',
                    description:
                      'Deskpro comes with an image-based CAPTCHA system that is suitable for most helpdesks.'
                  },
                  {
                    label: 'Use reCAPTCHA (from Google)',
                    value: 'google',
                    description: `
reCAPTCHA is a service operated by Google, reCAPTCHA uses advanced techniques to detect abusive users and it may be more effective than Deskpro’s built-in system.

To use reCAPTCHA, you must register for a free API key. [Google reCAPTCHA](https://google.com/recaptcha)
`
                  }
                ]
              },
              info: [
                {
                  type: 'button',
                  title: 'CAPTCHA',
                  url: 'http://www.test.com',
                  icon: 'ic-save',
                  className: 'captcha'
                }
              ],
              elements: [
                {
                  type: 'group',
                  dependenceOn: {
                    field: 'help_center_settings_captcha',
                    value: 'google'
                  },
                  elements: [
                    {
                      type: 'field',
                      title: 'Site Key',
                      field: {
                        type: 'input',
                        id: 'help_center_settings_captcha_site_key'
                      }
                    },
                    {
                      type: 'field',
                      title: 'Secret Key',
                      field: {
                        type: 'input',
                        id: 'help_center_settings_captcha_secret_key'
                      }
                    }
                  ]
                },
                {
                  type: 'vertical_group',
                  className: 'captcha-features',
                  title: 'CAPTCHA',
                  description:
                    'Normally CAPTCHA is only displayed in response to an user going over your defined rate limits. However, to reduce abuse/spam, you can choose to always enable CAPTCHA on certain features.',
                  info: [
                    {
                      type: 'button',
                      title: 'Rate limiting',
                      url: 'http://www.test.com',
                      icon: 'ic-rate-limiting',
                      className: 'rate-limiting'
                    }
                  ],
                  elements: [
                    {
                      type: 'group',
                      elements: [
                        {
                          type: 'field',
                          field: {
                            type: 'checkbox',
                            id: 'help_center_settings_captcha_enable_1',
                            value: 'new_tickets'
                          }
                        },
                        {
                          type: 'horizontal_group',
                          elements: [
                            {
                              type: 'label',
                              label: 'Testing this out',
                              id: 'help_center_settings_captcha_enable_1'
                            },
                            {
                              type: 'field',
                              field: {
                                id: 'help_center_settings_captcha_unit_1',
                                type: 'singleSelect',
                                selectType: 'primary',
                                options: [
                                  {
                                    label: 'for guests',
                                    value: 'guests'
                                  },
                                  {
                                    label: 'for everyone',
                                    value: 'everyone'
                                  },
                                  {
                                    label: 'based on rate limits',
                                    value: 'rate-limits'
                                  }
                                ]
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
                            id: 'help_center_settings_captcha_enable_2',
                            value: 'new_comments'
                          }
                        },
                        {
                          type: 'horizontal_group',
                          elements: [
                            {
                              type: 'label',
                              label: 'New Comments',
                              id: 'help_center_settings_captcha_enable_2'
                            },
                            {
                              type: 'field',
                              field: {
                                id: 'help_center_settings_captcha_unit_2',
                                type: 'singleSelect',
                                selectType: 'primary',
                                options: [
                                  {
                                    label: 'for guests',
                                    value: 'guests'
                                  },
                                  {
                                    label: 'for everyone',
                                    value: 'everyone'
                                  },
                                  {
                                    label: 'based on rate limits',
                                    value: 'rate-limits'
                                  }
                                ]
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
                            id: 'help_center_settings_captcha_enable_3',
                            value: 'new_community_topics'
                          }
                        },
                        {
                          type: 'horizontal_group',
                          elements: [
                            {
                              type: 'label',
                              label: 'New Community Topics',
                              id: 'help_center_settings_captcha_enable_3'
                            },
                            {
                              type: 'field',
                              field: {
                                id: 'help_center_settings_captcha_unit_3',
                                type: 'singleSelect',
                                selectType: 'primary',
                                options: [
                                  {
                                    label: 'for guests',
                                    value: 'guests'
                                  },
                                  {
                                    label: 'for everyone',
                                    value: 'everyone'
                                  },
                                  {
                                    label: 'based on rate limits',
                                    value: 'rate-limits'
                                  }
                                ]
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
                            id: 'help_center_settings_captcha_enable_4',
                            value: 'registration'
                          }
                        },
                        {
                          type: 'horizontal_group',
                          elements: [
                            {
                              type: 'label',
                              label: 'Registration',
                              id: 'help_center_settings_captcha_enable_4'
                            },
                            {
                              type: 'field',
                              field: {
                                id: 'help_center_settings_captcha_unit_4',
                                type: 'singleSelect',
                                selectType: 'primary',
                                options: [
                                  {
                                    label: 'for guests',
                                    value: 'guests'
                                  },
                                  {
                                    label: 'for everyone',
                                    value: 'everyone'
                                  },
                                  {
                                    label: 'based on rate limits',
                                    value: 'rate-limits'
                                  }
                                ]
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
                            id: 'help_center_settings_captcha_enable_5',
                            value: 'sharing_content'
                          }
                        },
                        {
                          type: 'horizontal_group',
                          elements: [
                            {
                              type: 'label',
                              label: 'Sharing Content',
                              id: 'help_center_settings_captcha_enable_5'
                            },
                            {
                              type: 'field',
                              field: {
                                id: 'help_center_settings_captcha_unit_5',
                                type: 'singleSelect',
                                selectType: 'primary',
                                options: [
                                  {
                                    label: 'for guests',
                                    value: 'guests'
                                  },
                                  {
                                    label: 'for everyone',
                                    value: 'everyone'
                                  },
                                  {
                                    label: 'based on rate limits',
                                    value: 'rate-limits'
                                  }
                                ]
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
        }
      ]
    }
  ]
};

export const jsonSchema: any = {
  brand1_help_center_settings_brand_name: 'Brand 1',
  brand1_help_center_settings_brand_logo: '',
  brand1_help_center_settings_brand_favicon: '',
  brand1_help_center_settings_brand_color: '#c4c4c4',
  brand1_help_center_settings_website_name: 'Brand1',
  brand1_help_center_settings_website_url: 'https://www.brand1.co.uk',
  brand1_help_center_settings_helpdesk_name: 'Brand 1 Support Centre',
  brand1_help_center_settings_helpdesk_slug: 'james-test',
  brand1_help_center_settings_helpdesk_domain: 'custom',
  brand1_help_center_settings_helpdesk_domain_custom:
    'testnew001-test.deskpro.net',
  brand1_help_center_settings_https: true,
  brand1_help_center_settings_knowledgebase: true,
  brand1_help_center_settings_news: true,
  brand1_help_center_settings_downloads: true,
  brand1_help_center_settings_community: true,
  brand1_help_center_settings_show_user_ratings_publicly: true,
  brand1_help_center_settings_allow_comments_content: true,
  brand1_help_center_settings_captcha: 'deskpro',
  brand1_help_center_settings_captcha_enable_1: ['new_tickets'],
  brand1_help_center_settings_captcha_unit_1: {
    label: 'for guests',
    value: 'guests'
  },
  brand1_help_center_settings_captcha_enable_2: ['new_comments'],
  brand1_help_center_settings_captcha_unit_2: {
    label: 'for everyone',
    value: 'everyone'
  },
  brand1_help_center_settings_captcha_enable_3: ['new_community_topics'],
  brand1_help_center_settings_captcha_unit_3: {
    label: 'for everyone',
    value: 'everyone'
  },
  brand1_help_center_settings_captcha_enable_4: ['registration'],
  brand1_help_center_settings_captcha_unit_4: {
    label: 'based on rate limits',
    value: 'rate-limits'
  },
  brand1_help_center_settings_captcha_enable_5: ['sharing_content'],
  brand1_help_center_settings_captcha_unit_5: {
    label: 'based on rate limits',
    value: 'rate-limits'
  },

  brand2_help_center_settings_brand_name: 'Brand 2',
  brand2_help_center_settings_brand_logo: '',
  brand2_help_center_settings_brand_favicon: '',
  brand2_help_center_settings_brand_color: '#c4c4c4',
  brand2_help_center_settings_website_name: 'Brand2',
  brand2_help_center_settings_website_url: 'https://www.brand2.co.uk',
  brand2_help_center_settings_helpdesk_name: 'Brand 2 Support Centre',
  brand2_help_center_settings_helpdesk_slug: 'james-test',
  brand2_help_center_settings_helpdesk_domain: 'custom',
  brand2_help_center_settings_helpdesk_domain_custom:
    'testnew001-test.deskpro.net',
  brand2_help_center_settings_https: true,
  brand2_help_center_settings_knowledgebase: true,
  brand2_help_center_settings_news: true,
  brand2_help_center_settings_downloads: true,
  brand2_help_center_settings_community: true,
  brand2_help_center_settings_show_user_ratings_publicly: true,
  brand2_help_center_settings_allow_comments_content: true,
  brand2_help_center_settings_captcha: 'deskpro',
  brand2_help_center_settings_captcha_enable_1: ['new_tickets'],
  brand2_help_center_settings_captcha_unit_1: {
    label: 'for guests',
    value: 'guests'
  },
  brand2_help_center_settings_captcha_enable_2: ['new_comments'],
  brand2_help_center_settings_captcha_unit_2: {
    label: 'for everyone',
    value: 'everyone'
  },
  brand2_help_center_settings_captcha_enable_3: ['new_community_topics'],
  brand2_help_center_settings_captcha_unit_3: {
    label: 'for everyone',
    value: 'everyone'
  },
  brand2_help_center_settings_captcha_enable_4: ['registration'],
  brand2_help_center_settings_captcha_unit_4: {
    label: 'based on rate limits',
    value: 'rate-limits'
  },
  brand2_help_center_settings_captcha_enable_5: ['sharing_content'],
  brand2_help_center_settings_captcha_unit_5: {
    label: 'based on rate limits',
    value: 'rate-limits'
  },

  brand3_help_center_settings_brand_name: 'Brand 3',
  brand3_help_center_settings_brand_logo: '',
  brand3_help_center_settings_brand_favicon: '',
  brand3_help_center_settings_brand_color: '#c4c4c4',
  brand3_help_center_settings_website_name: 'Brand3',
  brand3_help_center_settings_website_url: 'https://www.brand3.co.uk',
  brand3_help_center_settings_helpdesk_name: 'Brand 3 Support Centre',
  brand3_help_center_settings_helpdesk_slug: 'james-test',
  brand3_help_center_settings_helpdesk_domain: 'custom',
  brand3_help_center_settings_helpdesk_domain_custom:
    'testnew001-test.deskpro.net',
  brand3_help_center_settings_https: true,
  brand3_help_center_settings_knowledgebase: true,
  brand3_help_center_settings_news: true,
  brand3_help_center_settings_downloads: true,
  brand3_help_center_settings_community: true,
  brand3_help_center_settings_show_user_ratings_publicly: true,
  brand3_help_center_settings_allow_comments_content: true,
  brand3_help_center_settings_captcha: 'deskpro',
  brand3_help_center_settings_captcha_enable_1: ['new_tickets'],
  brand3_help_center_settings_captcha_unit_1: {
    label: 'for guests',
    value: 'guests'
  },
  brand3_help_center_settings_captcha_enable_2: ['new_comments'],
  brand3_help_center_settings_captcha_unit_2: {
    label: 'for everyone',
    value: 'everyone'
  },
  brand3_help_center_settings_captcha_enable_3: ['new_community_topics'],
  brand3_help_center_settings_captcha_unit_3: {
    label: 'for everyone',
    value: 'everyone'
  },
  brand3_help_center_settings_captcha_enable_4: ['registration'],
  brand3_help_center_settings_captcha_unit_4: {
    label: 'based on rate limits',
    value: 'rate-limits'
  },
  brand3_help_center_settings_captcha_enable_5: ['sharing_content'],
  brand3_help_center_settings_captcha_unit_5: {
    label: 'based on rate limits',
    value: 'rate-limits'
  },

  brand4_help_center_settings_brand_name: 'Brand 4',
  brand4_help_center_settings_brand_logo: '',
  brand4_help_center_settings_brand_favicon: '',
  brand4_help_center_settings_brand_color: '#c4c4c4',
  brand4_help_center_settings_website_name: 'Brand4',
  brand4_help_center_settings_website_url: 'https://www.brand4.co.uk',
  brand4_help_center_settings_helpdesk_name: 'Brand 4 Support Centre',
  brand4_help_center_settings_helpdesk_slug: 'james-test',
  brand4_help_center_settings_helpdesk_domain: 'custom',
  brand4_help_center_settings_helpdesk_domain_custom:
    'testnew001-test.deskpro.net',
  brand4_help_center_settings_https: true,
  brand4_help_center_settings_knowledgebase: true,
  brand4_help_center_settings_news: true,
  brand4_help_center_settings_downloads: true,
  brand4_help_center_settings_community: true,
  brand4_help_center_settings_show_user_ratings_publicly: true,
  brand4_help_center_settings_allow_comments_content: true,
  brand4_help_center_settings_captcha: 'deskpro',
  brand4_help_center_settings_captcha_enable_1: ['new_tickets'],
  brand4_help_center_settings_captcha_unit_1: {
    label: 'for guests',
    value: 'guests'
  },
  brand4_help_center_settings_captcha_enable_2: ['new_comments'],
  brand4_help_center_settings_captcha_unit_2: {
    label: 'for everyone',
    value: 'everyone'
  },
  brand4_help_center_settings_captcha_enable_3: ['new_community_topics'],
  brand4_help_center_settings_captcha_unit_3: {
    label: 'for everyone',
    value: 'everyone'
  },
  brand4_help_center_settings_captcha_enable_4: ['registration'],
  brand4_help_center_settings_captcha_unit_4: {
    label: 'based on rate limits',
    value: 'rate-limits'
  },
  brand4_help_center_settings_captcha_enable_5: ['sharing_content'],
  brand4_help_center_settings_captcha_unit_5: {
    label: 'based on rate limits',
    value: 'rate-limits'
  },

  brand5_help_center_settings_brand_name: 'Brand 5',
  brand5_help_center_settings_brand_logo: '',
  brand5_help_center_settings_brand_favicon: '',
  brand5_help_center_settings_brand_color: '#c4c4c4',
  brand5_help_center_settings_website_name: 'Brand5',
  brand5_help_center_settings_website_url: 'https://www.brand5.co.uk',
  brand5_help_center_settings_helpdesk_name: 'Brand 5 Support Centre',
  brand5_help_center_settings_helpdesk_slug: 'james-test',
  brand5_help_center_settings_helpdesk_domain: 'custom',
  brand5_help_center_settings_helpdesk_domain_custom:
    'testnew001-test.deskpro.net',
  brand5_help_center_settings_https: true,
  brand5_help_center_settings_knowledgebase: true,
  brand5_help_center_settings_news: true,
  brand5_help_center_settings_downloads: true,
  brand5_help_center_settings_community: true,
  brand5_help_center_settings_show_user_ratings_publicly: true,
  brand5_help_center_settings_allow_comments_content: true,
  brand5_help_center_settings_captcha: 'deskpro',
  brand5_help_center_settings_captcha_enable_1: ['new_tickets'],
  brand5_help_center_settings_captcha_unit_1: {
    label: 'for guests',
    value: 'guests'
  },
  brand5_help_center_settings_captcha_enable_2: ['new_comments'],
  brand5_help_center_settings_captcha_unit_2: {
    label: 'for everyone',
    value: 'everyone'
  },
  brand5_help_center_settings_captcha_enable_3: ['new_community_topics'],
  brand5_help_center_settings_captcha_unit_3: {
    label: 'for everyone',
    value: 'everyone'
  },
  brand5_help_center_settings_captcha_enable_4: ['registration'],
  brand5_help_center_settings_captcha_unit_4: {
    label: 'based on rate limits',
    value: 'rate-limits'
  },
  brand5_help_center_settings_captcha_enable_5: ['sharing_content'],
  brand5_help_center_settings_captcha_unit_5: {
    label: 'based on rate limits',
    value: 'rate-limits'
  }
};
