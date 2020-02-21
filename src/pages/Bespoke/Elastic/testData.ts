import { API_SettingsUiElement } from '../../../codegen/types';

export const uiSchema: {
  elements: API_SettingsUiElement & { type: string }[];
} = {
  elements: [
    {
      title: 'Elasticsearch',
      type: 'feature_section',
      header: {
        title: 'Elasticsearch',
        card: 'ElasticsearchCard',
        showOn: 'elastic_search_header',
        description:
          'You can only disable Deskpro Agent Authentication if you have enabled a different agent authentication source.'
      },
      elements: [
        {
          type: 'page_section',
          title: 'Settings',
          elements: [
            {
              type: 'vertical_group',
              title: 'Elasticsearch URL',
              description:
                'Enter the URL to your Elasticsearch service. (http://localhost/, https://search:9200/, http://my-es-host:80/, http://user:pass@host:9200/)',
              markdown: false,
              className: 'elasticsearch-settings',
              info: [
                {
                  type: 'button',
                  title: 'Installing Elasticsearch',
                  url: 'http://www.test.com',
                  icon: 'guide'
                },
                {
                  type: 'button',
                  title: 'Using hosted Elasticsearch',
                  url: 'http://www.test.com',
                  icon: 'guide'
                }
              ],
              elements: [
                {
                  type: 'field',
                  className: 'ip-address',
                  field: {
                    type: 'input',
                    id: 'elastic_search_setting_url'
                  }
                }
              ]
            }
          ]
        },
        {
          title: 'Apache Tika',
          type: 'page_section',
          elements: [
            {
              type: 'vertical_group',
              title: 'Apache Tika',
              className: 'apache-tika',
              showOn: 'elastic_search_apache_tika',
              field: {
                type: 'toggle',
                id: 'elastic_search_apache_tika'
              },
              elements: [
                {
                  type: 'field',
                  className: 'ip-address',
                  title: 'Apache Tika IP Address',
                  field: {
                    type: 'input',
                    id: 'elastic_search_apache_tika_ip_address'
                  }
                },
                {
                  type: 'field',
                  className: 'port',
                  title: 'Apache Tika Port',
                  description: 'By default 9998.',
                  field: {
                    type: 'input',
                    id: 'elastic_search_apache_tika_port'
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const jsonSchema = {
  elastic_search_header: true,
  elastic_search_apache_tika: true,
  elastic_search_setting_url: '',
  elastic_search_apache_tika_ip_address: '',
  elastic_search_apache_tika_port: ''
};

export const vaildationSchema = {
  type: 'object',
  properties: {
    elastic_search_apache_tika: {
      type: 'boolean'
    },
    agent_auth_sso_remember_device_field: {
      type: 'number'
    },
    elastic_search_apache_tika_ip_address: {
      type: 'string',
      pattern:
        '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$',
      when: {
        elastic_search_apache_tika: {
          is: true,
          then: {
            required: true
          }
        }
      }
    },
    elastic_search_apache_tika_port: {
      type: 'string',
      pattern:
        '^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$',
      when: {
        elastic_search_apache_tika: {
          is: true,
          then: {
            required: true
          }
        }
      }
    },
    elastic_search_setting_url: {
      type: 'string',
      pattern:
        '^(?:([a-z0-9+.-]+)://)(?:S+(?::S*)?@)?(?:(?:[1-9]d?|1dd|2[01]d|22[0-3])(?:.(?:1?d{1,2}|2[0-4]d|25[0-5])){2}(?:.(?:[1-9]d?|1dd|2[0-4]d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*.?)(?::d{2,5})?(?:[/?#]S*)?$',
      required: true
    }
  }
};

export const validationConfig = {
  errMessages: {
    elastic_search_apache_tika_ip_address: {
      required: 'validation.required',
      pattern: 'validation.ipPattern'
    },
    elastic_search_apache_tika_port: {
      required: 'validation.required',
      pattern: 'validation.portPattern'
    },
    elastic_search_setting_url: {
      required: 'validation.required',
      pattern: 'validation.urlPattern'
    }
  }
};
