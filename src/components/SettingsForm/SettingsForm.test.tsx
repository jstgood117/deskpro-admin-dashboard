import * as React from 'react';
import { mount } from '../../test/enzyme';

import SettingsForm from './SettingsForm';

describe('SettingsForm', () => {
  const wrapper = (ui: any, values?: any) =>
    mount(<SettingsForm ui={ui} initialValues={values || {}} />);
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

  it('should generate info link', () => {
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
