import React from 'react';
import { storiesOf } from '@storybook/react';

import FileCheckBoard from './FileCheckBoard';

storiesOf('FileCheckBoard', module)
  .add('error', () => (
    <div style={{ maxWidth: 668 }}>
      <FileCheckBoard
        errors={[
          '/usr/share/nginx/deskpro/site41500/config_new/advanced/config.settings.php',
          '/usr/share/nginx/deskpro/site41500/config_new/advanced/config.env.php'
        ]}
        type='error'
      />
    </div>
  ))
  .add('success', () => (
    <div style={{ maxWidth: 668 }}>
      <FileCheckBoard type='success' />
    </div>
  ));
