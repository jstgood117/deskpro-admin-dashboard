import React from 'react';
import { storiesOf } from '@storybook/react';

import Attachment from './Attachment';

storiesOf('Attachment', module).add('attachment', () => <Attachment id="1" text="Attachment 1" />);