import * as React from 'react';
import { mount } from '../../test/enzyme';

import SettingsForm from './SettingsForm';

describe('SettingsForm', () => {
  it('should render settings form', () => {
    const root = mount(
      <SettingsForm
        ui={{
          elements: [
            {
              title: 'Test settings',
              type: 'feature_section',
              elements: []
            }
          ]
        }}
        initialValues={{}}
      />
    );
    expect(root.find('h1').length).toEqual(1);
    expect(root.find('h1').text()).toEqual('Test settings');
  });
});
