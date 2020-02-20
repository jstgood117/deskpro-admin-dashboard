import * as React from 'react';
import { DocumentNode } from 'graphql';
import { gql } from 'apollo-boost';
import { mount } from '../../../test/enzyme';

import TicketReferences from './TicketReferences';

const testQuery: DocumentNode = gql`
  mutation UpdateSettings($payload: Object!) {
    update_settings(payload: $payload)
  }
`;

describe('SettingsForm', () => {
  const wrapper = (ui: any, values?: any) =>
    mount(
      <TicketReferences
        path='tickets/ref-codes'
        ui={ui}
        initialValues={values || {}}
        initYupSchema={{
          type: 'object',
          properties: {}
        }}
        saveSchema={testQuery}
      />
    );
  it('should always renders a <div>', () => {
    const root = wrapper({
      elements: [
        {
          title: 'Test settings',
          type: 'feature_section',
          elements: []
        }
      ]
    });
    expect(root.find('div').length).toBeGreaterThan(0);
  });
});
