import React from 'react';
import {mount} from '../../../test/enzyme';

import InlineEdit from './InlineEdit';

describe('InlineEdit', () => {
  const wrapper = ({ inline, field, formikProps }: { inline?: any, field?: any, formikProps?: any }) =>
    mount(
      <InlineEdit
        inline={inline}
        field={field}
        formikProps={formikProps}
      />
    );
  it('should render', () => {
    const root = wrapper({
      inline: [
        {
          type: 'label',
          label: 'Require this many symbols: '
        },
        {
          type: 'input',
          id: 'custom_policy_require_symbols_value',
        }
      ],
      field: {
        type: 'checkbox',
        id: 'custom_policy_require_symbols',
        value: 'yes'
      },
      formikProps: {
        values: {
          custom_policy_require_symbols_value: 1,
          custom_policy_require_symbols: 'yes'
        }
      }
    });
    expect(root.length).toBeGreaterThan(0);
  });
});
