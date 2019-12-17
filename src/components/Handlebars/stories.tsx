import React from 'react';
import { storiesOf } from '@storybook/react';

import Handlebars from './Handlebars';

storiesOf('Handlebars template', module)
  .add('Handlebars custom template ', () => (
    <Handlebars template='<p>{{name}}</p>' data={{name:'John'}} />
  ));
