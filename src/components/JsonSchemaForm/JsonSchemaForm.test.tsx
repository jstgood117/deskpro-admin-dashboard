import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import JsonSchemaForm, {
  IProps,
  ICustomProps,
  ObjectFieldTemplate,
  ISchemaType
} from './JsonSchemaForm';
import { JSONSchema6Definition } from 'json-schema';

const schema: ISchemaType = {
  title: 'Form Title',
  description: 'This is Json Schema Form.',
  type: 'object' as 'object',
  properties: {
    Input: { type: 'string', title: 'Input' },
    Number: { type: 'number', title: 'Number' },
    Search: { type: 'string', title: 'Search' }
  } as { [k: string]: JSONSchema6Definition }
};

const uiSchema = {
  'ui:ObjectFieldTemplate': ObjectFieldTemplate,
  Input: {
    'ui:placeholder': 'Placeholder',
    'ui:autofocus': true
  },
  Number: {
    'ui:placeholder': 'Number'
  }
};

describe('JsonSchemaForm', () => {
  let props: IProps;
  let mountedJsonSchemaForm: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedJsonSchemaForm) {
      mountedJsonSchemaForm = bShallow
        ? shallow(<JsonSchemaForm {...props} />)
        : mount(<JsonSchemaForm {...props} />);
    }
    return mountedJsonSchemaForm;
  };

  beforeEach(() => {
    props = {
      schema: schema,
      uiSchema: uiSchema
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
