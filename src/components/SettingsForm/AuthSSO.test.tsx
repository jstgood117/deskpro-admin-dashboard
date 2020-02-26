import * as React from 'react';
import { DocumentNode } from 'graphql';
import { gql } from 'apollo-boost';

import { mount } from '../../test/enzyme';
import AuthSSO from './AuthSSO';

const testQuery: DocumentNode = gql`
  mutation UpdateSettings($payload: Object!) {
    update_settings(payload: $payload)
  }
`;

describe('SettingsForm', () => {
  const wrapper = (ui: any, values?: any) =>
    mount(
      <AuthSSO
        ui={ui}
        initialValues={values || {}}
        initYupSchema={{
          type: 'object',
          properties: {}
        }}
        saveSchema={testQuery}
      />
    );
  it('should render settings form', () => {
    const root = wrapper({
      elements: [
        {
          title: 'Test settings',
          type: 'feature_section',
          elements: []
        }
      ]
    });
    expect(root.find('h1').length).toEqual(1);
    expect(root.find('h1').text()).toEqual('Test settings');
  });

  it('should render unit form', () => {
    const root = wrapper({
      elements: [
        {
          title: 'Test settings',
          type: 'feature_section',
          elements: [
            {
              title: 'Remember Device',
              type: 'page_section',
              elements: [
                {
                  type: 'vertical_group',
                  title: 'Stay logged in when browser closed',
                  description:
                    'Allow agents the choice of remaining logged in on a device when they close their browser. This means agents will only be logged out when they deliberately log out.',
                  showOn: 'agent_auth_sso_remember_device_enabled',
                  field: {
                    type: 'toggle',
                    id: 'agent_auth_sso_remember_device_enabled'
                  },
                  info: [
                    {
                      type: 'button',
                      title: 'Agent idle timeout',
                      url: 'http://www.test.com',
                      icon: 'link'
                    }
                  ],
                  elements: [
                    {
                      type: 'field',
                      title: 'Require agent revalidate their credentials after',
                      field: {
                        type: 'units',
                        id: 'agent_auth_sso_remember_device_field',
                        optionId: 'agent_auth_sso_remember_device_option',
                        options: [
                          { value: 'day', label: 'day' },
                          { value: 'months', label: 'months' }
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
    });
    expect(root.find('input').length).toBeGreaterThan(0);
  });

  it('should generate group info link', () => {
    const root = wrapper({
      elements: [
        {
          title: 'Test settings',
          type: 'vertical_group',
          info: [
            {
              url: '/test',
              icon: 'test',
              title: 'test'
            }
          ],
          elements: [
            {
              type: 'field',
              field: {
                type: 'input',
                id: 'test-input'
              }
            }
          ]
        }
      ]
    });
    expect(root.find('a').length).toEqual(1);
  });

  it('should generate field info link', () => {
    const root = wrapper({
      elements: [
        {
          title: 'Test settings',
          type: 'vertical_group',
          elements: [
            {
              type: 'field',
              field: {
                type: 'input',
                id: 'test-input'
              },
              info: [
                {
                  url: '/test',
                  icon: 'test',
                  title: 'test'
                }
              ]
            }
          ]
        }
      ]
    });
    expect(root.find('a').length).toEqual(1);
  });
});
