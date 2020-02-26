import * as React from 'react';
import { DocumentNode } from 'graphql';
import { gql } from 'apollo-boost';

import SettingUserAuthSSO from './SettingUserAuthSSO';
import { mount } from '../../../test/enzyme';

const testQuery: DocumentNode = gql`
  mutation UpdateSettings($payload: Object!) {
    update_settings(payload: $payload)
  }
`;

describe('SettingUserAuthSSO', () => {
  const wrapper = (ui: any, values?: any) =>
    mount(
      <SettingUserAuthSSO
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
