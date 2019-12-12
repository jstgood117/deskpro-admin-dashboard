export const uiSchema = {
  'elements': [
    {
      'type': 'page_section',
      'title': 'Inbound Email Settings',
      'elements': [
        {
          'type': 'field',
          'title': 'Download Hotlinked Images',
          'field': {
            'type': 'toggle',
            'id': 'inbound_email_download_hotlinked_enabled',
          }
        },
        {
          'type': 'vertical_group',
          'showOn': 'inbound_email_download_hotlinked_enabled',
          'elements': [
            {
              'type': 'field',
              'title': 'Maximum image size',
              'field': {
                'type': 'input',
                'id': 'inbound_email_download_hotlinked_max'
              }
            },
            {
              'type': 'field',
              'title': 'Maximum cumulative size',
              'field': {
                'type': 'input',
                'id': 'inbound_email_download_hotlinked_max_total'
              }
            }
          ]
        }
      ]
    }
  ]
};

export const jsonSchema = {
  'inbound_email_download_hotlinked_enabled': true,
  'inbound_email_download_hotlinked_max': 100,
  'inbound_email_download_hotlinked_max_total':1000
};