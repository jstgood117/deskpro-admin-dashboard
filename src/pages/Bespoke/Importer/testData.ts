export const uiKayakoSchema: {
  elements: any;
} = {
  elements: [
    {
      type: 'page_section',
      elements: [
        {
          type: 'vertical_group',
          elements: [
            {
              type: 'field',
              title: 'Host',
              field: {
                type: 'input',
                id: 'bespoke_host',
                placeholder: 'localhost'
              }
            },
            {
              type: 'field',
              title: 'Port',
              field: {
                type: 'input',
                id: 'bespoke_port',
                placeholder: '3306'
              }
            },
            {
              type: 'field',
              title: 'Username',
              field: {
                type: 'input',
                id: 'bespoke_username',
                placeholder: 'testing@deskpro.com'
              }
            },
            {
              type: 'field',
              title: 'Password',
              field: {
                type: 'input',
                id: 'bespoke_password'
              }
            },
            {
              type: 'field',
              title: 'Database name',
              field: {
                type: 'input',
                id: 'bespoke_database',
                placeholder: 'kayako'
              }
            }
          ]
        }
      ]
    }
  ]
};
export const uiZendeskSchema: {
  elements: any;
} = {
  elements: [
    {
      type: 'page_section',
      elements: [
        {
          type: 'vertical_group',
          elements: [
            {
              type: 'field',
              title: 'Domain',
              field: {
                type: 'input',
                id: 'bespoke_zendesk_domain',
                placeholder: 'yoursubdomain'
              }
            },
            {
              type: 'field',
              title: 'Admin Username',
              field: {
                type: 'input',
                id: 'bespoke_zendesk_username',
                placeholder: 'email@example.com'
              }
            },
            {
              type: 'field',
              title: 'Admin Token',
              field: {
                type: 'input',
                id: 'bespoke_zendesk_token',
                placeholder: 'Uwekfj32485iugLWei23F23B0'
              }
            },
            {
              type: 'field',
              title: 'Start Time',
              field: {
                type: 'input',
                id: 'bespoke_zendesk_time',
                placeholder: 'DD/MM/YYYY'
              }
            },
            {
              type: 'field',
              title: 'Ticket Brand Custom Field',
              field: {
                type: 'input',
                id: 'bespoke_zendesk_brand',
                placeholder: 'Brand'
              }
            }
          ]
        }
      ]
    }
  ]
};
