import React from 'react';
import { mount } from '../../../test/enzyme';

import InlineEditGroup from './InlineEditGroup';

describe('InlineEditGroup', () => {
  const wrapper = (props: any) => mount(<InlineEditGroup {...props} />);
  it('should render', () => {
    const root = wrapper({
      description:
        'How many days a password can remain unchanged until Deskpro requires the user to change it.',
      className: 'checkbox-field-inline',
      inline: [
        {
          type: 'label',
          label: 'Maximum password age:'
        },
        {
          type: 'input',
          id: 'custom_policy_maximum_password_value'
        },
        {
          type: 'label',
          label: 'days'
        }
      ],
      showRevert: true,
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
