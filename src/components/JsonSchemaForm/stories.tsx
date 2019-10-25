import React from 'react';
import { storiesOf } from '@storybook/react';

import JsonSchemaForm, {
  ISchemaType,
  ObjectFieldTemplate,
  SearchComponent,
  ICustomProps
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
  },
  Search: {
    'ui:widget': (props: ICustomProps) => {
      return <SearchComponent {...props} />;
    }
  }
};

const formData = {
  Input: 'Initial Value'
};

storiesOf('Json Schema Form', module).add('with dummy data', () => (
  <JsonSchemaForm schema={schema} uiSchema={uiSchema} formData={formData} />
));
